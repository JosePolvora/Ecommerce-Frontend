import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function FormProductos() {
    const { producto_id } = useParams();
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagen, setImagen] = useState('');
    const [imagenUno, setImagenUno] = useState('');
    const [imagenDos, setImagenDos] = useState('');
    const [imagenTres, setImagenTres] = useState('');
    const [disponible, setDisponible] = useState(false);

    const [categorias, setCategorias] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/categorias');
                setCategorias(response.data.body);
            } catch (error) {
                console.error('Error al obtener las categorías:', error);
            }
        };
        fetchCategorias();
    }, []);

    useEffect(() => {
        if (producto_id) {
            const obtenerProducto = async () => {
                try {
                    const response = await axios.get(`http://localhost:3000/api/productos/${producto_id}`);
                    if (response.status === 200) {
                        const producto = response.data.body;
                        setNombre(producto.nombre);
                        setPrecio(producto.precio);
                        setDescripcion(producto.descripcion);
                        setDisponible(producto.disponible);
                        setImagen(producto.imagen);
                        setImagenUno(producto.imagenUno);
                        setImagenDos(producto.imagenDos);
                        setImagenTres(producto.imagenTres);
                        setCategoriaSeleccionada(producto.categoria);
                    } else {
                        console.error("Error en la respuesta del servidor");
                    }
                } catch (error) {
                    console.error("Error al obtener el producto", error);
                }
            };
            obtenerProducto();
        }
    }, [producto_id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/api/productos', {
                nombre,
                precio,
                descripcion,
                disponible,
                imagen,
                imagenUno,
                imagenDos,
                imagenTres,
                categoria: categoriaSeleccionada,
            });

            if (response.data.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Producto agregado exitosamente',
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error al agregar el producto',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error en el servidor',
                text: error.response?.data?.message || 'Error desconocido',
            });
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/api/productos/${producto_id}`, {
                nombre,
                precio,
                descripcion,
                disponible,
                imagen,
                imagenUno,
                imagenDos,
                imagenTres,
                categoria: categoriaSeleccionada,
            });

            if (response.data.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Producto actualizado exitosamente',
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error al actualizar el producto',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error en el servidor',
                text: error.response?.data?.message || 'Error desconocido',
            });
        }
    };

    return (
        <div>
            <h2 className='text-center text-2xl mt-10'>{producto_id ? 'Actualizar producto' : 'Agregar nuevo producto'}</h2>
            <section className="contenedorForm">
                <div className="formulario">
                    <form onSubmit={producto_id ? handleUpdate : handleSubmit}>
                        <input
                            type="text"
                            placeholder="Nombre"
                            className="inp"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />

                        <input
                            type="decimal"
                            placeholder="Precio"
                            className="inp"
                            value={precio}
                            onChange={(e) => setPrecio(e.target.value)}
                            min="0"
                            step="0.01"
                            required
                        />

                        <input
                            type="text"
                            placeholder="Descripción"
                            className="inp"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            required
                        />

                        <input
                            type="text"
                            placeholder="Imagen"
                            className="inp"
                            value={imagen}
                            onChange={(e) => setImagen(e.target.value)}
                            required
                        />

                        <input
                            type="text"
                            placeholder="ImagenUno"
                            className="inp"
                            value={imagenUno}
                            onChange={(e) => setImagenUno(e.target.value)}
                            required
                        />

                        <input
                            type="text"
                            placeholder="ImagenDos"
                            className="inp"
                            value={imagenDos}
                            onChange={(e) => setImagenDos(e.target.value)}
                            required
                        />

                        <input
                            type="text"
                            placeholder="ImagenTres"
                            className="inp"
                            value={imagenTres}
                            onChange={(e) => setImagenTres(e.target.value)}
                            required
                        />

                        <select
                            value={categoriaSeleccionada}
                            onChange={(e) => setCategoriaSeleccionada(e.target.value)}
                            className="inp"
                            required
                        >
                            <option value="">Seleccione una categoría</option>
                            {categorias.map((categoria) => (
                                <option key={categoria.categoria_id} value={categoria.categoria_id}>
                                    {categoria.nombre}
                                </option>
                            ))}
                        </select>
                        <div className="flex mb-4">
                            <input
                                type="checkbox"
                                name="disponible"
                                className="mr-2"
                                checked={disponible}
                                onChange={(e) => setDisponible(e.target.checked)}
                            />
                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="disponible">
                                Disponible:
                            </label>
                        </div>
                        <input className="btnForm" type="submit" value={producto_id ? "Actualizar" : "Agregar"} />
                    </form>
                </div>
            </section>
            <a href="http://localhost:5173/admin/adminproductos" className="hover:text-gray-400 ml-5">
                ⬅ Volver
            </a>
        </div>
    );
}

export default FormProductos;
