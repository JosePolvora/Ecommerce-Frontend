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
      return;
    }

    // try {
    //   const response = await axios.post('http://localhost:3000/api/login', {
    //     email,
    //     clave,
    //   });

    //   if (response.data.ok) {
    //     Swal.fire('Éxito', 'Inicio de sesión exitoso', 'success');
    //     window.location.href = 'http://localhost:5173/header';
    //   } else {
    //     Swal.fire('Error', 'Credenciales incorrectas', 'error');
    //   }
    // } catch (error) {
    //   console.error('Error al iniciar sesión:', error);
    //   Swal.fire('Error', 'Error en el servidor', 'error');
    // }

    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        email,
        clave,
      });

      if (response.data.ok) {
        Swal.fire('Éxito', 'Inicio de sesión exitoso', 'success');

        // Verificamos el rol del usuario desde la respuesta del servidor
        const rol = response.data.usuario.rol;

        if (rol === 'Usuario' || rol === '') {
          // Redirigir a la página de usuario
          window.location.href = 'http://localhost:5173/header';
        } else if (rol === 'Administrador') {
          // Redirigir a la página del administrador
          window.location.href = 'http://localhost:5173/admin/admindashboard';
        } else {
          // Si el rol no es válido, mostramos un mensaje de error
          Swal.fire('Error', 'Rol no autorizado', 'error');
        }
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
      <h3 className='text-3xl  pt-20 rounded-t-lg  font-bold scroll'>Iniciá sesión</h3>
      <section className="contenedorForm">
        <div className="formulario">
          <div className='pt-10'>
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
          </div>
          <div className="flex text-center justify-center mt-4">
            <a href="http://localhost:5173/recuperar-password" className="text-sm text-white">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <div className="flex text-center justify-center mt-8">
            <h6>
              <i className='bx bxs-help-circle pr-1 text-white'></i>
              <span className='text-white'>¿No tenés una cuenta?</span>
            </h6>
            <a href="http://localhost:5173/registro" className="pl-3 text-white">Creá una aquí</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InicioSesion;