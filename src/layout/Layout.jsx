
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <div>

            <ul>
                {/* <li>
                        <Link className='text-xl' to="/">Inicio</Link>
                    </li> */}
                <header className="bg-blue-600">

                    <div className="logo">
                        <p>JosemaDesing</p>
                    </div>

                    <div className="iconos">
                        <a href="http://localhost:5173/inicioSesion">
                            <img src="" id="imgCuenta" />
                        </a>

                        <a href="http://localhost:5173/carrito">
                            <img src="" id="imgCarrito" />
                        </a>
                    </div>

                    <nav className="nav">
                        <ul className='flex justify-center gap-5'>
                            <li><Link className='text-xl' to="/header">Inicio</Link></li>
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
                            <li><Link className="text-xl" to="/productos">Productos</Link></li>
                            <li><Link className="text-xl" to="/contacto">Contacto</Link></li>
                            <li><Link className="text-xl" to="/footer">Seguinos</Link></li>
                        </ul>
                    
                    </nav>

                </header>

                <li>
                    <Link to="/header"></Link>
                </li>
                <li>
                    <Link to="/footer"></Link>
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
            <Outlet />
        </div>
    )
}

export default Layout;
