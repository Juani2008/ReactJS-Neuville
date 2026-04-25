import { log } from "firebase/firestore/pipelines";
import { createContext, useState } from "react";

export const CartContext = createContext();


function CartProvider({children}) {
    
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        
        const cartItem = cart.find(item => item.id === product.id);

        if (cartItem) {
            if (cartItem.quantity < product.stock){
                setCart(cart.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item));
            } else{
                console.log ("No hay mas stock")
            }
        } else{
            if (product.stock > 0) {
                setCart([...cart, {...product, quantity: 1}]);
            }else{
                console.log("no hay mas stock");
                
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
        }

        const clearCart = () =>{
            setCart([])
        }

        

    return (
        <CartContext.Provider value={{cart, addToCart,removeFromCart,clearCart}}>
            {children}
        </CartContext.Provider>
        )
    
}
export default CartProvider


