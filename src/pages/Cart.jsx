import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import "../styles/pages/Cart.css"
import { createOrder } from "../services/firestore";

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const buyCart = async () => {
            const order = {
                items: cart.map(item => ({
                    id: item.id,
                    marca: item.marca,
                    tipo: item.tipo,
                    precio: item.precio,
                    quantity: item.quantity
                })),
                total: totalCart,
                date: new Date(),
            };
            try{
                const orderId = await createOrder(order);
                console.log("orden creada con el ID:", orderId);
                clearCart();
            } catch (error) {
                console.error("Error al crear la orden:", error);
            }

            try {
                const orderId = await createOrder(order);
                clearCart();
                alert("Compra finalizada. ID de la orden: " + orderId);
            } catch (error) {
                console.error("Error al crear la orden:", error);
                alert("Error al finalizar la compra.");
            }
        };

  if (cart.length === 0) {
    return <h2 className="cartEmpty">Carrito vacío</h2>;
  }

  const totalCart = cart.reduce(
    (acc, item) => acc + item.precio * item.quantity,
    0
  );

  return (
    <div className="cart">

      <div className="cartContainer">

        {/* productos */}
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

        {/* resumen */}
        <div className="total">
          <h2>Total: ${totalCart}</h2>

          <button className="clearBtn" onClick={clearCart}>
            Vaciar carrito
          </button>

          <button className="buyCart"
              onClick={buyCart}
              >
            Finalizar Compra      
          </button>
        </div>

      </div>

    </div>
  );
}

export default Cart;