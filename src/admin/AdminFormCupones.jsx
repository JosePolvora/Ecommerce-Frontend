import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function FormCupones() {
    const { cupon_id } = useParams();
    const [codigo, setCodigo] = useState('');
    const [descuento, setDescuento] = useState('');
    //const [fechaExpiracion, setFechaExpiracion] = useState('');
    //const [activo, setActivo] = useState(false);

    useEffect(() => {
        if (cupon_id) {
            const obtenerCupon = async () => {
                try {
                    const response = await axios.get(`http://localhost:3000/api/cupones/${cupon_id}`);
                    if (response.status === 200) {
                        const cupon = response.data.body;
                        setCodigo(cupon.codigo);
                        setDescuento(cupon.descuento);
                        //setFechaExpiracion(cupon.fechaExpiracion);
                        //setActivo(cupon.activo);
                    } else {
                        console.error("Error en la respuesta del servidor");
                    }
                } catch (error) {
                    console.error("Error al obtener el cupón", error);
                }
            };
            obtenerCupon();
        }
    }, [cupon_id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/cupones', {
                codigo,
                descuento,
                //fechaExpiracion,
                //activo,
            });

            if (response.data.ok) {
                Swal.fire('Éxito', 'Cupón agregado exitosamente', 'success');
            } else {
                Swal.fire('Error', 'Error al agregar el cupón', 'error');
            }
        } catch (error) {
            console.error('Error al agregar el cupón:', error);
            Swal.fire('Error', 'Error en el servidor', 'error');
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/api/cupones/${cupon_id}`, {
                codigo,
                descuento,
                //fechaExpiracion,
                //activo,
            });
            
            if (response.data.ok) {
                Swal.fire('Éxito', 'Cupón actualizado exitosamente', 'success');
            } else {
                Swal.fire('Error', 'Error al actualizar el cupón', 'error');
            }
        } catch (error) {
            console.error('Error al actualizar el cupón:', error);
            Swal.fire('Error', 'Error en el servidor', 'error');
        }
    };

    return (
        <div>
            <h2 className='text-center text-2xl mt-10'>Agregar Cupón</h2>
            <section className="contenedorForm">
                <div className="formulario">
                    <form onSubmit={cupon_id ? handleUpdate : handleSubmit}>
                        <input
                            type="text"
                            placeholder="Código"
                            className="inp"
                            value={codigo}
                            onChange={(e) => setCodigo(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Descuento (%)"
                            className="inp"
                            value={descuento}
                            onChange={(e) => setDescuento(e.target.value)}
                            required
                        />
                        {/* <input
                            type="date"
                            placeholder="Fecha de Expiración"
                            className="inp"
                            value={fechaExpiracion}
                            onChange={(e) => setFechaExpiracion(e.target.value)}
                            required
                        /> */}
                        {/* <div className="flex mb-4">
                            <input
                                type="checkbox"
                                name="activo"
                                className="mr-2"
                                checked={activo}
                                onChange={(e) => setActivo(e.target.checked)}
                            />
                            <label className="block mb-2 text-sm font-bold text-white" htmlFor="activo">
                                Activo:
                            </label>
                        </div> */}

                        <input className="btnForm" type="submit" value={cupon_id ? "Actualizar" : "Agregar"} />
                    </form>
                </div>
            </section>
            <a href="http://localhost:5173/admin/admincupones" className="hover:text-gray-400 ml-5">
                ⬅ Volver
            </a>
        </div>
    )
}

export default FormCupones;