import { Outlet, Link } from 'react-router-dom';
import Footer from '../pages/Footer';

const Layout = () => {
    return (
        <div>

            <ul>
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

                    <nav className="nav">
                        <ul className='flex justify-center gap-5'>
                            <li><Link className='text-xl' to="/header">Inicio</Link></li>
                            <li><Link className="text-xl" to="/productos">Productos</Link></li>
                            <li>
                                <Link className='text-xl' to="#">Bebidas</Link>
                                <ul>
                                    <li className="my-1 mx-2"><Link to="/productos/categoria/1">Vinos</Link></li>
                                    <li className="my-1 mx-2"><Link to="/productos/categoria/3">Espumantes</Link></li>
                                    <li className="mx-2"><Link to="/productos/categoria/5">Espirituosas</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link className='text-xl' to="#">Delicatessen</Link>
                                <ul>
                                    <li className="my-1 mx-2"><Link to="/productos/categoria/2">Cafés</Link></li>
                                    <li className="my-1 mx-2"><Link to="/productos/categoria/4">Chocolates</Link></li>
                                    <li className="mx-2"><Link to="/productos/categoria/6">Aceites de oliva</Link></li>
                                </ul>
                            </li>
                            
                            <li><Link className="text-xl" to="/contacto">Contacto</Link></li>
                            <li><Link className="text-xl" to="/footer"></Link></li>
                        </ul>
                    </nav>
                </header>
                <li>
                    <Link to="/header"></Link>
                </li>
                <li>
                    <Link to="/inicioSesion"></Link>
                </li>
                <li>
                    <Link to="/registro"></Link>
                </li>
                <li>
                    <Link to="/productos"></Link>
                </li>
                <li>
                    <Link to="/detallexproducto/:id"></Link>
                </li>
                <li>
                    <Link to="/recuperar-password"></Link>
                </li>
                <li>
                    <Link to="/recuperar-password/reset:token"></Link>
                </li>
                <li>
                    <Link to="/contacto"></Link>
                </li>
                <li>
                    <Link to="/ayuda"></Link>
                </li>
                <li>
                    <Link to="/legales"></Link>
                </li>
                <li>
                    <Link to="/terminoCondiciones"></Link>
                </li>
                <li>
                    <Link to="/comoComprar"></Link>
                </li>
                <li>
                    <Link to="/carrito"></Link>
                </li>
                <li>
                    <Link to="/productoxcategorias"></Link>
                </li>
            </ul>
            <hr />
            <main className="flex-grow">
                <Outlet />
            </main>

            <Footer />
        </div >
    )
}

export default Layout;
