import { useState } from "react";
import { AddressContext } from "./AddressContext";

function AddressProvider({ children }) {

    const [addresses, setAddresses] = useState([]);

    const [selectedAddress, setSelectedAddress] = useState(null);

    const addAddress = (address) => {

        const newAddress = {
            id: Date.now(),
            ...address
        };

        setAddresses(prev => [...prev, newAddress]);

        if (!selectedAddress) {
            setSelectedAddress(newAddress.id);
        }

    };

    const deleteAddress = (id) => {

        setAddresses(prev =>
            prev.filter(address => address.id !== id)
        );

        if (selectedAddress === id) {
            setSelectedAddress(null);
        }

    };

    return (

        <AddressContext.Provider
            value={{

                addresses,

                selectedAddress,

                setSelectedAddress,

                addAddress,

                deleteAddress

            }}
        >

            {children}

        </AddressContext.Provider>

    );

}

export default AddressProvider;