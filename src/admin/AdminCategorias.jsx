import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function AdminCategorias() {
    const [loading, setLoading] = useState(true);
    const [categorias, setCategorias] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const navigate = useNavigate();

    const cargarCategorias = async () => {
        try {
            const respuesta = await axios.get('http://localhost:3000/api/categorias');
            if (respuesta.status === 200) {
                setCategorias(respuesta.data.body);
            } else {
                console.error("Error en la respuesta del servidor");
            }
        } catch (error) {
            console.error("Error al cargar categorias", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        cargarCategorias();
    }, []);

    const borrarCategoria = async (categoria_id) => {
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
                    await axios.delete(`http://localhost:3000/api/categorias/${categoria_id}`);
                    Swal.fire({
                        icon: 'success',
                        title: 'Categoria eliminada',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    cargarCategorias();
                } catch (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error al eliminar la categoria',
                        text: error.response?.data?.message || 'Error desconocido',
                    });
                }
            }
        });
    };


    const categoriasFiltrados = categorias.filter(categoria =>
        categoria.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );


    return (
        <div>
            <h2 className='text-center mb-10 pt-10 text-2xl'>Editor de Categorias</h2>

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
                    onClick={() => navigate(`/admin/formcategorias`)}
                >
                    AGREGAR
                </button>

            </div>


            <div className="overflow-x-auto mb-10">
                {loading ? (
                    <div className='p-2 mt-10 text-center text-white bg-green-500'>Cargando...</div>
                ) : (
                    <table className="min-w-full divide-y divide-gray-200 mt-5">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Id</th>
                                <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>

                                <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
                                <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                                <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {categoriasFiltrados.length > 0 ? categoriasFiltrados.map((categoria) => (
                                <tr className="hover:bg-gray-100" key={categoria.categoria_id}>
                                    <td className="px-6 py-4 whitespace-nowrap">{categoria.categoria_id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{categoria.nombre}</td>

                                    <td className="px-6 py-4 whitespace-nowrap">{categoria.descripcion}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{categoria.estado}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button
                                            className='w-24 p-1 text-white bg-blue-500 rounded-md hover:bg-blue-800 mb-4'
                                            onClick={() => navigate(`/admin/formcategorias/${categoria.categoria_id}`)}
                                        >
                                            EDITAR
                                        </button>
                                        <button
                                            className='w-24 p-1 ml-3 text-white bg-red-500 rounded-md hover:bg-red-800 mb-4'
                                            onClick={() => borrarCategoria(categoria.categoria_id)}
                                        >
                                            BORRAR
                                        </button>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="6" className="text-center">No hay categorias disponibles</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default AdminCategorias;
