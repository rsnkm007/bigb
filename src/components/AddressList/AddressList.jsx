import "./AddressList.css";

import { useContext } from "react";

import { AddressContext } from "../../context/AddressContext";

function AddressList() {

    const {

        addresses,

        selectedAddress,

        setSelectedAddress,

        deleteAddress

    } = useContext(AddressContext);

    if (addresses.length === 0) {

        return (

            <p className="no-address">

                No saved addresses yet.

            </p>

        );

    }

    return (

        <div className="address-list">

            {

                addresses.map(address => (

                    <div

                        key={address.id}

                        className={`address-card ${
                            selectedAddress === address.id
                                ? "selected"
                                : ""
                        }`}

                    >

                        <label>

                            <input

                                type="radio"

                                checked={selectedAddress === address.id}

                                onChange={() =>

                                    setSelectedAddress(address.id)

                                }

                            />

                            <div>

                                <h3>

                                    {address.fullName}

                                </h3>

                                <p>

                                    {address.house}

                                </p>

                                <p>

                                    {address.city},

                                    {" "}

                                    {address.state}

                                    {" - "}

                                    {address.pincode}

                                </p>

                                <p>

                                    {address.phone}

                                </p>

                            </div>

                        </label>

                        <button

                            className="delete-address"

                            onClick={() =>

                                deleteAddress(address.id)

                            }

                        >

                            Delete

                        </button>

                    </div>

                ))

            }

        </div>

    );

}

export default AddressList;