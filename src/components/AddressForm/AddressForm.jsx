import "./AddressForm.css";

import { useState, useContext } from "react";
import { AddressContext } from "../../context/AddressContext";

function AddressForm() {

    const { addAddress } = useContext(AddressContext);

    const [form, setForm] = useState({

        fullName: "",
        phone: "",
        house: "",
        city: "",
        state: "",
        pincode: ""

    });

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        addAddress(form);

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

                Save Address

            </button>

        </form>

    );

}

export default AddressForm;