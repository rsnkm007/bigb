import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import AddressForm from "../../components/AddressForm/AddressForm";
import AddressList from "../../components/AddressList/AddressList";
import "./Address.css";

function Address() {

    return (

        <>

            <Header />

            <main className="address-page">

                <h1>Saved Addresses</h1>

                <AddressForm />

                <AddressList />

            </main>

            <Footer />

        </>

    );

}

export default Address;
