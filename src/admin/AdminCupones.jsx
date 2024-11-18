import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function Cupon() {
    const [loading, setLoading] = useState(true);
    const [cupones, setCupones] = useState([]);
    const navigate = useNavigate();

    const cargarCupones = async () => {
        try {
            const respuesta = await axios.get('http://localhost:3000/api/cupones');

            if (respuesta.status === 200) {
                setCupones(respuesta.data.body);
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
        cargarCupones();
    }, []);

    const borrarCupon = async (cupon_id) => {
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
                    await axios.delete(`http://localhost:3000/api/cupones/${cupon_id}`);
                    cargarCupones();
                    Swal.fire('Eliminado', 'El cupón ha sido eliminado', 'success');
                } catch (error) {
                    console.error("Error al borrar cupón", error);
                    Swal.fire('Error', 'No se pudo borrar el cupón', 'error');
                }
            }
        });
    };

    return (
        <div>
            <h2 className='text-center mb-10 pt-10 text-2xl'>Editor de Cupones</h2>

            <div className='grid justify-end mr-10'>
                <button
                    className='w-40 text-white bg-green-500 rounded-md hover:bg-green-800'
                    onClick={() => navigate(`/admin/formcupones`)}
                >
                    <span className='font-bold align-text-base'>AGREGAR</span>
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
                                <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Código</th>
                                <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Descuento</th>
                                <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {cupones.length > 0 ? cupones.map((cupon) => (
                                <tr className="hover:bg-gray-100" key={cupon.cupon_id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cupon.cupon_id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cupon.codigo}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cupon.descuento}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        {/* <button
                                            className='w-24 p-1 text-white bg-blue-500 rounded-md hover:bg-blue-800 mb-4'
                                            onClick={() => navigate(`/admin/formcupones/${cupon.cupon_id}`)}
                                            
                                        >
                                            Editar
                                        </button> */}
                                        <button
                                            className='w-24 p-1  text-white bg-red-500 rounded-md hover:bg-red-800'
                                            onClick={() => borrarCupon(cupon.cupon_id)}
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="4" className="p-4 text-center">No se encontraron cupones</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default Cupon;