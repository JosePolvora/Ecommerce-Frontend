import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function AdminEnvios() {
    const [loading, setLoading] = useState(true);
    const [envios, setEnvios] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const navigate = useNavigate();

    const cargarEnvios = async () => {
        try {
            const respuesta = await axios.get('http://localhost:3000/api/envios');
            if (respuesta.status === 200) {
                setEnvios(respuesta.data.body);
            } else {
                console.error("Error en la respuesta del servidor");
            }
        } catch (error) {
            console.error("Error al cargar envios", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        cargarEnvios();
    }, []);

    const borrarEnvio = async (envio_id) => {
        if (window.confirm("¿Desea borrar el envio?")) {
            try {
                await axios.delete(`http://localhost:3000/api/envios/${envio_id}`);
                cargarEnvios();
            } catch (error) {
                console.error("Error al borrar el envio", error);
            }
        }
    };

    const enviosFiltrados = envios.filter(envio =>
        envio.metodo_envio.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div>
            <h2 className='text-center mb-10 pt-10 text-2xl'>Editor de Envios</h2>

            <div className='flex justify-center items-center mb-5 space-x-3'>
                <div className="flex">
                    <input
                        type="text"
                        className="p-2 border border-gray-300 rounded"
                        placeholder="Buscar envio..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                </div>
                <button
                    className='w-24 p-2 text-white bg-green-500 rounded-md hover:bg-green-800'
                    onClick={() => navigate(`/admin/formenvios`)}
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
                                <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Metodo</th>
                                <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Precio</th>
                                <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                                <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                                <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                            </tr>
                        </thead>

                        <tbody className="bg-white divide-y divide-gray-200">
                            {enviosFiltrados.length > 0 ? enviosFiltrados.map((envio) => {

                                const fechaFormateada = new Date(envio.fecha_envio).toLocaleDateString('es-ES', {
                                    year: 'numeric',
                                    month: '2-digit',
                                    day: '2-digit'
                                });

                                return (
                                    <tr className="hover:bg-gray-100" key={envio.envio_id}>
                                        <td className="px-6 py-4 whitespace-nowrap">{envio.envio_id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{envio.metodo_envio}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{envio.precio_envio}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{envio.estado}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{fechaFormateada}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <button
                                                className='w-24 p-1 text-white bg-blue-500 rounded-md hover:bg-blue-800 mb-4'
                                                onClick={() => navigate(`/admin/formenvios/${envio.envio_id}`)}
                                            >
                                                EDITAR
                                            </button>
                                            <button
                                                className='w-24 p-1 ml-3 text-white bg-red-500 rounded-md hover:bg-red-800 mb-4'
                                                onClick={() => borrarEnvio(envio.envio_id)}
                                            >
                                                BORRAR
                                            </button>
                                        </td>
                                    </tr>
                                );
                            }) : (
                                <tr>
                                    <td colSpan="6" className="text-center">No hay envios disponibles</td>
                                </tr>
                            )}
                        </tbody>

                    </table>
                )}
            </div>
        </div>
    );
}

export default AdminEnvios;