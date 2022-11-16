import { Outlet,Link } from "react-router-dom";
import "./pagescss/Layout.css"



const Layout = () => {



    return (
        <>
        <nav >
        <ul >
            <li >
                <Link to="/" >Home</Link>
            </li>
            <li>
                <Link to="/blogs">Blogs</Link>
            </li>
            <li>
                <Link to="/service" >Service</Link>
            </li>
            <li>
                <Link to="/abouts" >About</Link>
            </li>
            <li>
                <Link to="/contact" >Contact</Link>
            </li>
            
            </ul>
        </nav>

        <Outlet />
        </>
    )
    };

export default Layout;