import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function InicioSesion() {
  const [email, setEmail] = useState('');
  const [clave, setClave] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const confirmation = await Swal.fire({
      title: '¿Estás seguro de iniciar sesión?',
      text: 'Revisa tus credenciales antes de continuar.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Iniciar sesión',
      cancelButtonText: 'Cancelar'
    });

    if (!confirmation.isConfirmed) {
      // User canceled
      return;
    }

    try {
      const response = await axios.get('http://localhost:3000/api/usuarios', {
        email,
        clave,
      });

      if (response.data.ok) {
        Swal.fire('Éxito', 'Inicio de sesión exitoso', 'success');
        window.location.href = 'http://localhost:5173/';
      } else {
        Swal.fire('Error', 'Credenciales incorrectas', 'error');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      Swal.fire('Error', 'Error en el servidor', 'error');
    }
  };

return (
  <div className='h-screen'>
    <h3 className='text-2xl bg-blue-500 p-2 rounded-t-lg mb-20'>Ingresar</h3>

    <section className="contenedorForm">
      <div className="formulario">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="inp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="inp"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
            required
          />
          <input className="btnForm" type="submit" value="Iniciar sesión" />
        </form>

        <div className="flex text-center justify-center mt-4">
          <a href="http://localhost:5173/recuperar-password" className="text-sm text-blue-600">
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        <div className="flex text-center justify-center mt-8">
          <h6>
            <i className='bx bxs-help-circle pr-1'></i>
            ¿No tenés una cuenta?
          </h6>
          <a href="http://localhost:5173/registro" className="pl-3">Creá una aquí</a>
        </div>
      </div>
    </section>
    {/* <a href="http://localhost:5173" className="fixed bottom-5 left-5 hover:text-gray-400 ml-5">
      ⬅ Inicio
    </a> */}
  </div>
);
}

export default InicioSesion;



// import React, { useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// function InicioSesion() {
//   const [email, setEmail] = useState('');
//   const [clave, setClave] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Confirmar con el usuario antes de enviar los datos
//     const confirmation = await Swal.fire({
//       title: '¿Estás seguro de iniciar sesión?',
//       text: 'Revisa tus credenciales antes de continuar.',
//       icon: 'question',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Sí, Iniciar sesión',
//       cancelButtonText: 'Cancelar'
//     });

//     if (!confirmation.isConfirmed) {
//       return;
//     }

//     try {
//       // Crear un objeto con los datos del usuario
//       const data = { email, clave };

//       // Enviar una solicitud POST al endpoint de inicio de sesión
//       const response = await axios.get('http://localhost:3000/api/usuarios/login', data);

//       // Si la respuesta es exitosa, guardar el token (si existe) y redirigir
//       if (response.data.ok) {
//         Swal.fire('Éxito', 'Inicio de sesión exitoso', 'success');

//         // Si el backend devuelve un token, guardarlo en el localStorage
//         if (response.data.token) {
//           localStorage.setItem('token', response.data.token);
//         }

//         window.location.href = 'http://localhost:5173/'; // Redirigir a la página principal
//       } else {
//         Swal.fire('Error', 'Credenciales incorrectas', 'error');
//       }
//     } catch (error) {
//       console.error('Error al iniciar sesión:', error);
//       Swal.fire('Error', 'Error en el servidor', 'error');
//     }
//   };


//   return (

//     <div className='h-screen'>
//       <h3 className='text-2xl bg-blue-500 p-2 rounded-t-lg mb-20'>Ingresar</h3>

//       <section className="contenedorForm">
//         <div className="formulario">
//           <form onSubmit={handleSubmit}>
//             <input
//               type="email"
//               placeholder="Email"
//               className="inp"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className="inp"
//               value={clave}
//               onChange={(e) => setClave(e.target.value)}
//               required
//             />
//             <input className="btnForm" type="submit" value="Iniciar sesión" />
//           </form>

//           <div className="flex text-center justify-center mt-4">
//             <a href="http://localhost:5173/recuperar-password" className="text-sm text-blue-600">
//               ¿Olvidaste tu contraseña?
//             </a>
//           </div>

//           <div className="flex text-center justify-center mt-8">
//             <h6>
//               <i className='bx bxs-help-circle pr-1'></i>
//               ¿No tenés una cuenta?
//             </h6>
//             <a href="http://localhost:5173/registro" className="pl-3">Creá una aquí</a>
//           </div>
//         </div>
//       </section>
//       <a href="http://localhost:5173" className="fixed bottom-5 left-5 hover:text-gray-400 ml-5">
//         ⬅ Inicio
//       </a>
//     </div>

//   );
// }

// export default InicioSesion;