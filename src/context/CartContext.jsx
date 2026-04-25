import { log } from "firebase/firestore/pipelines";
import { createContext, useState } from "react";
import Swal from "sweetalert2";
import { createOrder } from "../services/firestore";

export const CartContext = createContext();


function CartProvider({children}) {
    
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        
        const cartItem = cart.find(item => item.id === product.id);

        if (cartItem) {
            if (cartItem.quantity < product.stock){
                setCart(cart.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item));
                Swal.fire({icon: "success", title: "Producto agregado al carrito"})
            } else{
                Swal.fire({icon: "error", title: "No hay más stock disponible"})    
            }
        } else{
            if (product.stock > 0) {
                setCart([...cart, {...product, quantity: 1}]);
                Swal.fire({icon: "success", title: "Producto agregado al carrito"})
            }else{
                Swal.fire({icon: "error", title: "No hay más stock disponible"})    
            }

        }
    }
        const removeFromCart = (id) => {
            const cartItem = cart.find(item => item.id === id);

            if (cartItem.quantity > 1) {
                setCart(cart.map(item => item.id === id ? {...item, quantity: item.quantity - 1} : item));
            } else {
                setCart(cart.filter(item => item.id !== id));
            }
            Swal.fire({icon: "info", title: "Producto eliminado del carrito"})
        }

        const clearCart = () =>{
            setCart([])
            Swal.fire({icon: "success", title: "Carrito vaciado"})
        }

        const buyCart = async () => {
            

            const totalCart = cart.reduce(
                (acc, item) => acc + item.precio * item.quantity,
                    0
            );

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
                
                setCart([]);
                return orderId
            } catch (error) {
                console.error("Error al crear la orden:", error);
            }
        };

        

    return (
        <CartContext.Provider value={{cart, addToCart,removeFromCart,clearCart, buyCart}}>
            {children}
        </CartContext.Provider>
        )
    
}
export default CartProvider


