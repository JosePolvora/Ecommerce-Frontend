// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// function FormUsuarios() {
//     const { usuario_id } = useParams();
//     const [nombre, setNombre] = useState('');
//     const [apellido, setApellido] = useState('');
//     const [email, setEmail] = useState('');
//     const [rol, setRol] = useState('');
//     const [dni, setDni] = useState(''); 
//     const [activo, setActivo] = useState(false); 

//     useEffect(() => {
//         if (usuario_id) {
//             const obtenerUsuario = async () => {
//                 try {
//                     const response = await axios.get(`http://localhost:3000/api/usuarios/${usuario_id}`);
//                     if (response.status === 200) {
//                         const usuario = response.data.body;
//                         setNombre(usuario.nombre);
//                         setApellido(usuario.apellido);
//                         setEmail(usuario.email);
//                         setRol(usuario.rol);
//                         setDni(usuario.dni);
//                         setActivo(usuario.activo);
//                     } else {
//                         console.error("Error en la respuesta del servidor");
//                     }
//                 } catch (error) {
//                     console.error("Error al obtener el usuario", error);
//                 }
//             };
//             obtenerUsuario();
//         }
//     }, [usuario_id]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:3000/api/usuarios', {
//                 nombre,
//                 apellido,
//                 email,
//                 rol,
//                 dni,
//                 activo,
//             });

//             if (response.data.ok) {
//                 alert('Usuario agregado exitosamente');
//             } else {
//                 alert('Error al agregar el usuario');
//             }
//         } catch (error) {
//             console.error('Error al agregar el usuario:', error);
//             alert('Error en el servidor');
//         }
//     };

//     const handleUpdate = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.put(`http://localhost:3000/api/usuarios/${usuario_id}`, {
//                 nombre,
//                 apellido,
//                 email,
//                 rol,
//                 dni,
//                 activo,
//             });
            
//             if (response.data.ok) {
//                 alert('Usuario actualizado exitosamente');
//             } else {
//                 alert('Error al actualizar el usuario');
//             }
//         } catch (error) {
//             console.error('Error al actualizar el usuario:', error);
//             alert('Error en el servidor');
//         }
//     };

//     return (
//         <div>
//             <h2 className='text-center text-2xl mt-10'>Editar Usuario</h2>
//             <section className="contenedorForm">
//                 <div className="formulario">
//                     <form onSubmit={usuario_id ? handleUpdate : handleSubmit}>

//                         <input
//                             type="text"
//                             placeholder="Nombre"
//                             className="inp"
//                             value={nombre}
//                             onChange={(e) => setNombre(e.target.value)}
//                             required
//                         />
//                         <input
//                             type="text"
//                             placeholder="Apellido"
//                             className="inp"
//                             value={apellido}
//                             onChange={(e) => setApellido(e.target.value)}
//                             required
//                         />
//                         <input
//                             type="email"
//                             placeholder="Email"
//                             className="inp"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
//                         <input
//                             type="text"
//                             placeholder="Rol"
//                             className="inp"
//                             value={rol}
//                             onChange={(e) => setRol(e.target.value)}
//                             required
//                         />
//                         <input
//                             type="text"
//                             placeholder="DNI"
//                             className="inp"
//                             value={dni}
//                             onChange={(e) => setDni(e.target.value)}
//                             required
//                         />
//                         <div className="flex mb-4">
//                             <input                             
//                                 type="checkbox"
//                                 name="activo"
//                                 className="mr-2"
//                                 checked={activo}
//                                 onChange={(e) => setActivo(e.target.checked)}
//                             />
//                             <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="activo">
//                                 Activo:
//                             </label>
//                         </div>

//                         <input className="btnForm" type="submit" value={usuario_id ? "Actualizar" : "Agregar"} />
//                     </form>
//                 </div>
//             </section>
//             <a href="http://localhost:5173/admin/adminusuarios" className="hover:text-gray-400 ml-5">
//                 ⬅ Volver
//             </a>
//         </div>
//     )
// }

// export default FormUsuarios;



import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';  // Importa Swal

function FormUsuarios() {
    const { usuario_id } = useParams();
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [rol, setRol] = useState('');
    const [dni, setDni] = useState('');
    const [activo, setActivo] = useState(false);

    useEffect(() => {
        if (usuario_id) {
            const obtenerUsuario = async () => {
                try {
                    const response = await axios.get(`http://localhost:3000/api/usuarios/${usuario_id}`);
                    if (response.status === 200) {
                        const usuario = response.data.body;
                        setNombre(usuario.nombre);
                        setApellido(usuario.apellido);
                        setEmail(usuario.email);
                        setRol(usuario.rol);
                        setDni(usuario.dni);
                        setActivo(usuario.activo);
                    } else {
                        console.error("Error en la respuesta del servidor");
                    }
                } catch (error) {
                    console.error("Error al obtener el usuario", error);
                }
            };
            obtenerUsuario();
        }
    }, [usuario_id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/usuarios', {
                nombre,
                apellido,
                email,
                rol,
                dni,
                activo,
            });

            if (response.data.ok) {
                Swal.fire('Éxito', 'Usuario agregado exitosamente', 'success');
            } else {
                Swal.fire('Error', 'Error al agregar el usuario', 'error');
            }
        } catch (error) {
            console.error('Error al agregar el usuario:', error);
            Swal.fire('Error', 'Error en el servidor', 'error');
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/api/usuarios/${usuario_id}`, {
                nombre,
                apellido,
                email,
                rol,
                dni,
                activo,
            });
            
            if (response.data.ok) {
                Swal.fire('Éxito', 'Usuario actualizado exitosamente', 'success');
            } else {
                Swal.fire('Error', 'Error al actualizar el usuario', 'error');
            }
        } catch (error) {
            console.error('Error al actualizar el usuario:', error);
            Swal.fire('Error', 'Error en el servidor', 'error');
        }
    };

    return (
        <div>
            <h2 className='text-center text-2xl mt-10'>Editar Usuario</h2>
            <section className="contenedorForm">
                <div className="formulario">
                    <form onSubmit={usuario_id ? handleUpdate : handleSubmit}>
                        <input
                            type="text"
                            placeholder="Nombre"
                            className="inp"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Apellido"
                            className="inp"
                            value={apellido}
                            onChange={(e) => setApellido(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="inp"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Rol"
                            className="inp"
                            value={rol}
                            onChange={(e) => setRol(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="DNI"
                            className="inp"
                            value={dni}
                            onChange={(e) => setDni(e.target.value)}
                            required
                        />
                        <div className="flex mb-4">
                            <input
                                type="checkbox"
                                name="activo"
                                className="mr-2"
                                checked={activo}
                                onChange={(e) => setActivo(e.target.checked)}
                            />
                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="activo">
                                Activo:
                            </label>
                        </div>

                        <input className="btnForm" type="submit" value={usuario_id ? "Actualizar" : "Agregar"} />
                    </form>
                </div>
            </section>
            <a href="http://localhost:5173/admin/adminusuarios" className="hover:text-gray-400 ml-5">
                ⬅ Volver
            </a>
        </div>
    )
}

export default FormUsuarios;
