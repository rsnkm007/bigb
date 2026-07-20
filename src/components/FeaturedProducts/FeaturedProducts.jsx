import "./FeaturedProducts.css";

import products from "../../data/products";

import ProductCard from "../ProductCard/ProductCard";

function FeaturedProducts() {

    const featuredProducts = [

        ...products.filter(product => product.category === "Mobiles").slice(0, 3),

        ...products.filter(product => product.category === "Laptops").slice(0, 3),

        ...products.filter(product => product.category === "Shoes").slice(0, 3),

        ...products.filter(product => product.category === "Wearables").slice(0, 3),

        ...products.filter(product => product.category === "Casuals").slice(0, 3),

        ...products.filter(product => product.category === "Books").slice(0, 2),

        ...products.filter(product => product.category === "Beauty").slice(0, 2),

        ...products.filter(product => product.category === "Sports").slice(0, 2),

        ...products.filter(product => product.category === "Groceries").slice(0, 2),

        ...products.filter(product => product.category === "Toys").slice(0, 2),

        ...products.filter(product => product.category === "Study").slice(0, 2),

        ...products.filter(product => product.category === "Bags").slice(0, 2),

        ...products.filter(product => product.category === "Gaming").slice(0, 2),

        ...products.filter(product => product.category === "Kitchen Appliances").slice(0, 2),

        ...products.filter(product => product.category === "Micro Oven").slice(0, 1),

        ...products.filter(product => product.category === "Washing Machine").slice(0, 2)

    ];

    return (

        <section className="featured-products">

            <div className="featured-header">

                Featured Products

            </div>

            <div className="featured-grid">

                {

                    featuredProducts.map((product) => (

                        <ProductCard
                            key={`${product.category}-${product.id}`}
                            {...product}
                        />

                    ))

                }

            </div>

        </section>

    );

}

export default FeaturedProducts;