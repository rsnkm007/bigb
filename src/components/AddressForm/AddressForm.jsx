import "./AddressForm.css";

import { useState, useContext } from "react";
import { AddressContext } from "../../context/AddressContext";

function AddressForm() {

    const {

        addresses,

        addAddress,

        updateAddress,

        editingAddressId,

        setEditingAddressId

    } = useContext(AddressContext);

    const editingAddress = addresses.find(

        address => address.id === editingAddressId

    );

    const [form, setForm] = useState({

        fullName: "",
        phone: "",
        house: "",
        city: "",
        state: "",
        pincode: ""

    });

    const handleChange = (e) => {

        if (editingAddress) {

            setEditingAddressId(null);

        }

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const handleEdit = () => {

        if (!editingAddress) return;

        setForm({

            fullName: editingAddress.full_name,

            phone: editingAddress.phone,

            house: editingAddress.address_line1,

            city: editingAddress.city,

            state: editingAddress.state,

            pincode: editingAddress.postal_code

        });

    };

    if (
        editingAddress &&
        form.fullName === ""
    ) {

        handleEdit();

    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (editingAddress) {

            await updateAddress(

                editingAddress.id,

                form

            );

            setEditingAddressId(null);

        }

        else {

            await addAddress(form);

        }

        setForm({

            fullName: "",
            phone: "",
            house: "",
            city: "",
            state: "",
            pincode: ""

        });

    };

    return (

        <form
            className="address-form"
            onSubmit={handleSubmit}
        >

            <input
                name="fullName"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
                required
            />

            <input
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
            />

            <input
                name="house"
                placeholder="House / Street"
                value={form.house}
                onChange={handleChange}
                required
            />

            <input
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                required
            />

            <input
                name="state"
                placeholder="State"
                value={form.state}
                onChange={handleChange}
                required
            />

            <input
                name="pincode"
                placeholder="Pincode"
                value={form.pincode}
                onChange={handleChange}
                required
            />

            <button type="submit">

                {

                    editingAddress

                        ? "Update Address"

                        : "Save Address"

                }

            </button>

        </form>

    );

}

export default AddressForm;