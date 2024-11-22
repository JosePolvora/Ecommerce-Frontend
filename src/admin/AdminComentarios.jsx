import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function Comentario() {
    const [loading, setLoading] = useState(true);
    const [comentarios, setComentarios] = useState([]);
    const navigate = useNavigate();

    const cargarComentarios = async () => {
        try {
            const respuesta = await axios.get('http://localhost:3000/api/comentarios');

            if (respuesta.status === 200) {
                setComentarios(respuesta.data.body);
            } else {
                console.error("Error en la respuesta del servidor");
            }
        } catch (error) {
            console.error("Error al cargar cupones", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        cargarComentarios();
    }, []);

    const borrarComentario = async (comentario_id) => {
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
                    await axios.delete(`http://localhost:3000/api/comentarios/${comentario_id}`);
                    cargarComentarios();
                    Swal.fire('Eliminado', 'El comentario ha sido eliminado', 'success');
                } catch (error) {
                    console.error("Error al borrar cupón", error);
                    Swal.fire('Error', 'No se pudo borrar el cupón', 'error');
                }
            }
        });
    };

    return (
        <div>
            <h2 className='text-center mb-10 pt-10 text-2xl'>Editor de Comentarios</h2>

            <div className="overflow-x-auto mb-10">
                {loading ? (
                    <div className='p-2 mt-10 text-center text-white bg-green-500'>Cargando...</div>
                ) : (

                    <table className="min-w-full divide-y divide-gray-200 mt-5">

                        <thead className="bg-gray-50">

                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Id</th>
                                <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Comentario</th>
                                <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>

                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {comentarios.length > 0 ? comentarios.map((comentario) => (
                                <tr className="hover:bg-gray-100" key={comentario.comentario_id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{comentario.comentario_id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{comentario.comentario}</td>

                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">

                                        <button
                                            className='w-24 p-1  text-white bg-red-500 rounded-md hover:bg-red-800'
                                            onClick={() => borrarComentario(comentario.comentario_id)}
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="4" className="p-4 text-center">No se encontraron comentarios</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default Comentario;