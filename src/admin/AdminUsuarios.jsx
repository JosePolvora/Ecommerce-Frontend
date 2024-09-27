// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';



// function Usuario() {
//     const [loading, setLoading] = useState(true);
//     const [usuarios, setUsuarios] = useState([]);
//     const [busqueda, setBusqueda] = useState('');
//     const navigate = useNavigate();

//     const cargarUsuarios = async () => {
//         try {
//             const respuesta = await axios.get('http://localhost:3000/api/usuarios');
//             if (respuesta.status === 200) {
//                 setUsuarios(respuesta.data.body);
//             } else {
//                 console.error("Error en la respuesta del servidor");
//             }
//         } catch (error) {
//             console.error("Error al cargar usuarios", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         cargarUsuarios();
//     }, []);

//     const borrarUsuario = async (usuario_id) => {
//         if (window.confirm("¿Desea borrar el usuario?")) {
//             try {
//                 await axios.delete(`http://localhost:3000/api/usuarios/${usuario_id}`);
//                 cargarUsuarios();
//             } catch (error) {
//                 console.error("Error al borrar usuario", error);
//             }
//         }
//     };


//     const usuariosFiltrados = usuarios.filter(usuario =>
//         usuario.nombre.toLowerCase().includes(busqueda.toLowerCase())
//     );

//     return (
//         <div>
//             <h2 className='text-center mb-10 pt-10 text-2xl'>Editor de Usuarios</h2>

//             <div className='flex justify-center items-center mb-5 space-x-3'>
//                 <div className="flex">
//                     <input
//                         type="text"
//                         className="p-2 border border-gray-300 rounded"
//                         placeholder="Buscar producto..."
//                         value={busqueda}
//                         onChange={(e) => setBusqueda(e.target.value)}
//                     />
//                 </div>
//                 <button
//                     className='w-24 p-2 text-white bg-green-500 rounded-md hover:bg-green-800'
//                     onClick={() => navigate(`/admin/formusuarios`)}
//                 >
//                     AGREGAR
//                 </button>
//             </div>


//             <div className="overflow-x-auto mb-10">
//                 {loading ? (
//                     <div className='p-2 mt-10 text-center text-white bg-green-500'>Cargando...</div>
//                 ) : (
//                     <table className="min-w-full divide-y divide-gray-200 mt-5">
//                         <thead className="bg-gray-50">
//                             <tr>
//                                 <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Id</th>
//                                 <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
//                                 <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Apellido</th>
//                                 <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
//                                 <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Rol</th>
//                                 <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">DNI</th>
//                                 <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Activo</th>
//                                 <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
//                             </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                             {usuariosFiltrados.length > 0 ? usuariosFiltrados.map((usuario) => (
//                                 <tr className="hover:bg-gray-100" key={usuario.usuario_id}>
//                                     <td className="px-6 py-4 whitespace-nowrap">{usuario.usuario_id}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap">{usuario.nombre}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap">{usuario.apellido}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap">{usuario.email}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap">{usuario.rol}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap">{usuario.dni}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap">{usuario.activo ? <span className='text-green-500'>SI</span> : <span className='text-red-500'>NO</span>}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap">
//                                         <button
//                                             className='w-24 p-1 text-white bg-blue-500 rounded-md hover:bg-blue-800 mb-4'
//                                             onClick={() => navigate(`/admin/formusuarios/${usuario.usuario_id}`)}
//                                         >
//                                             EDITAR
//                                         </button>
//                                         <button
//                                             className='w-24 p-1 ml-3 text-white bg-red-500 rounded-md hover:bg-red-800 mb-4'
//                                             onClick={() => borrarUsuario(usuario.usuario_id)}
//                                         >
//                                             BORRAR
//                                         </button>
//                                     </td>
//                                 </tr>
//                             )) : (
//                                 <tr>
//                                     <td colSpan="6" className="text-center">No hay usuarios activos</td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Usuario;

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function Usuario() {
    const [loading, setLoading] = useState(true);
    const [usuarios, setUsuarios] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const navigate = useNavigate();

    const cargarUsuarios = async () => {
        try {
            const respuesta = await axios.get('http://localhost:3000/api/usuarios');
            if (respuesta.status === 200) {
                setUsuarios(respuesta.data.body);
            } else {
                console.error("Error en la respuesta del servidor");
            }
        } catch (error) {
            console.error("Error al cargar usuarios", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        cargarUsuarios();
    }, []);

    const borrarUsuario = async (usuario_id) => {
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
                    await axios.delete(`http://localhost:3000/api/usuarios/${usuario_id}`);
                    cargarUsuarios();
                    Swal.fire('Eliminado', 'El usuario ha sido eliminado', 'success');
                } catch (error) {
                    console.error("Error al borrar usuario", error);
                    Swal.fire('Error', 'No se pudo borrar el usuario', 'error');
                }
            }
        });
    };

    const usuariosFiltrados = usuarios.filter(usuario =>
        usuario.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div>
            <h2 className='text-center mb-10 pt-10 text-2xl'>Editor de Usuarios</h2>

            <div className='flex justify-center items-center mb-5 space-x-3'>
                <div className="flex">
                    <input
                        type="text"
                        className="p-2 border border-gray-300 rounded"
                        placeholder="Buscar usuario..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                </div>
                {/* <button
                    className='w-24 p-2 text-white bg-green-500 rounded-md hover:bg-green-800'
                    onClick={() => navigate(`/admin/formusuarios`)}
                >
                    AGREGAR
                </button> */}
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
                                <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Apellido</th>
                                <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Rol</th>
                                <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">DNI</th>
                                <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Activo</th>
                                <th scope="col" className="px-6 py-3 text-left text-1xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {usuariosFiltrados.length > 0 ? usuariosFiltrados.map((usuario) => (
                                <tr className="hover:bg-gray-100" key={usuario.usuario_id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{usuario.usuario_id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{usuario.nombre}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{usuario.apellido}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{usuario.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{usuario.rol}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{usuario.dni}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{usuario.activo ? 'Activo' : 'Inactivo'}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <button
                                            //className="text-indigo-600 hover:text-indigo-900"
                                            className='w-24 p-1 text-white bg-blue-500 rounded-md hover:bg-blue-800 mb-4'
                                            onClick={() => navigate(`/admin/formusuarios/${usuario.usuario_id}`)}
                                        >
                                            Editar
                                        </button>
                                        <button
                                            //className="text-red-600 hover:text-red-900 ml-4"
                                            className='w-24 p-1 ml-3 text-white bg-red-500 rounded-md hover:bg-red-800 mb-4'
                                            onClick={() => borrarUsuario(usuario.usuario_id)}
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="8" className="p-4 text-center">No se encontraron resultados</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default Usuario;
