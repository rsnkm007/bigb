import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";

import productApi from "../../api/productApi";

function Search() {

    const [products, setProducts] = useState([]);

    const { keyword } = useParams();

    const loadProducts = useCallback(async () => {

    try {

        const response = await productApi.get(
            `/products?search=${keyword}`
        );

        setProducts(response.data);

    }

    catch (error) {

        console.error(error);

    }

}, [keyword]);

useEffect(() => {

    loadProducts();

}, [loadProducts]);

useEffect(() => {

    loadProducts();

}, [keyword]);
    return (

        <>

            <Header />

            <div
                style={{
                    marginTop: "120px",
                    padding: "20px"
                }}
            >

                <h1>

                    Search Results

                </h1>

                <p>

                    {products.length}

                    {" "}Products Found

                </p>

                <div
                    className="product-detail-container"
                >

                    {

                        products.map(product => (

                            <Link

                                key={product.id}

                                to={`/product/${product.category}/${product.id}`}

                                className="product-link"

                            >

                                <div className="product-details">

                                    <img

                                        src={product.image}

                                        alt={product.name}

                                    />

                                    <h3>

                                        {product.name}

                                    </h3>

                                    <p>

                                        ₹{product.offer_price}

                                    </p>

                                </div>

                            </Link>

                        ))

                    }

                </div>

            </div>

            <Footer />

        </>

    );

}

export default Search;