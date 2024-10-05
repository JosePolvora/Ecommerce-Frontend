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
        Swal.fire('Éxito', 'Mensaje enviado exitosamente', 'success');
        setNombre('');
        setApellido('');
        setEmail('');
        setCelular('');
        setMensaje('');
      } else {

        Swal.fire('Error', 'Error al enviar el mensaje', 'error');
      }
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      Swal.fire('Error', 'Error en el servidor', 'error');
    }
  };

  return (
    <div className='h-full'>

      <h3 className='text-3xl pt-10 rounded-t-lg mb-20'>Contactanos</h3>
      
      <section className="contenedorForm">

        <div className="horario">
          <ul className="">

            <li>
              <p>
                <i className='bx bxs-map'></i>
                <a
                  href="https://www.google.com/maps?q=Isla+Verde+2152,+Centro+-+Córdoba"
                  className="text-blue-500 hover:underline pl-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Isla Verde 2152, Córdoba
                </a>
              </p>
            </li>
            <li>
              <p>
                <i className='bx bxs-phone'></i>
                <a
                  href="https://wa.me/5493513374719"
                  className="text-blue-500 hover:underline pl-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +54 9 351 337 4719
                </a>
              </p>
            </li>
            <li>
              <p>
                <i className='bx bxs-envelope'></i>
                <a
                  href="mailto:winestore@gmail.com"
                  className="text-blue-500 hover:underline pl-2"
                >
                  winestore@gmail.com
                </a>
              </p>
            </li>
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
            <input className="btnForm" type="submit" value="Enviar"></input>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Mensaje;
