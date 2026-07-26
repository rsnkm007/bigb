import { useState, useEffect, useCallback } from "react";
import { OrderContext } from "./OrderContext";

import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

import orderApi from "../api/orderApi";

function OrderProvider({ children }) {

    const [orders, setOrders] = useState([]);

    const loadOrders = useCallback(async () => {

    const user = auth.currentUser;

    if (!user || user.isAnonymous) {

        setOrders([]);

        return;

    }

    try {

        const response = await orderApi.get(

            `/orders/${user.uid}`

        );

        setOrders(response.data);

    }

    catch (error) {

        console.error(error);

    }

}, []);
    

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(

            auth,

            async (user) => {

                if (!user || user.isAnonymous) {

                    setOrders([]);

                    return;

                }

                await loadOrders();

            }

        );

        return () => unsubscribe();

    }, []);

    return (

        <OrderContext.Provider

            value={{

                orders,

                loadOrders

            }}

        >

            {children}

        </OrderContext.Provider>

    );

}

export default OrderProvider;