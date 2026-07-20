import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import "./HelpSupport.css";

function HelpSupport() {

    return (

        <>

            <Header />

            <div className="help-support-page">

                <h1>Help & Support</h1>

                <div className="support-card">

                    <h3>📞 Contact Us</h3>

                    <p><strong>Phone:</strong> +91 98765 43210</p>

                    <p><strong>Email:</strong> support@bigb.com</p>

                    <p><strong>Working Hours:</strong> Monday - Saturday (9:00 AM - 6:00 PM)</p>

                </div>

                <div className="support-card">

                    <h3>❓ Frequently Asked Questions</h3>

                    <p><strong>How do I track my order?</strong></p>

                    <p>Go to <b>My Orders</b> to check your order status.</p>

                    <br />

                    <p><strong>How can I cancel an order?</strong></p>

                    <p>Orders can be cancelled before they are shipped.</p>

                    <br />

                    <p><strong>How do I change my address?</strong></p>

                    <p>Go to <b>Saved Addresses</b> from your account.</p>

                </div>

                <div className="support-card">

                    <h3>💬 Need More Help?</h3>

                    <p>
                        If your issue is not resolved, please contact our customer
                        support team. We're happy to help you.
                    </p>

                </div>

            </div>

            <Footer />

        </>

    );

}

export default HelpSupport;