import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CarritoContext } from '../context/CarritoContext';
import Swal from 'sweetalert2';

const DetalleProducto = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { agregarAlCarrito } = useContext(CarritoContext);
    const [imagenPrincipal, setImagenPrincipal] = useState('');
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [comentario, setComentario] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:3000/api/productos/${id}`)
            .then((respuesta) => {
                setProducto(respuesta.data.body);
                setImagenPrincipal(respuesta.data.body.imagen);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error al obtener los detalles del producto:", error);
                setError("No se pudo cargar el producto.");
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p className="text-center text-2xl">Cargando...</p>;
    if (error) return <p className="text-center text-2xl text-red-600">{error}</p>;

    const handleAgregarAlCarrito = () => {
        if (!producto?.disponible) {
            Swal.fire({
                title: 'El producto no está disponible.',
                icon: 'error',
                confirmButtonText: 'Aceptar',
                timer: 2000,
            });
            return;
        }

        agregarAlCarrito(producto);
        Swal.fire({
            title: '¡Producto agregado!',
            text: `${producto.nombre} ha sido agregado al carrito.`,
            icon: 'success',
            confirmButtonText: 'Aceptar',
            timer: 2000,
        });
    };

    const handleImagenClick = (imagen) => {
        setImagenPrincipal(imagen);
    };

    const openLightbox = () => {
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/api/comentarios', {
                comentario: comentario,
            });

            if (response.data.ok) {
                Swal.fire('Éxito', 'Mensaje enviado exitosamente', 'success');
                setComentario('');
            } else {
                Swal.fire('Error', 'Error al enviar el mensaje', 'error');
            }
        } catch (error) {
            console.error('Error al enviar el mensaje:', error);
            Swal.fire('Error', 'Error en el servidor', 'error');
        }
    };

    return (
        <div className="flex justify-center items-center mt-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl rounded-md overflow-hidden shadow-lg bg-white p-8 mb-10 border-2 border-gray-300">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                        <div className="cursor-pointer" onClick={openLightbox}>
                            <img
                                className="mx-auto block w-50 h-85 transform transition-transform duration-300 hover:scale-110"
                                src={imagenPrincipal}
                                alt={producto?.nombre}
                            />
                        </div>

                        <div className="flex mt-6 space-x-2">
                            <img
                                className="w-24 h-36 cursor-pointer border-2 border-transparent hover:border-gray-400 p-1 transition-all duration-200"
                                src={producto?.imagenUno}
                                alt={producto?.nombre}
                                onClick={() => handleImagenClick(producto?.imagenUno)}
                            />
                            <img
                                className="w-24 h-36 cursor-pointer border-2 border-transparent hover:border-gray-400 p-1 transition-all duration-200"
                                src={producto?.imagenDos}
                                alt={producto?.nombre}
                                onClick={() => handleImagenClick(producto?.imagenDos)}
                            />
                            <img
                                className="w-24 h-36 cursor-pointer border-2 border-transparent hover:border-gray-400 p-1 transition-all duration-200"
                                src={producto?.imagenTres}
                                alt={producto?.nombre}
                                onClick={() => handleImagenClick(producto?.imagenTres)}
                            />
                        </div>
                    </div>

                    <div className="md:w-1/2 md:ml-6 mt-4 md:mt-0">
                        <h3 className="text-left text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">{producto?.nombre}</h3>

                        <p className="text-xl sm:text-2xl font-semibold mb-4 text-gray-700">
                            Precio: <span className="text-gray-600">${producto?.precio}</span>
                        </p>

                        <p className="text-xl sm:text-2xl font-semibold mb-4 text-gray-700">
                            Descripción: <span className='text-base sm:text-base text-gray-600'>{producto?.descripcion}</span>
                        </p>

                        <div>
                            <button
                                className="w-full px-4 py-2 mt-5 bg-red-900 text-white rounded"
                                onClick={handleAgregarAlCarrito}
                            >
                                <span className='font-bold'>Agregar al carrito</span>
                            </button>
                        </div>

                        <div className='pt-8 flex justify-center'>
                            {producto?.disponible ? (
                                <div></div>
                            ) : (
                                <a href="http://localhost:5173/contacto" className='text-white bg-red-500 text-center text-base p-1 w-3/4'>
                                    <i className='bx bx-block'></i> Consultar stock
                                </a>
                            )}
                        </div>
                    </div>
                </div>


                <div className="border border-gray-300 p-4 rounded-md mt-10">
                    <h3 className="text-left mb-2">Características generales</h3>
                    <table className="w-full border border-collapse table-auto">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2 bg-gray-200 text-left">Tipo</th>
                                <th className="border px-4 py-2 bg-gray-200 text-left">Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {producto.especificaciones && producto.especificaciones.trim() ? (
                                producto.especificaciones.split('\n').map((item, index) => {
                                    const [tipo, descripcion] = item.split('|');
                                    return (
                                        <tr key={index} className="odd:bg-white even:bg-gray-50">
                                            <td className="border px-4 py-2">{tipo?.trim()}</td>
                                            <td className="border px-4 py-2">{descripcion?.trim()}</td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan="2" className="border px-4 py-2 text-center text-gray-500">
                                        Sin datos disponibles
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    <h3 className="text-left mb-2">Especificaciones</h3>
                    <table className="w-full border border-collapse table-auto">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2 bg-gray-200 text-left">Tipo</th>
                                <th className="border px-4 py-2 bg-gray-200 text-left">Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {producto.caracteristicas && producto.caracteristicas.trim() ? (
                                producto.caracteristicas.split('\n').map((item, index) => {
                                    const [tipo, descripcion] = item.split('|');
                                    return (
                                        <tr key={index} className="odd:bg-white even:bg-gray-50">
                                            <td className="border px-4 py-2">{tipo?.trim()}</td>
                                            <td className="border px-4 py-2">{descripcion?.trim()}</td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan="2" className="border px-4 py-2 text-center text-gray-500">
                                        Sin datos disponibles
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            </div>

            {isLightboxOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center" onClick={closeLightbox}>
                    <div className="relative">
                        <img className="max-w-full max-h-screen" src={imagenPrincipal} alt="Producto ampliado" />
                    </div>
                    <button
                        className="absolute top-4 right-4 bg-slate-500 text-black rounded-full py-1 px-3  text-xl"
                        onClick={closeLightbox}
                    >
                        &times;
                    </button>
                </div>
            )}

            <div className="ml-20">
                <h2 className='text-center pb-5'>Envianos un comentario</h2>
                <form onSubmit={handleSubmit}>
                    <textarea
                        placeholder="Comentario"
                        className="inp"
                        value={comentario}
                        onChange={(e) => setComentario(e.target.value)}
                        required
                    />
                    <input className="btnForm" type="submit" value="Enviar" />
                </form>
            </div>

        </div>
    );
};

export default DetalleProducto;