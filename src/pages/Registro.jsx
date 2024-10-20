import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function Registro() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [clave, setClave] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [dni, setDni] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/usuarios', {
        nombre,
        apellido,
        email,
        clave,
        fechaNacimiento,
        dni,
      });

      if (response.data.ok) {
        Swal.fire('Éxito', 'Usuario registrado exitosamente', 'success');
      } else {
        Swal.fire('Error', 'Error al registrar el usuario', 'error');
      }
    } catch (error) {
      console.error('Error al registrar el usuario:', error);

      Swal.fire('Error', 'Error en el servidor', 'error');
    }
  };

  return (
    <div className='h-full'>
      <h3 className='text-3xl pt-20 rounded-t-lg font-bold'>Crear cuenta</h3>
      
      <section className="contenedorForm">
        <div className="formulario">
          <div className="flex mb-8">
            <h6>
              <i className='bx bxs-help-circle pr-1 text-white'></i>
              <span className='text-white'>¿Ya tenés una cuenta?</span>
            </h6>
            <a href="http://localhost:5173/inicioSesion" className="pl-3 text-white">
              ¡Iniciá sesión!
            </a>
          </div>

          <form onSubmit={handleSubmit}>
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
              type="password"
              placeholder="Password"
              className="inp"
              value={clave}
              onChange={(e) => setClave(e.target.value)}
              required
            />
            <input
              type="date"
              placeholder="Fecha de nacimiento"
              className="inp"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
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
            <input className="btnForm" type="submit" value="Registrate" />
          </form>
        </div>
      </section>
    </div>
  );
}

export default Registro;
