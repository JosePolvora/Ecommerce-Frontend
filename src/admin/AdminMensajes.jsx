import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function Mensaje() {
    const [loading, setLoading] = useState(true);
    const [mensajes, setMensajes] = useState([]);
    const navigate = useNavigate();

    const cargarMensajes = async () => {
        try {
            const respuesta = await axios.get('http://localhost:3000/api/mensajes');

            if (respuesta.status === 200) {
                setMensajes(respuesta.data.body);
            } else {
                console.error("Error en la respuesta del servidor");
            }
        } catch (error) {
            console.error("Error al cargar mensajes", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        cargarMensajes();
    }, []);

    const borrarMensaje = async (mensaje_id) => {
        Swal.fire({
            title: '¿Está seguro?',
            text: "Esta acción no se puede revertir",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, borrar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`http://localhost:3000/api/mensajes/${mensaje_id}`);
                    cargarMensajes();
                    Swal.fire('Eliminado', 'El mensaje ha sido borrado', 'success');
                } catch (error) {
                    console.error("Error al borrar mensaje", error);
                    Swal.fire('Error', 'No se pudo borrar el mensaje', 'error');
                }
            }
        });
    };

    return (
        <div>
            <h2 className='text-center mb-10 pt-10 text-2xl'>Editor de Mensajes</h2>

            <div className="overflow-x-auto mb-10">
                {loading ? (
                    <div className='p-2 mt-10 text-center text-white bg-green-500'>Cargando...</div>
                ) : (

                    <table className="min-w-full divide-y divide-gray-200 mt-5">

                        <thead className="bg-gray-50">

                            <tr>
                                <th scope="col" className="px-10 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Id</th>
                                <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Mensaje</th>
                                <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">acciones</th>

                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {mensajes.length > 0 ? mensajes.map((mensaje) => (
                                <tr className="hover:bg-gray-100" key={mensaje.mensaje_id}>
                                    <td className="px-10 py-4 whitespace-nowrap text-sm text-gray-500">{mensaje.mensaje_id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{mensaje.mensaje_enviar}</td>

                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">

                                        <button
                                            className='w-24 p-1  text-white bg-red-500 rounded-md hover:bg-red-800'
                                            onClick={() => borrarMensaje(mensaje.mensaje_id)}
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="4" className="p-4 text-center">No se encontraron mensajes</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default Mensaje;