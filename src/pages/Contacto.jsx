import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function Mensaje() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/mensajes', {
        nombre,
        apellido,
        email,
        celular,
        mensaje_enviar: mensaje,
      });

      if (response.data.ok) {
        //alert('Mensaje enviado exitosamente');
        Swal.fire('Éxito', 'Mensaje enviado exitosamente', 'success');
        // Resetear campos del formulario
        setNombre('');
        setApellido('');
        setEmail('');
        setCelular('');
        setMensaje('');
      } else {
        //alert('Error al enviar el mensaje');
        Swal.fire('Error', 'Error al enviar el mensaje', 'error');
      }
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      //alert('Error en el servidor');
      Swal.fire('Error', 'Error en el servidor', 'error');
    }
  };

  return (
    <div className='h-full'>

      <h3 className='text-2xl bg-blue-500 p-2 rounded-t-lg mb-20'>Contactanos</h3>
      
      <section className="contenedorForm">

        <div className="horario">
          <ul className="">
            <li><p><i className='bx bxs-map py-2'></i> Rafael Nuñez 4250, Centro - Córdoba</p></li>
            <li><p> <i className='bx bxs-phone py-2'></i> +54 9 351 333-4444</p></li>
            <li><p><i className='bx bxs-envelope py-'></i> winestore@gmail.com</p></li>
            <li><p><i className='bx bx-time py-2'></i> Horarios de Atención<br></br>
              lunes a viernes  de 9 a 18hs.<br></br>
              Sábados de 9 a 13hs.</p></li>
          </ul>
        </div>



        <div className="formulario">
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
              type="text"
              placeholder="Celular"
              className="inp"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
              required
            />
            <textarea
              placeholder="Mensaje"
              className="inp"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
            />
            {/* <button type="submit">Enviar Mensaje</button> */}
            <input className="btnForm" type="submit" value="Enviar"></input>
          </form>
        </div>
      </section>
      {/* <a href="http://localhost:5173" className="fixed bottom-5 left-5 hover:text-gray-400 ml-5">
        ⬅ Inicio
      </a> */}
    </div>
  );
}

export default Mensaje;
