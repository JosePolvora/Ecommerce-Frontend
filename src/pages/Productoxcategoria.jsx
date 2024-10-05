import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { CarritoContext } from '../context/CarritoContext';
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';

function Productosxcategoria() {
    const { agregarAlCarrito } = useContext(CarritoContext);
    const { id } = useParams();
    const [productos, setProductos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        console.log("ID de categoría:", id);
        axios.get(`http://localhost:3000/api/productos/categoria/${id}`)
            .then(response => {
                console.log("Respuesta de la API:", response.data);
                setProductos(response.data.body);
            })
            .catch(error => {
                console.error("Error al obtener los productos:", error);
            });
    }, [id]);


    const handleAgregarAlCarrito = (item) => {
        agregarAlCarrito(item);

        Swal.fire({
            title: '¡Producto agregado!',
            text: `${item.nombre} ha sido agregado al carrito.`,
            icon: 'success',
            confirmButtonText: 'Aceptar',
            timer: 2000,
        });
    };




    const handleVerDetalles = (productoxcategoria_id) => {
        console.log("Ver detalles de producto con ID:", productoxcategoria_id);
        navigate(`/detallexproducto/${productoxcategoria_id}`);
    };

    return (
        <section className='ml-28 mr-28 mt-10'>
            <h3 className="text-center pt-1 text-3xl mb-10">Productos por Categoria</h3>

            <div className="m-10 grid grid-cols-3">
                {productos.map((item) => {
                    console.log("Producto item:", item);

                    return (
                        <div key={item.productoProductoId}>
                            <div className="tarjeta" onClick={() => handleVerDetalles(item.productoxcategoria_id)}>

                                <img
                                    className="w-30 h-15"
                                    src={item.producto.imagen}
                                    alt={item.producto.nombre}
                                />
                                <div className="text-lg text-left">
                                    <span className="font-bold">Nombre: </span>
                                    {item.producto.nombre}
                                </div>
                                <div className="text-lg text-left">
                                    <span className="font-bold">Precio: </span>
                                    $ {item.producto.precio}
                                </div>
                                <div className="text-base text-left">
                                    <span className="font-bold">Descripción: </span>
                                    {item.producto.descripcion}
                                </div>
                            </div>
                            <div className='flex'>

                                <div className="btnAgregar">
                                    <button onClick={() => handleAgregarAlCarrito(item.producto)}>
                                        {/* <button onClick={() => agregarAlCarrito(item.producto)}> */}
                                        <span className='font-bold'>Agregar al carrito</span>
                                    </button>
                                </div>
                                <div className="btnDetalle">
                                    <button onClick={() => handleVerDetalles(item.productoxcategoria_id)}>
                                        <span className='font-bold'>Ver Detalles</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Productosxcategoria;
