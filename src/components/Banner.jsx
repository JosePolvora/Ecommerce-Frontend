import { Carousel } from "flowbite-react";

import Slide1 from "/src/images/copas-vino-tinto.jpg";
import Slide2 from "/src/images/mesa.jpg";
import Slide3 from "/src/images/picada.png";
// import Slide4 from "/src/images/brindis.jpg";
// import Slide5 from "/src/images/uva.jpg";

const Banner = () => {
    return (
        <div className="w-full h-56 sm:h-64 xl:h-80 2xl:h-96">
            {/* Carrusel de imágenes */}
            <Carousel pauseOnHover>
            {/* <div >
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/aVs2Y_mNMTc?si=ERsYlelPCf7_Pquz&amp;controls=0&amp;start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div> */}
            
                <img src={Slide1} alt="..." className="w-full h-full object-cover rounded-lg" />
                <img src={Slide2} alt="..." className="w-full h-full object-cover rounded-lg" />
                <img src={Slide3} alt="Slide 3" className="w-full h-full object-cover rounded-lg" />
                {/* <img src={Slide4} alt="Slide 4" className="w-full h-full object-cover rounded-lg" />
                <img src={Slide5} alt="Slide 5" className="w-full h-full object-cover rounded-lg" /> */}
            </Carousel>
        </div>
    );
};

export default Banner