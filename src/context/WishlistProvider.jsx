import { useState, useEffect } from "react";
import { WishlistContext } from "./WishlistContext";

import { auth } from "../firebase/firebase";
import productApi from "../api/productApi";
import { onAuthStateChanged } from "firebase/auth";

function WishlistProvider({ children }) {

    const [wishlist, setWishlist] = useState([]);

    // Add product
    const addToWishlist = async (product) => {

    const user = auth.currentUser;

    if (!user || user.isAnonymous) {

        alert("Please login with Google to use Wishlist.");

        return;

    }

    try {

        await productApi.post("/wishlist", {

            firebase_uid: user.uid,

            product_id: product.id

        });

        setWishlist(previousWishlist => [

            ...previousWishlist,

            product

        ]);

    }

    catch (error) {

        console.error(error);

    }

};

    // Remove product
    const removeFromWishlist = async (category, id) => {

    const user = auth.currentUser;

    if (!user || user.isAnonymous) {

        return;

    }

    try {

        await productApi.delete(

            `/wishlist/${user.uid}/${id}`

        );

        setWishlist(previousWishlist =>

            previousWishlist.filter(

                item =>

                    !(

                        item.category === category &&

                        item.id === id

                    )

            )

        );

    }

    catch (error) {

        console.error(error);

    }

};

    // Check if product exists
    const isInWishlist = (category, id) => {

        return wishlist.some(

            item =>

                item.category === category &&
                item.id === id

        );

    };

    useEffect(() => {

    const unsubscribe = onAuthStateChanged(

        auth,

        async (user) => {

            if (!user || user.isAnonymous) {

                setWishlist([]);

                return;

            }

            try {

                const response = await productApi.get(

                    `/wishlist/${user.uid}`

                );

                setWishlist(response.data);

            }

            catch (error) {

                console.error(error);

            }

        }

    );

    return () => unsubscribe();

}, []);

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