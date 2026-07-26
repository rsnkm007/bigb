import "./AddressList.css";

import { useContext } from "react";

import { AddressContext } from "../../context/AddressContext";

function AddressList() {

    const {

    addresses,

    selectedAddress,

    setSelectedAddress,

    deleteAddress,

    setEditingAddressId

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

                        className={`address-card ${selectedAddress === address.id
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
                                    {address.full_name}
                                </h3>

                                <p>
                                    {address.address_line1}
                                </p>

                                <p>
                                    {address.city},{" "}
                                    {address.state} - {address.postal_code}
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

                        <button
                            className="edit-address"
                            onClick={() => setEditingAddressId(address.id)}
                        >
                            Edit
                        </button>

                    </div>

                ))

            }

        </div>

    );

}

export default AddressList;