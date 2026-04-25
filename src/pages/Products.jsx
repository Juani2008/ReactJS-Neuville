import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/firestore";
import "../styles/pages/Products.css"


function ProductsPage() {
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getProducts().then((data) => {
            console.log(data);
            
            setProducts(data);
            setLoading(false);
        });
    }, []);
    if (loading) {
    return <h2>Cargando...</h2>;
}
    return(
        <div className="productsContainer">
            {products.map((product)=>(
                <ProductCard key={product.id} product={product} />
            )
            )}
        </div>

    )
}


export default ProductsPage