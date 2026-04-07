import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";


function ProductsPage() {
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data);
        });
    }, []);

    return(
        <div>
            {products.map((product)=>(
                <ProductCard key={product.id} product={product} />
            )
            )}
        </div>

    )
}


export default ProductsPage