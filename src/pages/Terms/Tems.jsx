import "./Terms.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Terms() {

    return (

        <>
            <Header />

            <main className="terms-page">

            <div className="terms-container">

                <h1>Terms & Conditions</h1>

                <p className="last-updated">

                    Last Updated: July 2026

                </p>

                <section className="terms-section">

                    <h2>1. Acceptance of Terms</h2>

                    <p>

                        By accessing or using BigB, you agree to comply with
                        these Terms and Conditions. If you do not agree with
                        any part of these terms, please discontinue using our
                        services.

                    </p>

                </section>

                <section className="terms-section">

                    <h2>2. User Accounts</h2>

                    <p>

                        You are responsible for maintaining the confidentiality
                        of your account credentials and for all activities that
                        occur under your account.

                    </p>

                </section>

                <section className="terms-section">

                    <h2>3. Orders & Payments</h2>

                    <p>

                        All orders are subject to product availability and
                        payment confirmation. BigB reserves the right to cancel
                        or refuse any order if fraudulent or suspicious activity
                        is detected.

                    </p>

                </section>

                <section className="terms-section">

                    <h2>4. Pricing</h2>

                    <p>

                        Product prices and promotional offers may change
                        without prior notice. We strive to ensure pricing
                        accuracy but reserve the right to correct any pricing
                        errors.

                    </p>

                </section>

                <section className="terms-section">

                    <h2>5. Returns & Refunds</h2>

                    <p>

                        Returns and refunds are governed by our Refund &
                        Cancellation Policy. Please review that policy before
                        initiating a return request.

                    </p>

                </section>

                <section className="terms-section">

                    <h2>6. Intellectual Property</h2>

                    <p>

                        All logos, trademarks, images, designs, and content on
                        BigB are the property of BigB and may not be copied,
                        reproduced, or distributed without written permission.

                    </p>

                </section>

                <section className="terms-section">

                    <h2>7. Limitation of Liability</h2>

                    <p>

                        BigB shall not be liable for any indirect, incidental,
                        or consequential damages arising from the use of our
                        website or services.

                    </p>

                </section>

                <section className="terms-section">

                    <h2>8. Contact Us</h2>

                    <p>

                        For any questions regarding these Terms & Conditions,
                        please contact our customer support team.

                    </p>

                </section>

            </div>

            </main>

            <Footer />
        </>

    );

}

export default Terms;
