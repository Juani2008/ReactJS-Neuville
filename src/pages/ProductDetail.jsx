import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../services/firestore";
import { CartContext } from "../context/CartContext";
import "../styles/pages/ProductsDetail.css"


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
        <div className="detail">

            <div className="detailContainer">

                <div className="img">
                    <img src={product.img} alt={product.tipo} />
                </div>
                <div className="info">

                    <h2 className="title">{product.marca} {product.tipo}</h2>

                    <p className="price">${product.precio}</p>

                    <p className="stock">Stock: {product.stock}</p>

                    {product.stock === 0 ? (
                        <p className="noStock">Producto agotado</p>
                    ) : (
                        <button className="addToCart" onClick={() => addToCart(product)}>
                            Agregar al Carrito
                        </button>
                    )}

                </div>
            </div>
        </div>
    )
}
export default ProductDetail