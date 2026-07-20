import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import products from "../../data/products";

import { Link, useParams } from "react-router-dom";

function Search() {

    const { keyword } = useParams();

    const search = keyword.toLowerCase();

const filteredProducts = products.filter((product) => {

    return (

        product.name.toLowerCase().includes(search)

        ||

        product.category.toLowerCase().includes(search)

    );

});

    return (

        <>

            <Header />

            <div
                style={{
                    marginTop:"120px",
                    padding:"20px"
                }}
            >

                <h1>

                    Search Results

                </h1>

                <p>

                    {filteredProducts.length}

                    {" "}Products Found

                </p>

                <div
                    className="product-detail-container"
                >

                    {

                        filteredProducts.map(product=>(

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