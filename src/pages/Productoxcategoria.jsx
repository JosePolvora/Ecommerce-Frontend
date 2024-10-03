// import { useParams } from 'react-router-dom';
// import { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import { CarritoContext } from '../context/CarritoContext';
// import { useNavigate } from 'react-router-dom';

// function Productosxcategoria() {
//     const { agregarAlCarrito } = useContext(CarritoContext);
//     const { id } = useParams();
//     const [productos, setProductos] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Llamada a la API para obtener productos por categoría
//         axios.get(`http://localhost:3000/api/productos/categoria/${id}`)
//             .then(response => {
//                 setProductos(response.data.body); // Recibe el array de productos con categorías
//             })
//             .catch(error => {
//                 console.error("Error al obtener los productos:", error);
//             });
//     }, [id]);


//     // Función para redirigir al detalle del producto

//     const handleVerDetalles = (productoxcategoria_id) => {
//         navigate(`/detallexproducto/${productoxcategoria_id}`);
//     };

//     return (

//         <section className='ml-28 mr-28 mt-10'>
//             <h3 className="text-center pt-1 text-3xl mb-10">Productos por Categoria</h3>

//             <div className="m-10 grid grid-cols-3">
//                 {productos.map((item) => (

//                     <div key={item.productoProductoId}>

//                         <div className="tarjeta" onClick={() => handleVerDetalles(item.productoxcategoria_id)}>
//                             {/* <img className="pl-6 w-40 h-75" src={`./src/images/${item.producto.imagen}`} alt={item.producto.imagen} /> */}
//                             <img className="pl-6 w-40 h-75" src={item.producto.imagen} alt={item.producto.imagen} />

//                             <div className="text-lg p-2">
//                                 <span className="font-bold">Nombre: </span>
//                                 {item.producto.nombre}
//                             </div>
//                             <div className="text-lg p-2">
//                                 <span className="font-bold">Precio: </span>
//                                 $ {item.producto.precio}
//                             </div>
//                             <div className="text-base p-2">
//                                 <span className="font-bold">Descripción: </span>
//                                 {item.producto.descripcion}
//                             </div>
//                         </div>
//                         <div className="btnAgregar">
//                             <button onClick={() => agregarAlCarrito(item.producto)}>
//                                 Agregar al carrito
//                             </button>
//                         </div>
//                         <div className="btnAgregar">
//                             <button onClick={() => handleVerDetalles(item.productoxcategoria_id)}>
//                                 Ver Detalles
//                             </button>
//                         </div>
//                     </div>


//                 ))}
//             </div>
//         </section>
//     );
// }

// export default Productosxcategoria;

import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { CarritoContext } from '../context/CarritoContext';
import { useNavigate } from 'react-router-dom';

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

                                {/* <img
                                    className="pl-6 w-40 h-15"
                                    src={item.producto.imagen}
                                    alt={item.producto.nombre}
                                /> */}

                                <div>
                                    <h2 className="text-2xl font-bold mb-4">{item.producto.nombre}</h2>
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
                            <div className='flex'>

                                <div className="btnAgregar">
                                    <button onClick={() => agregarAlCarrito(item.producto)}>
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
