// import React, { useContext } from 'react';
// import { CarritoContext } from '../context/CarritoContext';

// function Carrito() {
//     const { carrito, vaciarCarrito, eliminarDelCarrito, actualizarCantidad } = useContext(CarritoContext);

//     const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

//     const handleCantidadChange = (e, producto_id) => {
//         const cantidad = parseInt(e.target.value, 10);
//         if (cantidad >= 1) {
//             actualizarCantidad(producto_id, cantidad);
//         }
//     };

//     return (
//         <div className="carritoContainer">
//             <h2 className="text-center pt-10 text-3xl">Carrito de Compras</h2>

//             <div className='flex justify-start mt-20'>
//                 <ul className=' grid-cols-2 gap-3'>
//                     {carrito.map((item, i) => (
//                         <li className='tarjeta' key={i}>
//                             <div>
//                                 <table>
//                                     <thead>
//                                         <tr>
//                                             <th></th>
//                                             <th className='pl-1'>Producto</th>
//                                             <th className='pl-8'>Precio</th>
//                                             <th className='pl-1'>Cantidad</th>
//                                             <th></th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         <tr>
//                                             <td><img className="w-20 h-35" src={item.imagen} alt={item.nombre} /></td>
//                                             <td className='pl-2'>{item.nombre}</td>
//                                             <td className='pl-10'>${item.precio}</td>
//                                             <td className='pl-3'>
//                                                 <input
//                                                     type="number"
//                                                     id={`cantidad-input-${i}`}
//                                                     value={item.cantidad}
//                                                     min="1"
//                                                     onChange={(e) => handleCantidadChange(e, item.producto_id)}
//                                                     className="cantidad"
//                                                 />
//                                             </td>
//                                             <td>
//                                                 <button className='borrar' onClick={() => eliminarDelCarrito(item.producto_id)}>🗑</button>
//                                             </td>
//                                         </tr>
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>

//                 <div className='contenedor-total'>
//                     <div id="total-carrito">
//                         <span className='font-bold text-2xl text-red-500' id="total">Total</span> <span className='text-red-500 pl-2 text-xl italic font-bold' >${total.toFixed(2)}</span> 
//                     </div>

//                     <section className="mt-16">
//                         <a href="#" className="btn"><span className='font-bold text-base'>Pagar</span></a>
//                         <button onClick={vaciarCarrito} className="btn"><span className='font-bold text-base'>Vaciar Carrito</span></button>

//                         <a href="http://localhost:5173/productos" className="hover:text-gray-400 ml-5 fixed bottom-5 right-10">
//                             ⬅ Continuar comprando
//                         </a>
//                     </section>
//                 </div>

//             </div>


//         </div>
//     );
// }

// export default Carrito;

import React, { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';

function Carrito() {
    const { carrito, vaciarCarrito, eliminarDelCarrito, actualizarCantidad } = useContext(CarritoContext);

    const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

    const handleCantidadChange = (e, producto_id) => {
        const cantidad = parseInt(e.target.value, 10);
        if (cantidad >= 1) {
            actualizarCantidad(producto_id, cantidad);
        }
    };

    return (
        <div className="flex flex-wrap h-screen p-4 bg-gray-100 lg:h-full">
            <h2 className="text-center pt-10 text-3xl w-full">Carrito de Compras</h2>

            {/* Contenedor de productos */}
            <div className="w-full  lg:w-3/5 mt-10 ml-5 p-5">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {carrito.map((item, i) => (
                        <li className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm" key={i}>
                            <div>
                                <table className="table-auto w-full">
                                    <thead>
                                        <tr className="text-left">
                                            <th></th>
                                            <th className="pl-4">Producto</th>
                                            <th className="pl-8">Precio</th>
                                            <th className="pl-4">Cantidad</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><img className="w-20 h-20 object-cover" src={item.imagen} alt={item.nombre} /></td>
                                            <td className="pl-4">{item.nombre}</td>
                                            <td className="pl-8">${item.precio}</td>
                                            <td className="pl-4">
                                                <input
                                                    type="number"
                                                    value={item.cantidad}
                                                    min="1"
                                                    onChange={(e) => handleCantidadChange(e, item.producto_id)}
                                                    className="w-16 p-2 border rounded-lg text-center"
                                                />
                                            </td>
                                            <td>
                                                <button
                                                    onClick={() => eliminarDelCarrito(item.producto_id)}
                                                    className="text-red-500 hover:text-red-700">
                                                    🗑
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Resumen del carrito (fijo a la derecha) */}
            <section className='contenedor-pagar'>

                <div className="m-14  bg-white lg:w-full p-5  rounded-lg shadow-lg h-auto">

                    <div id="total-carrito" className="text-center p-1">

                        <h2 className="text-2xl font-bold mb-4 pb-4 pt-2">Total: <span className='text-gray-900 text-xl'>${total.toFixed(2)}</span></h2>
                        
                        <div className='pb-2'>
                            <button className="w-3/4 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition mb-4">
                                Pagar
                            </button>
                        </div>
                        <div className='pb-2'>
                            <button onClick={vaciarCarrito} className="w-3/4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
                                Vaciar Carrito
                            </button>
                        </div>
                    </div>

                    <a href="http://localhost:5173/productos" className="text-blue-500 hover:text-blue-700 mt-4 block text-center">
                        ⬅ Continuar comprando
                    </a>
                </div>

            </section>
        </div>
    );
}

export default Carrito;

