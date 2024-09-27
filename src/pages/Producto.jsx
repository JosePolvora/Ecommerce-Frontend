// import React, { useContext, useEffect, useState } from 'react';
// import axios from 'axios';
// import { CarritoContext } from '../context/CarritoContext';

// const Producto = () => {
//     const { agregarAlCarrito } = useContext(CarritoContext);
//     const [productos, setProductos] = useState([]); // Definir el estado para los productos
//     const [busqueda, setBusqueda] = useState(''); // Estado para la búsqueda

//     // useEffect para obtener los datos de la API
//     useEffect(() => {
//         axios.get("http://localhost:3000/api/productos")
//             .then((respuesta) => {
//                 setProductos(respuesta.data.body); // Actualizar el estado con los datos obtenidos
//                 console.log(respuesta);
//             })
//             .catch((error) => console.error("Error al obtener los datos:", error));
//     }, []);

//     // Filtrar los productos basados en la búsqueda
//     const productosFiltrados = productos.filter(producto =>
//         producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
//     );

//     return (
//         <section>
//             <h3 className="text-center pt-10 text-3xl">Nuestros Productos</h3>

//             <div className="flex text-base m-10">
//                 <a href="http://localhost:5173">Inicio</a>
//                 <p className="pl-2 pr-2">/</p>
//                 <a href="http://localhost:5173/carrito">Carrito</a>
//             </div>

//             {/* Barra de búsqueda con icono de lupa */}
//             <div className="flex justify-center items-center mb-5">
//                 <div className="relative">
//                     <input
//                         type="text"
//                         className="p-2 pl-10 border border-gray-300 rounded"
//                         placeholder="Buscar producto..."
//                         value={busqueda}
//                         onChange={(e) => setBusqueda(e.target.value)} // Actualizar el estado de búsqueda
//                     />
//                     {/* Lupa SVG */}
//                     <svg
//                         className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                     >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20a8 8 0 100-16 8 8 0 000 16zm21-10h5m-2 2l1 2" />
//                         <path d="M21 21l-4-4" />
//                     </svg>
//                 </div>
//             </div>

//             <div className="m-10 grid grid-cols-4">
//                 {productosFiltrados.length > 0 ? productosFiltrados.map((item, i) => (
//                     <div key={i}>
//                         <div className="tarjeta">
//                             <div>
//                                 <img className="pl-6 w-50 h-85" src={item.imagen} alt={item.imagen} />

//                             </div>
//                             <div className="text-lg p-2">
//                                 <span className="font-bold">Nombre: </span>
//                                 {item.nombre}
//                             </div>
//                             <div className="text-lg p-2">
//                                 <span className="font-bold">Precio: </span>
//                                 $ {item.precio}
//                             </div>
//                             <div className="text-base p-2">
//                                 <span className="font-bold">Descripción: </span>
//                                 {item.descripcion}
//                             </div>
//                         </div>

//                         <div className="btnAgregar">
//                             <button onClick={() => agregarAlCarrito(item)}>
//                                 Agregar al carrito
//                             </button>
//                         </div>
//                     </div>
//                 )) : (
//                     <p className="text-center col-span-4">No se encontraron productos</p>
//                 )}
//             </div>
//         </section>
//     );
// };

// export default Producto;

import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { CarritoContext } from '../context/CarritoContext';
import Swal from 'sweetalert2';

const Producto = () => {
    const { agregarAlCarrito } = useContext(CarritoContext);
    const [productos, setProductos] = useState([]); // Definir el estado para los productos
    const [busqueda, setBusqueda] = useState(''); // Estado para la búsqueda

    // useEffect para obtener los datos de la API
    useEffect(() => {
        axios.get("http://localhost:3000/api/productos")
            .then((respuesta) => {
                setProductos(respuesta.data.body); // Actualizar el estado con los datos obtenidos
                console.log(respuesta);
            })
            .catch((error) => console.error("Error al obtener los datos:", error));
    }, []);

    // Filtrar los productos basados en la búsqueda
    const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    const handleAgregarAlCarrito = (item) => {
        agregarAlCarrito(item); // Agregar el producto al carrito

        // Mostrar alerta con SweetAlert2
        Swal.fire({
            title: '¡Producto agregado!',
            text: `${item.nombre} ha sido agregado al carrito.`,
            icon: 'success',
            confirmButtonText: 'Aceptar',
            timer: 2000, // La alerta se cerrará automáticamente después de 2 segundos
        });
    };

    return (
        <section className='ml-28 mr-28 mt-10'>

            <h3 className="text-center pt-1 text-3xl mb-10">Nuestros Productos</h3>

            {/* Barra de búsqueda con icono de lupa */}
            <div className="flex justify-center items-center mb-5">
                <div className="relative">
                    <input
                        type="text"
                        className="p-2 pl-10 border border-gray-300 rounded"
                        placeholder="Buscar producto..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)} // Actualizar el estado de búsqueda
                    />
                    {/* Lupa SVG */}
                    <svg
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20a8 8 0 100-16 8 8 0 000 16zm21-10h5m-2 2l1 2" />
                        <path d="M21 21l-4-4" />
                    </svg>
                </div>


            </div>


            <div className="m-10 grid grid-cols-3">
                {productosFiltrados.length > 0 ? productosFiltrados.map((item, i) => (
                    <div key={i}>
                        <div className="tarjeta">
                            <div>
                                <img className="pl-6 w-50 h-85" src={item.imagen} alt={item.nombre} />
                            </div>
                            <div className="text-lg p-2">
                                <span className="font-bold">Nombre: </span>
                                {item.nombre}
                            </div>
                            <div className="text-lg p-2">
                                <span className="font-bold">Precio: </span>
                                $ {item.precio}
                            </div>
                            <div className="text-base p-2">
                                <span className="font-bold">Descripción: </span>
                                {item.descripcion}
                            </div>
                        </div>

                        <div className="btnAgregar">
                            <button onClick={() => handleAgregarAlCarrito(item)}>
                                Agregar al carrito
                            </button>
                        </div>
                    </div>
                )) : (
                    <p className="text-center col-span-4">No se encontraron productos</p>
                )}
            </div>
            {/* <a href="http://localhost:5173" className="hover:text-gray-400 ml-5 fixed bottom-5 right-10">
                ⬆
            </a>
             <a href="http://localhost:5173/carrito" className="hover:text-gray-800 ml-5 fixed bottom-5 left-1">
                <img src="" id="imgCarritto" />
            </a> */}

        </section>
    );
};

export default Producto;