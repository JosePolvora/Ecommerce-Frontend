function Ayuda() {
  return (
    <div className="terminosContenedor">


      <h3 className="ml-16 mt-16 font-bold text-2xl text-center">CENTRO DE AYUDA</h3>

      <div className="mr-20">
        <h3 className="text-left ml-16 mt-8 font-bold text-xl">Preguntas Frecuentes</h3>
        <p className="ml-16 mt-5 text-base">
          <strong>¿Cómo realizar un pedido?</strong><br />
          Para realizar un pedido, navega por nuestro catálogo, selecciona los productos que deseas y agrégales a tu carrito. Luego, dirígete al carrito y sigue las instrucciones para completar tu compra.
          <br /><br />

          <strong>¿Cuáles son los métodos de pago?</strong><br />
          Aceptamos diversas formas de pago, incluyendo tarjetas de crédito, débito y transferencias bancarias. Consulta nuestra sección de métodos de pago para más detalles.
          <br /><br />

          <strong>¿Puedo devolver un producto?</strong><br />
          Sí, ofrecemos una política de devolución de 30 días. Si no estás satisfecho con tu compra, puedes devolver el producto siguiendo las instrucciones en nuestra política de devoluciones.
        </p>
      </div>

      <div className="mr-20 mt-10">
        <h3 className="text-left ml-16 font-bold text-xl">Contacto</h3>
        
        <p className="ml-16 mt-1  text-base">
          Si necesitas más ayuda, no dudes en ponerte en contacto con nuestro equipo de soporte. Estamos aquí para ayudarte.< br/>< br/>
          
          <li>
            <strong>Correo electrónico: </strong>
            <a
              href="mailto:winestore@gmail.com"
              className="text-blue-500 hover:underline"
            >
              winestore@gmail.com
            </a>

          </li>
          <li>
            <strong>Telefono: </strong>
            <a
              href="https://wa.me/5493513374719"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              +54 9 351 337 4719
            </a>
          </li>


        </p>
      </div>

      <div className="mr-20 mt-10">
        <h3 className="text-left ml-16 font-bold text-xl">Recursos Adicionales</h3>
        <ul className="ml-16 mt-1 text-base list-disc">
          <li><a className="text-blue-500 hover:underline" href="http://localhost:5173/comocomprar">Guía de Compra</a></li>
          <li><a className="text-blue-500 hover:underline" href="http://localhost:5173/contacto">Contacto</a></li>
          <li><a className="text-blue-500 hover:underline" href="http://localhost:5173/terminoCondiciones">Términos y Condiciones</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Ayuda;
