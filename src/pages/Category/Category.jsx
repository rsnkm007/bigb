import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import productApi from "../../api/productApi";
import "./Category.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";

function Category() {

    const { categoryName } = useParams();

    const [products, setProducts] = useState([]);

useEffect(() => {

    const fetchProducts = async () => {

        try {

            const response = await productApi.get("/products");

            setProducts(response.data);

        } catch (error) {

            console.error(error);

        }

    };

    fetchProducts();

}, []);

    const filteredProducts = products.filter(
        product => product.category === categoryName
    );

    return (

        <div className="category-container">

            <Header />

            <main className="category-content">

                <section className="category-heading-card">
                    <p className="category-eyebrow">Shop by category</p>
                    <h1>{categoryName}</h1>
                    <p className="category-product-count">
                        {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"} available
                    </p>
                </section>

                {filteredProducts.length > 0 ? (
                    <div className="category-product-grid">
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={`${product.category}-${product.id}`}
                                {...product}
                            />
                        ))}
                    </div>
                ) : (
                    <section className="category-empty-state">
                        <h2>No products found</h2>
                        <p>New {categoryName} products will appear here soon.</p>
                    </section>
                )}

            </main>

            <Footer />

        </div>

    );
}

export default Category;
