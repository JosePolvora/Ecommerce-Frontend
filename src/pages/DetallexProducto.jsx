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

    useEffect(() => {
        axios.get(`http://localhost:3000/api/productos/${id}`)
            .then((respuesta) => {
                setProducto(respuesta.data.body);
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
        agregarAlCarrito(producto);
        Swal.fire({
            title: '¡Producto agregado!',
            text: `${producto.nombre} ha sido agregado al carrito.`,
            icon: 'success',
            confirmButtonText: 'Aceptar',
            timer: 2000,
        });
    };

    return (
        <div className="flex justify-center items-center mt-10">
            <div className="max-w-4xl rounded overflow-hidden shadow-lg bg-white p-8 mb-10">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                        <img className="pl-6 w-50 h-85" src={producto?.imagen} alt={producto?.nombre} />
                    </div>
                    <div className="md:w-1/2 md:ml-6 mt-4 md:mt-0">
                        <h2 className="text-4xl font-bold mb-4">{producto?.nombre}</h2>
                        <p className="text-2xl font-semibold mb-4 text-gray-700">Precio: <span className="text-green-600">${producto?.precio}</span></p>
                        <p className="text-lg text-gray-600 mb-6">Descripción: {producto?.descripcion}</p>
                        
                        <button
                            className='btnAgregar bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
                            onClick={handleAgregarAlCarrito}
                        >
                            <span className='font-bold'>Agregar al carrito</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetalleProducto;
