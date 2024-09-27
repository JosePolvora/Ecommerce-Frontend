import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Si usas React Router para capturar el token
import axios from 'axios';

function RestablecerPassword() {
  const { token } = useParams(); // Captura el token de la URL
  const [nuevaClave, setNuevaClave] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5173/recuperacion-password/reset/${token}`, { nuevaClave });
      setMensaje(response.data.message);
   
    } catch (error) {
      console.error(error);
      setMensaje('Error al restablecer la contraseña.');
    }
  };

  return (
    <div className=''>

      <h2 className='text-center m-10'>Restablecer Contraseña</h2>

      <div className='m-20 gap-10'>
        
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Introduce tu nueva contraseña"
            value={nuevaClave}
            onChange={(e) => setNuevaClave(e.target.value)}
            required
          />
          <button type="submit">Restablecer</button>
        </form>
        {mensaje && <p>{mensaje}</p>}
      </div>
    </div>


  );
}

export default RestablecerPassword;
