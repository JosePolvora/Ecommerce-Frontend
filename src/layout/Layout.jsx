import { Outlet, Link, useNavigate } from 'react-router-dom';
import Footer from '../pages/Footer';
import { useState } from 'react';
import Swal from 'sweetalert2';

const Layout = () => {
    const [busqueda, setBusqueda] = useState(''); // Estado para la barra de búsqueda
    const navigate = useNavigate();

    // Mapeo de nombres de categorías a sus IDs
    const categorias = {
        vinos: 1,
        espumantes: 3,
        espirituosas: 5,
        cafes: 2,
        aceites: 6,
        chocolates: 4,
    };

    // Maneja el envío del formulario de búsqueda
    const handleBuscarCategoria = (e) => {
        e.preventDefault();
        const categoriaId = categorias[busqueda.toLowerCase()]; // Busca el ID de la categoría

        if (categoriaId) {
            // Navega a la ruta de productos por categoría usando el ID
            navigate(`/productos/categoria/${categoriaId}`);
             } else {
                Swal.fire({
                    icon: 'error',
                    title: "Intente con 'vinos', 'espumantes', etc.",
                }); 
        }
    };

    return (
        <div>
            <header className="bg-gradient-to-r from-slate-700 to-purple-500 shadow-lg p-4">
                <div className="flex justify-between items-center">
                    <div className="logo">
                        <p>JosemaDesing</p>
                    </div>
                    <div className="flex mr-4">
                        <a href="http://localhost:5173/inicioSesion">
                            <img src="" id="imgCuenta" />
                        </a>

                        <a href="http://localhost:5173/carrito">
                            <img src="" id="imgCarrito" />
                        </a>
                    </div>
                </div>

                <form onSubmit={handleBuscarCategoria} className="flex flex-col sm:flex-row justify-center mt-1 mb-6">
                    <input
                        type="text"
                        placeholder="Buscar categoría..."
                        className="px-4 py-2 w-full sm:w-64 border border-gray-300 rounded-t sm:rounded-l sm:rounded-t-none"
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 w-full sm:w-auto rounded-b sm:rounded-r sm:rounded-b-none"
                    >
                        Buscar
                    </button>
                </form>

                <hr />
                <nav className="nav">
                    <ul className='flex justify-center gap-2 sm:gap-4 md:gap-5 mt-4 sm:mt-6 md:mt-8'>
                        <li><Link className='text-xs md:text-base lg:text-xl' to="/header">Inicio</Link></li>
                        <li><Link className='text-xs md:text-base lg:text-xl' to="/productos">Productos</Link></li>
                        <li>
                            <Link className='text-xs md:text-base lg:text-xl' to="#">Bebidas</Link>
                            <ul>
                                <li className="my-0 mx-3 text-xs md:text-sm lg:text-base"><Link to="/productos/categoria/1">Vinos</Link></li>
                                <li className="my-0 mx-3 text-xs md:text-sm lg:text-base"><Link to="/productos/categoria/3">Espumantes</Link></li>
                                <li className="mx-3 text-xs md:text-sm lg:text-base"><Link to="/productos/categoria/5">Espirituosas</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link className='text-xs md:text-base lg:text-xl' to="#">Delicatessen</Link>
                            <ul>
                                <li className="my-0 mx-3 text-xs md:text-sm lg:text-base"><Link to="/productos/categoria/2">Cafes</Link></li>
                                <li className="mx-3 text-xs md:text-sm lg:text-base"><Link to="/productos/categoria/6">Aceites</Link></li>
                                <li className="my-0 mx-3 text-xs md:text-sm lg:text-base"><Link to="/productos/categoria/4">Chocolates</Link></li>
                            </ul>
                        </li>
                        <li><Link className="text-xs md:text-base lg:text-xl" to="/contacto">Contacto</Link></li>
                    </ul>
                </nav>

            </header>
            <hr />
            <main className="flex-grow">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Layout;