
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
        <div className="carritoContainer">
            <h2 className="text-center pt-10 text-3xl">Carrito de Compras</h2>

            <div className="text-base m-1">
                <a href="http://localhost:5173">Inicio</a>
            </div>

            <div className='flex justify-start'>
                <ul className=' grid-cols-2 gap-3'>
                    {carrito.map((item, i) => (
                        <li className='tarjeta' key={i}>
                            <div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th className='pl-1'>Producto</th>
                                            <th className='pl-8'>Precio</th>
                                            <th className='pl-1'>Cantidad</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><img className="w-20 h-35" src={item.imagen} alt={item.nombre} /></td>
                                            <td className='pl-2'>{item.nombre}</td>
                                            <td className='pl-10'>${item.precio}</td>
                                            <td className='pl-3'>
                                                <input
                                                    type="number"
                                                    id={`cantidad-input-${i}`}
                                                    value={item.cantidad}
                                                    min="1"
                                                    onChange={(e) => handleCantidadChange(e, item.producto_id)}
                                                    className="cantidad"
                                                />
                                            </td>
                                            <td>
                                                <button className='borrar' onClick={() => eliminarDelCarrito(item.producto_id)}>🗑</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className='contenedor-total'>
                    <div id="total-carrito">
                        <span className='font-bold text-2xl text-red-500' id="total">Total</span> <span className='text-red-500 pl-2 text-xl italic font-bold' >${total.toFixed(2)}</span> 
                    </div>

                    <section className="btns">
                        <a href="#" className="btn">Pagar</a>
                        <button onClick={vaciarCarrito} className="btn">Vaciar Carrito</button>

                        <a href="http://localhost:5173/productos" className="hover:text-gray-400 ml-5 fixed bottom-5 right-10">
                            ⬅ Continuar comprando
                        </a>
                    </section>
                </div>

            </div>


        </div>
    );
}

export default Carrito;



