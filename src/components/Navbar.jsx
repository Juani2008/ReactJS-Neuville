import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/components/NavBar.css"


function NavBar() {
    const {cart} = useContext(CartContext)
    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);   
    return(
        <nav className="navbar">
            <div className="left">
                <Link className="link" to="/">Inicio</Link>
                <Link className="link" to="/products">Productos</Link>
            </div>
                <Link className="cartNavbar" to="/cart">
                    🛒<span className="count">{cartItemCount}</span>
                </Link>
            
        </nav>
    )


}
export default NavBar