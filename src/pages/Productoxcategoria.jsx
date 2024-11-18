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
    const [orden, setOrden] = useState('ascendente');
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

    const handleVerDetalles = (productoxcategoria_id) => {
        console.log("Ver detalles de producto con ID:", productoxcategoria_id);
        navigate(`/detallexproducto/${productoxcategoria_id}`);
    };

    // Función para ordenar los productos
    const ordenarProductos = (productos, orden) => {
        return productos.sort((a, b) => {
            if (orden === 'ascendente') {
                return a.producto.precio - b.producto.precio;
            } else {
                return b.producto.precio - a.producto.precio;
            }
        });
    };

    // Función para manejar el cambio de orden
    const handleOrdenChange = (event) => {
        setOrden(event.target.value);
    };

    return (
        <section className='ml-28 mr-28 mt-10'>
            <h3 className="text-center pt-1 text-3xl mb-10"></h3>

            {/* Filtro de ordenación */}
            <div className="flex justify-end mb-5">
                <label className="mr-2 font-bold"></label>
                <select onChange={handleOrdenChange} value={orden} className="border px-2 py-1 rounded font-bold">
                    <option value="ascendente">Menor a Mayor</option>
                    <option value="descendente">Mayor a Menor</option>
                </select>
            </div>

            <div className="m-10 grid grid-cols-4 gap-6">
                {ordenarProductos(productos, orden).map((item) => {
                    console.log("Producto item:", item);

                    return (
                        <div key={item.productoProductoId}>
                            <div className="tarjeta-product" onClick={() => handleVerDetalles(item.productoxcategoria_id)}>

                                <img
                                    className="cursor-pointer"
                                    src={item.producto.imagen}
                                    alt={item.producto.nombre}
                                />
                                <div className="contenido-texto">
                                    <span className="font-bold">Nombre: </span>
                                    {item.producto.nombre}
                                </div>
                                <div className="contenido-texto">
                                    <span className="font-bold">Precio: </span>
                                    $ {item.producto.precio}
                                </div>
                                <div className="contenido-texto">
                                    <span className="font-bold">Descripción: </span>
                                    {item.producto.descripcion}
                                </div>

                                <div className='pt-3'>
                                    {item?.producto.disponible === true ? (
                                        <div></div>
                                    ) : (
                                        <div className='text-white bg-red-500 text-center text-base p-1 w-48'>
                                            <i className='bx bx-block'></i> Consultar stock
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='block mx-auto'>
                                    <div className="flex flex-col items-center gap-2">
                                        <button onClick={() => handleAgregarAlCarrito(item.producto)} className="w-52 px-4 py-2 mt-5 bg-red-900 text-white rounded">
                                            <span className='font-bold'>Agregar al carrito</span>
                                        </button>
                                        <button onClick={() => handleVerDetalles(item.productoxcategoria_id)} className="w-52 px-4 py-2 bg-neutral-950 text-white rounded">
                                            <span className='font-bold'>Ver Detalles</span>
                                        </button>
                                    </div>
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