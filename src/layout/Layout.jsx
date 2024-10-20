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
            {/* <header className="bg-gradient-to-r from-slate-700 to-purple-500 shadow-lg p-4"> */}
            <header className="bg-black shadow-lg p-4">

                <div className="flex justify-between items-center ">
                    <div className="logo">
                        <p>Wine Store</p>
                        {/* <p className='text-sm font-sans text-center'>Tienda de Vinos</p> */}
                        <p className="text-xs md:text-sm lg:text-base font-sans text-center md:text-left lg:text-right">
                            Tienda de Vinos
                        </p>
                    </div>

                    <form onSubmit={handleBuscarCategoria} className="flex flex-col sm:flex-row justify-center items-center">
                        <input
                            type="text"
                            placeholder="Buscar categoría..."
                            className="px-2 py-1 w-full sm:w-48 md:w-64 lg:w-80 text-xs sm:text-sm md:text-base border border-gray-300 rounded-t sm:rounded-l sm:rounded-t-none"
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="bg-red-900 text-white text-xs sm:text-sm md:text-base px-2 py-1 w-full sm:w-auto rounded-b sm:rounded-r sm:rounded-b-none"
                        >
                            Buscar
                        </button>
                    </form>

                    


                    <div className="flex mr-4">
                        <a href="http://localhost:5173/inicioSesion">
                            <img src="" id="imgCuenta" />
                        </a>

                        <a href="http://localhost:5173/carrito">
                            <img src="" id="imgCarrito" />
                        </a>
                    </div>
                </div>

                {/* <hr /> */}
                <nav className="nav">
                    <ul className='text-white  flex justify-center gap-2 sm:gap-4 md:gap-5 mt-4 sm:mt-6 md:mt-8'>
                        <li><Link className='text-xs md:text-base lg:text-base' to="/header">Inicio</Link></li>
                        <li><Link className='text-xs md:text-base lg:text-base' to="/productos">Productos</Link></li>
                        <li>
                            {/* <Link className='text-xs md:text-base lg:text-base' to="#">Bebidas</Link> */}
                            <a className="galery" href="/header#Bebidas"><span className="text-xs md:text-base lg:text-base">Bebidas</span></a>
                            <ul className='text-black'>
                                <li className="my-0 mx-3 text-xs md:text-sm lg:text-sm mt-5"><Link to="/productos/categoria/1">Vinos</Link></li>
                                <li className="my-0 mx-3 text-xs md:text-sm lg:text-sm"><Link to="/productos/categoria/3">Espumantes</Link></li>
                                <li className="mx-3 text-xs md:text-sm lg:text-sm"><Link to="/productos/categoria/5">Espirituosas</Link></li>
                            </ul>
                        </li>
                        <li>
                            {/* <Link className='text-xs md:text-base lg:text-base' to="/header#Delicatessen">Delicatessen</Link> */}
                            <a className="galery" href="/header#Delicatessen"><span className="text-xs md:text-base lg:text-base">Delicatessen</span></a>
                            <ul className='text-black'>
                                <li className="my-0 mx-3 text-xs md:text-sm lg:text-sm mt-5"><Link to="/productos/categoria/2">Cafes</Link></li>
                                <li className="mx-3 text-xs md:text-sm lg:text-sm"><Link to="/productos/categoria/6">Aceites</Link></li>
                                <li className="my-0 mx-3 text-xs md:text-sm lg:text-sm"><Link to="/productos/categoria/4">Chocolates</Link></li>
                            </ul>
                        </li>
                        <a className="galery" href="/header#Galery"><span className="text-xs md:text-base lg:text-base">Galeria</span></a>
                        <li><Link className="text-xs md:text-base lg:text-base" to="/contacto">Contacto</Link></li>
                    </ul>
                </nav>
            </header>
            
            <main className="flex-grow">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Layout;