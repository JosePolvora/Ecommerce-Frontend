import React from 'react';

function AdminDashboard() {
  return (
    <div className='mb-10'>
      <h2 className="text-3xl font-bold text-center mb-10 mt-10">Panel de Administración</h2>
      <section className="sectionContent">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <nav className=''>
              <ul className="flex space-x-6">
                <li>
                  <a
                    href="http://localhost:5173/admin/adminheader"
                    className="hover:text-gray-400 text-2xl"
                  >
                    Administrador
                  </a>
                  <ul>

                    <li className="hover:text-gray-400 ml-2 pt-3"><a href="http://localhost:5173/admin/admincategorias">Editar Categorias</a></li>
                    <li className="hover:text-gray-400 ml-2 pt-1" ><a href="http://localhost:5173/admin/admincupones">Editar Cupones</a></li>
                    <li className="hover:text-gray-400 ml-2 pt-1"><a href="http://localhost:5173/admin/adminenvios">Editar Envios</a></li>
                    <li className="hover:text-gray-400 ml-2 pt-1"><a href="http://localhost:5173/admin/adminproductos">Editar Productos</a></li>
                    <li className="hover:text-gray-400 ml-2 pt-1" ><a href="http://localhost:5173/admin/adminusuarios">Editar Usuarios</a></li>                    
                    <li className="hover:text-gray-400 ml-2 pt-1"><a href="http://localhost:5173/admin/adminmensajes">Mensajes Recibidos</a></li>
                    <li className="hover:text-gray-400 ml-2 pt-1"><a href="http://localhost:5173/admin/admincomentarios">Comentarios Recibidos</a></li>
                
                  </ul>
                </li>
                <li>
                  <a href="http://localhost:5173/header" className="hover:text-gray-400 text-2xl">
                    Inicio
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <div className=''>
        <div className="container mx-auto mt-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Estadísticas de ventas</h2>
            {/* Aquí puedes agregar gráficos o métricas */}
            <div className="bg-gray-700 p-4 rounded-lg shadow-md">
              <p className='text-white'>Gráfico de ventas</p>
            </div>
          </section>
        </div>

        <div className="container mx-auto mt-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Pedidos recientes</h2>
            {/* Aquí se puede agregar una tabla o listado de pedidos */}
            <div className="bg-gray-700 p-4 rounded-lg shadow-md">
              <p className='text-white'>Tabla de pedidos</p>
            </div>
          </section>
        </div>
        <div className='container mx-auto mt-8 space-y-6'>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Productos populares</h2>
            {/* Aquí se puede agregar una lista de productos más vendidos */}
            <div className="bg-gray-700 p-4 rounded-lg shadow-md">
              <p className='text-white'>Lista de productos populares</p>
            </div>
          </section>
        </div>

      </div>


    </div>
  );
}

export default AdminDashboard;