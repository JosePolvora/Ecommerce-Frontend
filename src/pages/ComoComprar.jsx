import React from 'react';

// Componente para cada paso individual
const Paso = ({ paso, titulo, descripcion, imagen, altText }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{paso}: {titulo}</h2>
      <p className="text-gray-600 mb-4">{descripcion}</p>
      <img className="border border-gray-300 rounded-lg shadow-lg max-w-full h-auto" src={imagen} alt={altText} />
    </div>
  );
};

// Componente principal para la página "Cómo comprar"
const ComoComprar = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Cómo Comprar en </h2>
      <p className="text-center text-gray-600 mb-12">Te explicamos paso a paso cómo hacer tu compra de manera fácil y segura.</p>

      {/* Paso 1 */}
      <Paso
        paso="Paso 1"
        titulo="Selecciona el Producto"
        descripcion="Navega en las categorías o utiliza la barra de búsqueda para encontrar el producto que deseas."
        imagen="/ruta-a-tu-imagen/categoria-busqueda-ejemplo.jpg"
        altText="Barra de búsqueda y categorías"
      />

      {/* Paso 2 */}
      <Paso
        paso="Paso 2"
        titulo="Añade al Carrito"
        descripcion="Selecciona las opciones de tu producto y añádelo al carrito de compras."
        imagen="/ruta-a-tu-imagen/anadir-carrito-ejemplo.jpg"
        altText="Botón añadir al carrito"
      />

      {/* Paso 3 */}
      <Paso
        paso="Paso 3"
        titulo="Revisa tu Carrito"
        descripcion="Verifica que todos los productos que deseas estén en el carrito y haz clic en 'Ir a la caja'."
        imagen="/ruta-a-tu-imagen/carrito-ejemplo.jpg"
        altText="Revisión del carrito de compras"
      />

      {/* Paso 4 */}
      <Paso
        paso="Paso 4"
        titulo="Información de Envío"
        descripcion="Completa tu dirección de envío o selecciona una dirección guardada."
        imagen="/ruta-a-tu-imagen/envio-ejemplo.jpg"
        altText="Formulario de dirección de envío"
      />

      {/* Paso 5 */}
      <Paso
        paso="Paso 5"
        titulo="Elige tu Método de Pago"
        descripcion="Escoge la forma de pago que prefieras, ya sea tarjeta de crédito, débito, PayPal u otros."
        imagen="/ruta-a-tu-imagen/metodos-pago-ejemplo.jpg"
        altText="Métodos de pago"
      />

      {/* Paso 6 */}
      <Paso
        paso="Paso 6"
        titulo="Confirma tu Pedido"
        descripcion="Verifica tu pedido y presiona 'Confirmar'. Te enviaremos un correo con los detalles del mismo."
        imagen="/ruta-a-tu-imagen/confirmar-pedido-ejemplo.jpg"
        altText="Botón confirmar pedido"
      />

      {/* Paso 7 */}
      <Paso
        paso="Paso 7"
        titulo="Recibe tu Pedido"
        descripcion="Espera cómodamente tu pedido en la dirección que nos proporcionaste."
        imagen="/ruta-a-tu-imagen/recibe-pedido-ejemplo.jpg"
        altText="Entrega del pedido"
      />

      {/* Sección de dudas y preguntas */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Tienes dudas?</h2>
        <p className="text-gray-600">Consulta nuestra <a href="http://localhost:5173/ayuda" className="text-blue-500 hover:underline">sección de preguntas frecuentes</a> o comunícate con nuestro equipo de atención al cliente.</p>
      </div>
    </div>
  );
};

export default ComoComprar;
