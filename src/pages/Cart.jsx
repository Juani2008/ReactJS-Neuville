import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/pages/Cart.css";
import Swal from "sweetalert2";

function Cart() {
  const { cart, removeFromCart, clearCart, buyCart } = useContext(CartContext);

  const totalCart = cart.reduce(
    (acc, item) => acc + item.precio * item.quantity,
    0
  );

  const handleBuy = async () => {
    const orderId = await buyCart();

    Swal.fire({
      icon: "success",
      title: "Compra realizada",
      text: `Tu número de orden es: ${orderId}`,
    });
  };

  return (
    <div className="cart">
      <div className="cartContainer">

        <div className="cartProducts">
          {cart.map((product) => (
            <div key={product.id} className="item">
              <img src={product.img} alt={product.tipo} />

              <div className="info">
                <h3>{product.marca} {product.tipo}</h3>
                <p>${product.precio}</p>
                <p>Cantidad: {product.quantity}</p>
              </div>

              <button
                className="removeBtn"
                onClick={() => removeFromCart(product.id)}
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>

        <div className="total">
          <h2>Total: ${totalCart}</h2>

          <button className="clearBtn" onClick={clearCart}>
            Vaciar carrito
          </button>

          <button className="buyCart" onClick={handleBuy}>
            Finalizar Compra
          </button>
        </div>

      </div>
    </div>
  );
}

export default Cart;