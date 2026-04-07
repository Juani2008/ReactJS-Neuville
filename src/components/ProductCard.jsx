import { Link } from "react-router-dom";

function ProductCard({ product }) {
    return (
        <div>
            <img src={product.imagen} alt={product.tipo} />
            <h2>{product.marca} {product.tipo}</h2>
            <p>${product.precio}</p>
            <p>Stock: {product.stock}</p>
            <Link to={`/products/${product.id}`}>
                <button>Ver detalles</button>
            </Link>
        </div>
    )






}
export default ProductCard



