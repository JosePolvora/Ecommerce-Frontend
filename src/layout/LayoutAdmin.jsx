import { Outlet, Link } from 'react-router-dom';

const Layoutadmin = () => {
    return (
        <div>
            <nav>
                <ul  className='bg-gray-700 text-white p-4 text-end pr-10 font-bold italic'>
                    <li>
                        <Link to="/admin/admindashboard">Admin Panel</Link>
                    </li>
                    <li>
                        <Link to="/admin/adminheader"></Link>
                    </li>
                    <li>
                        <Link to="/admin/adminproductos"></Link>
                    </li>
                    <li>
                        <Link to="/admin/formproductos"></Link>
                    </li>
                    <li>
                        <Link to="/admin/adminusuarios"></Link>
                    </li>
                    <li>
                        <Link to="/admin/formusuarios"></Link>
                    </li>

                    <li>
                        <Link to="/admin/admincategorias"></Link>
                    </li>
                    <li>
                        <Link to="/admin/formcategorias"></Link>
                    </li>

                    <li>
                        <Link to="/admin/adminenvios"></Link>
                    </li>
                    <li>
                        <Link to="/admin/formenvios"></Link>
                    </li>
                    <li>
                        <Link to="/admin/adminimagenes"></Link>
                    </li>
                    <li>
                        <Link to="/admin/admincupones"></Link>
                    </li>
                    <li>
                        <Link to="/admin/formcupones"></Link>
                    </li>
                    <li>
                        <Link to="/admin/admincomentarios"></Link>
                    </li>
                    
                    

                </ul>
            </nav>
            <hr />
            <Outlet />
        </div>
    )
}

export default Layoutadmin;
