function PiePagina() {
    return (
        <footer className="footer">

            <div className="links">

                <div className="link">
                    <h3>Seguinos</h3>
                    <p></p>
                    <div className="social-media">
                        <a href="https://facebook.com" target="_blank" className="social-media-icon">
                            <i className='bx bxl-facebook'></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" className="social-media-icon">
                            <i className='bx bxl-twitter' ></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" className="social-media-icon">
                            <i className='bx bxl-instagram' ></i>
                        </a>
                    </div>
                </div>

                <div className="link">
                    <h3>Contactanos</h3>
                    <ul>
                        <li><p><i className='bx bxs-map'></i> Rafael Nuñez 4250, Centro - Córdoba</p></li>
                        <li><p> <i className='bx bxs-phone'></i> +54 9 351 333-4444</p></li>
                        <li><p><i className='bx bxs-envelope'></i> winestore@gmail.com</p></li>
                        <li><p><i className='bx bx-time'></i> Horarios de Atención<br></br>
                            lunes a viernes  de 9 a 18hs.<br></br>
                            Sábados de 9 a 13hs.</p></li>
                    </ul>
                </div>

                <div className="link">
                    <h3>Enlaces útiles</h3>
                    <ul>

                        <li><a href="http://localhost:5173/contacto">Contacto</a></li>
                        <li><a href="http://localhost:5173/comoComprar">Como Comprar</a></li>
                        <li><a href="http://localhost:5173/ayuda">Ayuda</a></li>
                        <li><a href="http://localhost:5173/legales">Legales</a></li>
                        <li><a href="http://localhost:5173/terminoCondiciones">Términos y Condiciones</a></li>
                        <li><a href="http://localhost:5173">Inicio</a></li>
                    </ul>
                </div>
            </div>
            <hr />

            <div className="derechos">

                <div className="logoDerechos">
                    <h2>JosemaDesing</h2>
                    <p className="text-sm font-sans text-white">
                        &copy;
                        2024 JosemaDesing. Todos los derechos reservados.<br></br>
                        Desarrollado por José Oviedo.
                    </p>

                </div>
            </div>

        </footer>
    )
}

export default PiePagina
