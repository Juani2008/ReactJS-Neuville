import { Link } from "react-router-dom";
import "../styles/components/ProductCard.css"

function ProductCard({ product }) {
    return (
        <div className="card">

            <img src={product.img} alt={product.tipo} className="cardImg" />

            <h3 className="title">{product.marca} {product.tipo}</h3>

            <p className="price">${product.precio}</p>

            <p className="stock">Stock: {product.stock}</p>

            <Link to={`/products/${product.id}`}>
                <button className="cardButton">Ver más</button>
            </Link>

        </div>
    )






}
export default ProductCard



