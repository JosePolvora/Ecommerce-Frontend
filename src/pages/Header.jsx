import { Link } from "react-router-dom";

function Cabecera() {

    return (
        <header className="header">
            <div>
                {/* <div className="logo">
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
                        <li><Link className='text-xl' to="/">Inicio</Link></li>
                        <li>
                            <Link className='text-xl' to="/productos/bebidas">Bebidas</Link>
                            <ul>
                                <li className="my-4 mx-1"><Link to="/productos/categoria/1">Vinos</Link></li>
                                <li className="my-4 mx-3"><Link to="/productos/categoria/3">Espumantes</Link></li>
                                <li className="mx-5"><Link to="/productos/categoria/5">Espirituosas</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link className='text-xl' to="/productos/delicatessen">Delicatessen</Link>
                            <ul>
                                <li className="my-4 mx-1"><Link to="/productos/categoria/2">Cafés</Link></li>
                                <li className="my-4 mx-3"><Link to="/productos/categoria/4">Chocolates</Link></li>
                                <li className="mx-5"><Link to="/productos/categoria/6">Aceites de oliva</Link></li>
                            </ul>
                        </li>
                        <li><Link className="text-xl" to="/productos">Productos</Link></li>
                        <li><Link className="text-xl" to="/contacto">Contacto</Link></li>
                    </ul>
                </nav> */}

                <div className="header-content">
                    <h1>Wine Store</h1>
                </div>
            </div>
        </header>
    );
}

export default Cabecera;