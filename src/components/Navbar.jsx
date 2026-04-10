import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


function NavBar() {
    const {cart} = useContext(CartContext)
    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);   
    return(
        <nav>
            <Link to="/">Inicio</Link>
            <Link to="/products">Productos</Link>
            <Link to="/cart">
                🛒{cartItemCount}
            </Link>
        </nav>
    )


}
export default NavBar