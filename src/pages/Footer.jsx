function PiePagina() {
    return (
        <div className="">
            <footer className="footer">

                <div className="links">

                    <div className="link">
                        <h3>Seguinos</h3>
                        <p></p>
                        <div className="social-media">
                            <a href="https://facebook.com" target="_blank" className="social-media-icon-fi">
                                <i className='bx bxl-facebook'></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" className="social-media-icon-fi">
                                <i className='bx bxl-twitter' ></i>
                            </a>
                            {/* <a href="https://x.com/" target="_blank" className="social-media-icon">

                                <img
                                    src="./src/images/x.png"
                                    alt="X logo"
                                    className="w-60 h-15"
                                />

                            </a> */}
                            <a href="https://instagram.com" target="_blank" className="social-media-icon-fi">
                                <i className='bx bxl-instagram' ></i>
                            </a>
                        </div>
                    </div>

                    <div className="link">
                        <h3>Contactanos</h3>
                        <ul>
                            <li>
                                <p>
                                    <i className='bx bxs-map'></i>
                                    <a
                                        href="https://www.google.com/maps?q=Isla+Verde+2152,+Centro+-+Córdoba"
                                        className="text-blue-500 hover:underline pl-2"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Isla Verde 2152, Córdoba
                                    </a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <i className='bx bxs-phone'></i>
                                    <a
                                        href="https://wa.me/5493513374719"
                                        className="text-blue-500 hover:underline pl-2"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        +54 9 351 337 4719
                                    </a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <i className='bx bxs-envelope'></i>
                                    <a
                                        href="mailto:winestore@gmail.com"
                                        // href="https://mail.google.com/mail/?view=cm&fs=1&to=winestore@gmail.com"
                                        // target="_blank"
                                        className="text-blue-500 hover:underline pl-2"
                                    >
                                        winestore@gmail.com
                                    </a>
                                </p>
                            </li>

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
                            <li><a href="http://localhost:5173/header">Inicio</a></li>
                        </ul>
                    </div>
                </div>
                <hr />

                <div className="text-center bg-gradient-to-r from-slate-700 to-purple-500 shadow-lg p-4">

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

            <a href="https://wa.me/5493513374719"
                className="fixed bottom-5 right-5 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl shadow-2xl hover:bg-green-600 transition-all"
                target="_blank"
                rel="noopener noreferrer">
                <i className="bx bxl-whatsapp"></i>
            </a>

        </div>
    )
}

export default PiePagina
