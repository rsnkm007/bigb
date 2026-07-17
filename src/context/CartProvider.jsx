import { useState } from "react";
import { CartContext } from "./CartContext";

function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    // Add Product
    const addToCart = (product) => {

        const existingProduct = cart.find(

            item =>

                item.category === product.category &&
                item.id === product.id

        );

        if (existingProduct) {

            setCart(

                cart.map(item =>

                    item.category === product.category &&
                    item.id === product.id

                        ?

                        {

                            ...item,

                            quantity: item.quantity + 1

                        }

                        :

                        item

                )

            );

        }

        else {

            setCart(

                [

                    ...cart,

                    {

                        ...product,

                        quantity: 1

                    }

                ]

            );

        }

    };

    // Remove Product

    const removeFromCart = (category, id) => {

        setCart(

            cart.filter(

                item =>

                    !(

                        item.category === category &&
                        item.id === id

                    )

            )

        );

    };

    // Increase Quantity

    const increaseQuantity = (category, id) => {

        setCart(

            cart.map(

                item =>

                    item.category === category &&
                    item.id === id

                        ?

                        {

                            ...item,

                            quantity: item.quantity + 1

                        }

                        :

                        item

            )

        );

    };

    // Decrease Quantity

    const decreaseQuantity = (category, id) => {

        setCart(

            cart.map(

                item =>

                    item.category === category &&
                    item.id === id

                        ?

                        {

                            ...item,

                            quantity: item.quantity - 1

                        }

                        :

                        item

            )

            .filter(

                item => item.quantity > 0

            )

        );

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

    finalAmount

}}

        >

            {children}

        </CartContext.Provider>

    );

}

export default CartProvider;