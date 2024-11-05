import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CarritoContext } from '../context/CarritoContext';
import Swal from 'sweetalert2';

const Producto = () => {
    const { agregarAlCarrito } = useContext(CarritoContext);
    const [productos, setProductos] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [paginaActual, setPaginaActual] = useState(1); // Página actual
    const [totalPaginas, setTotalPaginas] = useState(1); // Total de páginas
    const productosPorPagina = 8; // Cantidad de productos por página
    const navigate = useNavigate();

    useEffect(() => {
        obtenerProductos(paginaActual);
    }, [paginaActual]);

    const obtenerProductos = (pagina) => {
        axios.get(`http://localhost:3000/api/productos?pagina=${pagina}&cantidad=${productosPorPagina}`)
            .then((respuesta) => {
                setProductos(respuesta.data.body);
                setTotalPaginas(respuesta.data.totalPaginas); // Establecer el total de páginas
            })
            .catch((error) => console.error("Error al obtener los datos:", error));
    };

    const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    // const handleAgregarAlCarrito = (item) => {
    //     agregarAlCarrito(item);

    //     Swal.fire({
    //         title: '¡Producto agregado!',
    //         text: `${item.nombre} ha sido agregado al carrito.`,
    //         icon: 'success',
    //         confirmButtonText: 'Aceptar',
    //         timer: 2000,
    //     });
    // };

    const handleAgregarAlCarrito = (item) => {
        if (!item?.disponible) {
            Swal.fire({
                title: 'El producto no está disponible.',
                icon: 'error',
                confirmButtonText: 'Aceptar',
                timer: 2000,
            });
            return;
        }

        agregarAlCarrito(item);
        Swal.fire({
            title: '¡Producto agregado!',
            text: `${item.nombre} ha sido agregado al carrito.`,
            icon: 'success',
            confirmButtonText: 'Aceptar',
            timer: 2000,
        });
    };


    const handleVerDetalles = (producto_id) => {
        navigate(`/detallexproducto/${producto_id}`);
    };

    // Funciones para cambiar de página
    const paginaSiguiente = () => {
        if (paginaActual < totalPaginas) {
            setPaginaActual(paginaActual + 1);
        }
    };

    const paginaAnterior = () => {
        if (paginaActual > 1) {
            setPaginaActual(paginaActual - 1);
        }
    };

    return (
        <section className='ml-28 mr-28 mt-10'>
            <h3 className="text-center pt-1 text-3xl mb-10"></h3>

            <div className="m-10 grid grid-cols-4 gap-6">
                {productosFiltrados.length > 0 ? productosFiltrados.map((item, i) => (
                    <div key={i}>
                        <div className="tarjeta-product" onClick={() => handleVerDetalles(item.producto_id)}>
                            <img className="cursor-pointer" src={item.imagen} alt={item.nombre} />
                            <div className="contenido-texto">
                                <span className="font-bold">Nombre: </span>
                                {item.nombre}
                            </div>
                            <div className="contenido-texto">
                                <span className="font-bold">Precio: </span>
                                $ {item.precio}
                            </div>
                            <div className="contenido-texto">
                                <span className="font-bold">Descripción: </span>
                                {item.descripcion}
                            </div>

                            <div className='pt-2'>
                                {item?.disponible === true ?
                                    <div></div>
                                    :
                                    // <div className=' text-red-900 font-bold italic text-center text-xl'>
                                    <div className=" text-white bg-red-500 mt-3 text-center text-base p-1 w-48">
                                        <i className='bx bx-block'></i> Consultar stock
                                    </div>
                                }
                            </div>

                        </div>

                        <div className='block mx-auto'>
                            <div className="flex flex-col items-center gap-2">
                                <button onClick={() => handleAgregarAlCarrito(item)} className="w-52 px-4 py-2 mt-5 bg-red-900 text-white rounded">
                                    <span className='font-bold'>Agregar al carrito</span>
                                </button>
                                <button onClick={() => handleVerDetalles(item.producto_id)} className="w-52 px-4 py-2 bg-neutral-950 text-white rounded">
                                    <span className='font-bold'>Ver Detalles</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )) : (
                    <p className="text-center col-span-4">No se encontraron productos</p>
                )}
            </div>

            {/* Controles de paginación */}
            <div className="flex justify-center mt-10 mb-10">
                <button
                    onClick={paginaAnterior}
                    disabled={paginaActual === 1}
                    className={`text-sm mr-4 px-4 py-1 bg-red-900 text-white rounded ${paginaActual === 1 ? 'opacity-50' : ''}`}
                >
                    Página Anterior
                </button>
                <span className="text-lg font-bold">{`Página ${paginaActual} de ${totalPaginas}`}</span>
                <button
                    onClick={paginaSiguiente}
                    disabled={paginaActual === totalPaginas}
                    className={`text-sm ml-4 px-4 py-1 bg-red-900 text-white rounded ${paginaActual === totalPaginas ? 'opacity-50' : ''}`}
                >
                    Página Siguiente
                </button>
            </div>
        </section>
    );
};

export default Producto;