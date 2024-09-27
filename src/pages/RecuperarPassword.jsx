// import React, { useState } from 'react';
// import axios from 'axios';

// function RecuperarPassword() {
//     const [email, setEmail] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axios.post('http://localhost:3000/api/usuarios', {
//                 email,
//             });

//             if (response.data.ok) {
//                 alert('Se ha enviado un correo para restablecer tu contraseña.');
//             } else {
//                 alert('El email no está registrado.');
//             }
//         } catch (error) {
//             console.error('Error al enviar el correo de recuperación:', error);
//             alert('Error en el servidor');
//         }
//     };

//     return (
//         <div className=''>
//             <h2 className='text-center m-10'>Recuperar Contraseña</h2>


//             <div className='m-20 gap-10'>
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="email"
//                         placeholder="Ingresa tu email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                     <input className='ml-5' type="submit" value="Enviar enlace de recuperación" />
//                 </form>
//             </div>

//         </div>
//     );
// }

// export default RecuperarPassword;

import React, { useState } from 'react';
import axios from 'axios';

function RecuperarPassword() {
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/recuperar-password/recuperar', { email });
            console.log(response.data.body);
            setMensaje(response.data.message);
        } catch (error) {
            console.error(error);
            setMensaje('Error al solicitar la recuperación de contraseña.');
        }
    };
    



    return (

        <div className=''>
            <h2 className='text-center m-10'>Recuperar Contraseña</h2>

            <div className='m-20 gap-10'>

                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Introduce tu correo"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit">Enviar</button>
                </form>
                {mensaje && <p>{mensaje}</p>}

            </div>
        </div>
    );
}

export default RecuperarPassword;