import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";

import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

import productApi from "../api/productApi";

function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(

            auth,

            async (user) => {

                if (!user || user.isAnonymous) {

                    setCart([]);

                    return;

                }

                try {

                    const response = await productApi.get(

                        `/cart/${user.uid}`

                    );

                    setCart(response.data);

                }

                catch (error) {

                    console.error(error);

                }

            }

        );

        return () => unsubscribe();

    }, []);

    // Add Product
    const addToCart = async (product) => {

        const user = auth.currentUser;

        if (!user || user.isAnonymous) {

            alert("Please login with Google to use Cart.");

            return;

        }

        try {

            await productApi.post("/cart", {

                firebase_uid: user.uid,

                product_id: product.id

            });

            const response = await productApi.get(

                `/cart/${user.uid}`

            );

            setCart(response.data);

        }

        catch (error) {

            console.error(error);

        }

    };

    // Remove Product

    const removeFromCart = async (category, id) => {

    const user = auth.currentUser;

    if (!user || user.isAnonymous) {

        return;

    }

    try {

        await productApi.delete(

            `/cart/${user.uid}/${id}`

        );

        const response = await productApi.get(

            `/cart/${user.uid}`

        );

        setCart(response.data);

    }

    catch (error) {

        console.error(error);

    }

};

    // Increase Quantity

    const increaseQuantity = async (category, id) => {

    const user = auth.currentUser;

    if (!user || user.isAnonymous) {

        return;

    }

    const product = cart.find(

        item =>

            item.category === category &&

            item.id === id

    );

    if (!product) return;

    try {

        await productApi.put(

            `/cart/${user.uid}/${id}`,

            {

                quantity: product.quantity + 1

            }

        );

        const response = await productApi.get(

            `/cart/${user.uid}`

        );

        setCart(response.data);

    }

    catch (error) {

        console.error(error);

    }

};

    // Decrease Quantity

    const decreaseQuantity = async (category, id) => {

    const user = auth.currentUser;

    if (!user || user.isAnonymous) {

        return;

    }

    const product = cart.find(

        item =>

            item.category === category &&

            item.id === id

    );

    if (!product) return;

    try {

        if (product.quantity === 1) {

            await productApi.delete(

                `/cart/${user.uid}/${id}`

            );

        }

        else {

            await productApi.put(

                `/cart/${user.uid}/${id}`,

                {

                    quantity: product.quantity - 1

                }

            );

        }

        const response = await productApi.get(

            `/cart/${user.uid}`

        );

        setCart(response.data);

    }

    catch (error) {

        console.error(error);

    }

};

    const clearCart = () => {

        setCart([]);

    };

    // Total Price

    const totalPrice = cart.reduce(

        (total, item) =>

            total + item.offer_price * item.quantity,

        0

    );

    const totalMRP = cart.reduce(

        (total, item) =>

            total + item.regular_price * item.quantity,

        0

    );

    const totalDiscount = totalMRP - totalPrice;

    const deliveryCharge = totalPrice >= 499 ? 0 : 40;

    const finalAmount = totalPrice + deliveryCharge;

    // Total Items

    const totalItems = cart.reduce(

        (total, item) =>

            total + item.quantity,

        0

    );

    return (

        <CartContext.Provider

            value={{

                cart,

                addToCart,

                removeFromCart,

                increaseQuantity,

                decreaseQuantity,

                totalItems,

                totalPrice,

                totalMRP,

                totalDiscount,

                deliveryCharge,

                finalAmount,

                clearCart
            }}

        >

            {children}

        </CartContext.Provider>

    );

}

export default CartProvider;