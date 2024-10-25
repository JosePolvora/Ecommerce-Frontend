import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from '../components/Banner';


function Home() {
    const navigate = useNavigate();
    const [lightboxActive, setLightboxActive] = useState(false);
    const [currentImage, setCurrentImage] = useState("");

    const openLightbox = (imageSrc) => {
        setCurrentImage(imageSrc);
        setLightboxActive(true);
    };

    const closeLightbox = () => {
        setLightboxActive(false);
    };

    return (
        <header className="bg-slate-50 shadow-lg p-4">
            <div>
                <div className="mt-16">
                    <Banner />
                </div>
                <section className="">
                    <div id="Bebidas">
                        <h1
                            className="text-center text-5xl font-bold mt-24 pt-10"
                            style={{
                                color: "rgb(0, 0, 0)",
                                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                            }}
                        >
                            Bebidas
                        </h1>
                    </div>

                    <div className="image-gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center mt-28 pb-24">
                        <div className="relative w-56 h-80">
                            <img
                                src="./src/images/vinos.jpg"
                                alt="Vinos"
                                className="p-5 w-full h-full object-cover rounded-lg bg-gradient-to-r from-slate-500 to-red-900 cursor-pointer"
                                onClick={() => navigate('/productos/categoria/1')}
                            />
                            <div className="absolute bottom-0 w-full text-center bg-black bg-opacity-50 text-white p-1 rounded-b-lg">
                                <h1>Vinos</h1>
                            </div>
                        </div>

                        <div className="relative w-56 h-80">
                            <img
                                src="./src/images/658.png"
                                alt="Espumantes"
                                className="p-5 w-full h-full object-cover rounded-lg bg-gradient-to-r from-slate-500 to-red-900 cursor-pointer"
                                onClick={() => navigate('/productos/categoria/3')}
                            />
                            <div className="absolute bottom-0 w-full text-center bg-black bg-opacity-50 text-white p-1 rounded-b-lg">
                                <h1>Espumantes</h1>
                            </div>
                        </div>

                        <div className="relative w-56 h-80">
                            <img
                                src="./src/images/espirituosas.jpg"
                                alt="Espirituosas"
                                className="p-5 w-full h-full object-cover rounded-lg bg-gradient-to-r from-slate-500 to-red-900 cursor-pointer"
                                onClick={() => {
                                    navigate('/productos/categoria/5');
                                }}
                            />
                            <div className="absolute bottom-0 w-full text-center bg-black bg-opacity-50 text-white p-1 rounded-b-lg">
                                <h1>Espirutuosas</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-300">
                    <div id="Delicatessen">
                        <h1
                            className="text-center text-5xl font-bold pt-10"
                            style={{
                                color: "rgb(0, 0, 0)",
                                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                            }}
                        >
                            Delicatessen
                        </h1>
                    </div>

                    <div className="image-gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center mt-28 pb-24">

                        <div className="relative w-56 h-80">
                            <img
                                src="./src/images/1006767.png"
                                alt="Cafés"
                                className="p-5 w-full h-full object-cover rounded-lg bg-gradient-to-r from-slate-500 to-red-900 cursor-pointer"
                                onClick={() => navigate('/productos/categoria/2')}
                            />
                            <div className="absolute bottom-0 w-full text-center bg-black bg-opacity-50 text-white p-1 rounded-b-lg">
                                <h1>Cafés</h1>
                            </div>
                        </div>

                        <div className="relative w-56 h-80">
                            <img
                                src="./src/images/1003777.png"
                                alt="Chocolates"
                                className="p-5 w-full h-full object-cover rounded-lg bg-gradient-to-r from-slate-500 to-red-900 cursor-pointer"
                                onClick={() => {
                                    navigate('/productos/categoria/4');
                                }}
                            />
                            <div className="absolute bottom-0 w-full text-center bg-black bg-opacity-50 text-white p-1 rounded-b-lg">
                                <h1>Chocolates</h1>
                            </div>

                        </div>

                        <div className="relative w-56 h-80">
                            <img
                                src="./src/images/aceites.jpg"
                                alt="Aceites"
                                className="p-5 w-full h-full object-cover rounded-lg bg-gradient-to-r from-slate-500 to-red-900 cursor-pointer"
                                onClick={() => {
                                    navigate('/productos/categoria/6');
                                }}
                            />
                            <div className="absolute bottom-0 w-full text-center bg-black bg-opacity-50 text-white p-1 rounded-b-lg">
                                <h1>Aceites</h1>
                            </div>
                        </div>
                    </div>

                </section>

                <div id="Galery">
                    <h1
                        className="text-center text-5xl font-bold mb-10 pt-10"
                        style={{
                            color: "rgb(0, 0, 0)",
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                        }}
                    >
                        Galeria
                    </h1>
                </div>
                <section className="gallery" id="Galeria">

                    <div className="contenedor">

                        <div className="contenedor-galeria">
                            <img
                                src="./src/images/copas-vino-tinto.jpg"
                                alt=""
                                className="img-galeria"
                                onClick={() => openLightbox('./src/images/copas-vino-tinto.jpg')}
                            />
                            <img
                                src="./src/images/uva.jpg"
                                alt=""
                                className="img-galeria"
                                onClick={() => openLightbox('./src/images/uva.jpg')}
                            />
                            <img
                                src="./src/images/brindis.jpg"
                                alt=""
                                className="img-galeria"
                                onClick={() => openLightbox('./src/images/brindis.jpg')}
                            />
                            <img
                                src="./src/images/picada.png"
                                alt=""
                                className="img-galeria"
                                onClick={() => openLightbox('./src/images/picada.png')}
                            />
                            <img
                                src="./src/images/mesa.jpg"
                                alt=""
                                className="img-galeria"
                                onClick={() => openLightbox('./src/images/mesa.jpg')}
                            />
                            <img
                                src="./src/images/vino-copa.png"
                                alt=""
                                className="img-galeria"
                                onClick={() => openLightbox('./src/images/vino-copa.png')}
                            />

                        </div>
                    </div>
                </section>

                <section className={`imagen-light ${lightboxActive ? "active" : ""}`} onClick={closeLightbox}>

                    <img
                        src="./src/images/closeLight.svg"
                        alt="Cerrar"
                        className="close"
                        onClick={closeLightbox}
                    />
                    <img
                        src={currentImage}
                        alt="Imagen ampliada"
                        className="agregar-imagen"
                        onClick={(e) => e.stopPropagation()}
                    />
                </section>

            </div>

        </header >
    );
}

export default Home;