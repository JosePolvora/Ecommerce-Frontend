import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function FormCategorias() {
    const { categoria_id } = useParams();
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [estado, setEstado] = useState('');

    useEffect(() => {
        if (categoria_id) {
            const obtenerCategoria = async () => {
                try {
                    const response = await axios.get(`http://localhost:3000/api/categorias/${categoria_id}`);
                    if (response.status === 200) {
                        const categoria = response.data.body;
                        setNombre(categoria.nombre);
                        setDescripcion(categoria.descripcion);
                        setEstado(categoria.estado);
                    
                    } else {
                        console.error("Error en la respuesta del servidor");
                    }
                } catch (error) {
                    console.error("Error al obtener el producto", error);
                }
            };
            obtenerCategoria();
        }
    }, [categoria_id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/categorias', {
                nombre,
                descripcion,
                estado,
                
            });

            if (response.data.ok) {
                alert('Categoria agregado exitosamente');
            } else {
                alert('Error al agregar la categoria');
            }
        } catch (error) {
            console.error('Error al agregar la categoria:', error);
            alert('Error en el servidor');
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/api/categorias/${categoria_id}`, {
              nombre,
              descripcion,
              estado,
              
            });
            
            if (response.data.ok) {
                alert('Categoria actualizada exitosamente');
            } else {
                alert('Error al actualizar la categoria');
            }
        } catch (error) {
            console.error('Error al actualizar la categoria:', error);
            alert('Error en el servidor');
        }
    };

    return (
        <div>
            <h2 className='text-center text-2xl mt-10'>Agregar Categoria</h2>
            <section className="contenedorForm">
                <div className="formulario">
                    <form onSubmit={categoria_id ? handleUpdate : handleSubmit}>

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
                            placeholder="Descripcion"
                            className="inp"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
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
                        

                        <input className="btnForm" type="submit" value={categoria_id ? "Actualizar" : "Agregar"} />
                    </form>
                </div>
            </section>
            <a href="http://localhost:5173/admin/admincategorias" className="hover:text-gray-400 ml-5 fixed bottom-5 left-5">
                ⬅ Volver
            </a>
        </div>
    )
}

export default FormCategorias;


