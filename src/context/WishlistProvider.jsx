import { useState } from "react";
import { WishlistContext } from "./WishlistContext";

function WishlistProvider({ children }) {

    const [wishlist, setWishlist] = useState([]);

    // Add product
    const addToWishlist = (product) => {

        const alreadyExists = wishlist.find(
            item =>
                item.category === product.category &&
                item.id === product.id
        );

        if (!alreadyExists) {
            setWishlist([...wishlist, product]);
        }

    };

    // Remove product
    const removeFromWishlist = (category, id) => {

        setWishlist(

            wishlist.filter(

                item =>

                    !(

                        item.category === category &&
                        item.id === id

                    )

            )

        );

    };

    // Check if product exists
    const isInWishlist = (category, id) => {

        return wishlist.some(

            item =>

                item.category === category &&
                item.id === id

        );

    };

    return (

        <WishlistContext.Provider

            value={{

                wishlist,

                addToWishlist,

                removeFromWishlist,

                isInWishlist

            }}

        >

            {children}

        </WishlistContext.Provider>

    );

}

export default WishlistProvider;