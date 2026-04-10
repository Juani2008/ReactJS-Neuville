import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../services/firestore";
import { CartContext } from "../context/CartContext";

function ProductDetail() {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    const [product, setProduct] = useState(null);
    useEffect(() => {
        getProductsById(id).then((data) => {
            setProduct(data);
        }
    )
}, [id])
    if (!product) {
        return <h2>Cargando...</h2>
}
    return (
        <div>
            <img src={product.img} alt={product.tipo} />
            <h2>{product.marca} {product.tipo}</h2>
            <p>${product.precio}</p>
            <p>Stock: {product.stock}</p>
            <button onClick={()=> addToCart(product)}>Agregar al Carrito</button>
        </div>
    )
}
export default ProductDetail