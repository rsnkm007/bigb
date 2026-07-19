import { useState } from "react";
import { OrderContext } from "./OrderContext";

function OrderProvider({ children }) {

    const [orders, setOrders] = useState([]);

    const addOrder = (order) => {

        setOrders(previous => [

            order,

            ...previous

        ]);

    };

    return (

        <OrderContext.Provider

            value={{

                orders,

                addOrder

            }}

        >

            {children}

        </OrderContext.Provider>

    );

}

export default OrderProvider;