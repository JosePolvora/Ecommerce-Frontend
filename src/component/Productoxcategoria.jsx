import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import { CarritoContext } from '../context/CarritoContext';


function Productosxcategoria() {
    const { agregarAlCarrito } = useContext(CarritoContext);

    const { id } = useParams();
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        // Llamada a la API para obtener productos por categoría
        axios.get(`http://localhost:3000/api/productos/categoria/${id}`)
            .then(response => {
                setProductos(response.data.body); // Recibe el array de productos con categorías
            })
            .catch(error => {
                console.error("Error al obtener los productos:", error);
            });
    }, [id]);

    return (
        <section className='ml-28 mr-28 mt-10'>
            <h3 className="text-center pt-1 text-3xl mb-10">Productos por Categoria</h3>

          

            <div className="m-10 grid grid-cols-3">
                {productos.map((item) => (
                    <div key={item.productoProductoId}>
                        <div className="tarjeta">
                            {/* <div>
                                <img className="pl-6 w-40 h-75" src={item.producto.imagen} />
                            </div> */}
                            <div className="text-lg p-2">
                                <span className="font-bold">Nombre: </span>
                                {item.producto.nombre}
                            </div>
                            <div className="text-lg p-2">
                                <span className="font-bold">Precio: </span>
                                $ {item.producto.precio}
                            </div>
                            <div className="text-base p-2">
                                <span className="font-bold">Descripción: </span>
                                {item.producto.descripcion}
                            </div>

                        </div>

                        <div className="btnAgregar">
                            <button onClick={() => agregarAlCarrito(item.producto)}>
                                Agregar al carrito
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {/* <a href="http://localhost:5173" className="hover:text-gray-400 ml-5 fixed bottom-5 right-10">
                ⬅ Inicio
            </a>
            <a href="http://localhost:5173/carrito" className="hover:text-gray-800 ml-5 fixed bottom-5 left-1">
                <img src="" id="imgCarritto" />
            </a> */}
        </section>
    );
}

export default Productosxcategoria;