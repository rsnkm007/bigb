import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import AddressForm from "../../components/AddressForm/AddressForm";
import AddressList from "../../components/AddressList/AddressList";

function Address() {

    return (

        <>

            <Header />

            <div
                style={{
                    marginTop: "150px",
                    padding: "20px"
                }}
            >

                <h1>Saved Addresses</h1>

                <AddressForm />

                <AddressList />

            </div>

            <Footer />

        </>

    );

}

export default Address;