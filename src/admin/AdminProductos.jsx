import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function Articulo() {
    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [paginaActual, setPaginaActual] = useState(1);
    const [productosPorPagina] = useState(5); // Número de productos por página
    const navigate = useNavigate();

    const cargarProductos = async () => {
        try {
            const respuesta = await axios.get('http://localhost:3000/api/productos/todos');
            if (respuesta.status === 200) {
                setProductos(respuesta.data.body);
            } else {
                console.error("Error en la respuesta del servidor");
            }
        } catch (error) {
            console.error("Error al cargar productos", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        cargarProductos();
    }, []);

    const borrarProducto = async (producto_id) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "No podrás revertir esto",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, borrar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`http://localhost:3000/api/productos/todos${producto_id}`);
                    Swal.fire({
                        icon: 'success',
                        title: 'Producto eliminado',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    cargarProductos();  // Recargar la lista de productos
                } catch (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error al eliminar el producto',
                        text: error.response?.data?.message || 'Error desconocido',
                    });
                }
            }
        });
    };

    // Filtrar los productos según la búsqueda
    const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    // Calcular el índice de los productos para la página actual
    const indiceUltimoProducto = paginaActual * productosPorPagina;
    const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
    const productosPaginados = productosFiltrados.slice(indicePrimerProducto, indiceUltimoProducto);

    // Calcular el número total de páginas
    const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);

    const cambiarPagina = (numeroPagina) => {
        setPaginaActual(numeroPagina);
    };

    return (
        <div>
            <h2 className='text-center mb-10 pt-10 text-2xl'>Editor de Productos</h2>

            <div className='flex justify-center items-center mb-5 space-x-3'>
                <div className="flex">
                    <input
                        type="text"
                        className="p-2 border border-gray-300 rounded"
                        placeholder="Buscar producto..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                </div>
                <button
                    className='w-24 p-2 text-white bg-green-500 rounded-md hover:bg-green-800'
                    onClick={() => navigate(`/admin/formproductos`)}
                >
                    AGREGAR
                </button>
            </div>

            <div className="overflow-x-auto mb-10">
                {loading ? (
                    <div className='p-2 mt-10 text-center text-white bg-green-500'>Cargando...</div>
                ) : (
                    <>
                        <table className="min-w-full divide-y divide-gray-200 mt-5">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Id</th>
                                    <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                                    <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Precio</th>
                                    <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
                                    <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Caracteristicas</th>
                                    <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Especificaciones</th>
                                    <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Disponible</th>
                                    <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {productosPaginados.length > 0 ? productosPaginados.map((producto) => (
                                    <tr className="hover:bg-gray-100" key={producto.producto_id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{producto.producto_id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{producto.nombre}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{producto.precio}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{producto.descripcion}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{producto.caracteristicas}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{producto.especificaciones}</td>

                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {producto.disponible ? <span className='text-green-500'>SI</span> : <span className='text-red-500'>NO</span>}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <button
                                                className='w-24 p-1 text-white bg-blue-500 rounded-md hover:bg-blue-800 mb-4'
                                                onClick={() => navigate(`/admin/formproductos/${producto.producto_id}`)}
                                            >
                                                EDITAR
                                            </button>
                                            <button
                                                className='w-24 p-1 ml-3 text-white bg-red-500 rounded-md hover:bg-red-800 mb-4'
                                                onClick={() => borrarProducto(producto.producto_id)}
                                            >
                                                BORRAR
                                            </button>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan="6" className="p-4 text-center">No hay productos disponibles</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                        {/* Paginación */}
                        <div className="flex justify-center mt-4">
                            {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((numeroPagina) => (
                                <button
                                    key={numeroPagina}
                                    className={`mx-1 px-3 py-1 border rounded ${numeroPagina === paginaActual ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
                                    onClick={() => cambiarPagina(numeroPagina)}
                                >
                                    {numeroPagina}
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Articulo;

