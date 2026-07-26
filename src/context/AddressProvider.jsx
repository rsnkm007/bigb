import { useState, useEffect } from "react";
import { AddressContext } from "./AddressContext";

import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

import productApi from "../api/productApi";

function AddressProvider({ children }) {

    const [addresses, setAddresses] = useState([]);

    const [selectedAddress, setSelectedAddress] = useState(null);

    const [editingAddressId, setEditingAddressId] = useState(null);

    const loadAddresses = async () => {

        const user = auth.currentUser;

        if (!user || user.isAnonymous) return;

        try {

            const response = await productApi.get(
                `/address/${user.uid}`
            );

            setAddresses(response.data);

            const defaultAddress = response.data.find(
                address => address.is_default
            );

            if (defaultAddress) {

                setSelectedAddress(defaultAddress.id);

            }

            else if (response.data.length > 0) {

                setSelectedAddress(response.data[0].id);

            }

            else {

                setSelectedAddress(null);

            }

        }

        catch (error) {

            console.error(error);

        }

    };

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(

            auth,

            async (user) => {

                if (!user || user.isAnonymous) {

                    setAddresses([]);
                    setSelectedAddress(null);

                    return;

                }

                await loadAddresses();

            }

        );

        return () => unsubscribe();

    }, []);

    const addAddress = async (address) => {

        const user = auth.currentUser;

        if (!user || user.isAnonymous) {

            alert("Please login first.");

            return;

        }

        try {

            await productApi.post("/address", {

                firebase_uid: user.uid,

                full_name: address.fullName,

                phone: address.phone,

                address_line1: address.house,

                address_line2: "",

                city: address.city,

                state: address.state,

                postal_code: address.pincode,

                country: "India",

                is_default: false

            });

            await loadAddresses();

        }

        catch (error) {

            console.error(error);

        }

    };

    const updateAddress = async (id, address) => {

        try {

            await productApi.put(

                `/address/${id}`,

                {

                    full_name: address.fullName,

                    phone: address.phone,

                    address_line1: address.house,

                    address_line2: "",

                    city: address.city,

                    state: address.state,

                    postal_code: address.pincode,

                    country: "India",

                    is_default: false

                }

            );

            await loadAddresses();

        }

        catch (error) {

            console.error(error);

        }

    };

    const deleteAddress = async (id) => {

        try {

            await productApi.delete(

                `/address/${id}`

            );

            await loadAddresses();

        }

        catch (error) {

            console.error(error);

        }

    };

    return (

        <AddressContext.Provider

            value={{

                addresses,

                selectedAddress,

                setSelectedAddress,

                editingAddressId,

                setEditingAddressId,

                addAddress,

                updateAddress,

                deleteAddress,

                loadAddresses, 
                
            }}

        >

            {children}

        </AddressContext.Provider>

    );

}

export default AddressProvider;