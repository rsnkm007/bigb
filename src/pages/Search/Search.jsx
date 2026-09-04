import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

import productApi from "../../api/productApi";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Search.css";

function Search() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const { keyword } = useParams();

    const searchTerm = keyword?.trim() || "";

    useEffect(() => {

        const controller = new AbortController();

        const loadProducts = async () => {

            setLoading(true);
            setError("");
            setSelectedCategory("All");

            try {

                const response = await productApi.get("/products", {
                    params: { search: searchTerm },
                    signal: controller.signal
                });

                if (!controller.signal.aborted) {

                    setProducts(response.data);

                }

            }

            catch (requestError) {

                if (!controller.signal.aborted) {

                    console.error(requestError);
                    setProducts([]);
                    setError("We could not load the search results. Please try again.");

                }

            }

            finally {

                if (!controller.signal.aborted) {

                    setLoading(false);

                }

            }

        };

        loadProducts();

        return () => controller.abort();

    }, [searchTerm]);

    const matchedCategories = useMemo(
        () => [...new Set(products.map((product) => product.category))],
        [products]
    );

    const visibleProducts = selectedCategory === "All"
        ? products
        : products.filter((product) => product.category === selectedCategory);

    const resultLabel = selectedCategory === "All"
        ? `${products.length} ${products.length === 1 ? "product" : "products"}`
        : `${visibleProducts.length} ${visibleProducts.length === 1 ? "product" : "products"} in ${selectedCategory}`;

    return (

        <>

            <Header />

            <main className="search-page">
                <section className="search-heading-card">
                    <p className="search-eyebrow">Search results</p>
                    <h1>
                        {searchTerm ? <>Results for “{searchTerm}”</> : "Find products"}
                    </h1>
                    <p className="search-result-count">
                        {loading ? "Searching products and categories…" : resultLabel}
                    </p>
                </section>

                {!loading && matchedCategories.length > 1 && (
                    <div className="search-category-filters" aria-label="Filter search results by category">
                        <button
                            className={selectedCategory === "All" ? "is-active" : ""}
                            type="button"
                            onClick={() => setSelectedCategory("All")}
                        >
                            All
                        </button>

                        {matchedCategories.map((category) => (
                            <button
                                className={selectedCategory === category ? "is-active" : ""}
                                type="button"
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                )}

                {loading && <section className="search-status-card">Searching…</section>}

                {!loading && error && <section className="search-status-card is-error">{error}</section>}

                {!loading && !error && visibleProducts.length === 0 && (
                    <section className="search-status-card">
                        <h2>No matching products found</h2>
                        <p>Try a product name, brand, or category such as “Mobiles” or “Wearables”.</p>
                    </section>
                )}

                {!loading && !error && visibleProducts.length > 0 && (
                    <div className="search-product-grid">
                        {visibleProducts.map((product) => (
                            <ProductCard
                                key={`${product.category}-${product.id}`}
                                {...product}
                            />
                        ))}
                    </div>
                )}
            </main>

            <Footer />

        </>

    );

}

export default Search;
