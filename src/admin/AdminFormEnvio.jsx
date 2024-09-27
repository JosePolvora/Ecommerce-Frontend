import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function FormEnvios() {
    const { envio_id } = useParams();
    const [metodo_envio, setMetodo_envio] = useState('');
    const [precio_envio, setPrecio_envio] = useState('');
    const [estado, setEstado] = useState('');
    const [fecha_envio, setFecha_envio] = useState('');


    useEffect(() => {
        if (envio_id) {
            const obtenerEnvio = async () => {
                try {
                    const response = await axios.get(`http://localhost:3000/api/envios/${envio_id}`);
                    if (response.status === 200) {
                        const envio = response.data.body;
                        setMetodo_envio(envio.metodo_envio);
                        setPrecio_envio(envio.precio_envio);
                        setEstado(envio.estado);
                        setFecha_envio(envio.fecha_envio);

                    } else {
                        console.error("Error en la respuesta del servidor");
                    }
                } catch (error) {
                    console.error("Error al obtener el envio", error);
                }
            };
            obtenerEnvio();
        }
    }, [envio_id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/envios', {
                metodo_envio,
                precio_envio,
                estado,
                fecha_envio,
            });

            if (response.data.ok) {
                alert('Envio agregado exitosamente');
            } else {
                alert('Error al agregar el envio');
            }
        } catch (error) {
            console.error('Error al agregar el envio:', error);
            alert('Error en el servidor');
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/api/envios/${envio_id}`, {
                metodo_envio,
                precio_envio,
                estado,
                fecha_envio,
            });

            if (response.data.ok) {
                alert('Envio actualizado exitosamente');
            } else {
                alert('Error al actualizar el envio');
            }
        } catch (error) {
            console.error('Error al actualizar el envio:', error);
            alert('Error en el servidor');
        }
    };

    return (
        <div>
            <h2 className='text-center text-2xl mt-10'>Agregar Envio</h2>
            <section className="contenedorForm">
                <div className="formulario">
                    <form onSubmit={envio_id ? handleUpdate : handleSubmit}>

                        <input
                            type="text"
                            placeholder="Metodo de envio"
                            className="inp"
                            value={metodo_envio}
                            onChange={(e) => setMetodo_envio(e.target.value)}
                            required
                        />

                        <input
                            type="decimal"
                            placeholder="Precio"
                            className="inp"
                            value={precio_envio}
                            onChange={(e) => setPrecio_envio(e.target.value)}
                            min="0"
                            step="0.01"
                            required
                        />

                        <input
                            type="text"
                            placeholder="Estado"
                            className="inp"
                            value={estado}
                            onChange={(e) => setEstado(e.target.value)}
                            required
                        />
                        <input
                            type="date"
                            placeholder="Fecha de envio"
                            className="inp"
                            value={fecha_envio}
                            onChange={(e) => setFecha_envio(e.target.value)}
                            required
                        />




                        <input className="btnForm" type="submit" value={envio_id ? "Actualizar" : "Agregar"} />
                    </form>
                </div>
            </section>
            <a href="http://localhost:5173/admin/adminenvios" className="hover:text-gray-400 ml-5 fixed bottom-5 left-5">
                ⬅ Volver
            </a>
        </div>
    );
}

export default FormEnvios;