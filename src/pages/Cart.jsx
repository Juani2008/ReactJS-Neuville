import { useContext } from "react"
import { CartContext } from "../context/CartContext"




function Cart() {
    const {cart, removeFromCart, clearCart} = useContext(CartContext)

    if (cart.length === 0) {
        return <h2>Carrito vacio</h2>
    }
    const totalCart = cart.reduce(
        (acc, item) => acc + item.precio * item.quantity, 
        0
    )
    
    return (
        <div>
            {cart.map((product) =>(
                <div key={product.id}>
                    <img src={product.img} alt={product.marca} />
                    <h3>{product.marca} {product.tipo}</h3>
                    <p>Precio por unidad: ${Number(product.precio).toFixed(2)}</p>
                    <p>Cantidad: {product.quantity}</p>
                    <button onClick={()=>removeFromCart(product.id)}>Eliminar</button>
                </div>

            ))}

            <p>Total: {totalCart}</p>
            <button onClick={{clearCart}}>Vaciar carrito</button>
        </div>
    )

}

export default Cart