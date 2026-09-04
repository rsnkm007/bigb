import "./About.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function About() {

    return (

        <>
            <Header />

            <main className="about-page">

            <div className="about-container">

                <h1>About BigB</h1>

                <p>

                    BigB is a modern e-commerce platform designed to provide
                    customers with a seamless and enjoyable online shopping
                    experience. Our mission is to bring quality products,
                    competitive prices, and fast delivery together in one place.

                </p>

                <p>

                    We offer a wide range of products including electronics,
                    fashion, footwear, home appliances, accessories, and much
                    more. Every product is carefully selected to ensure quality
                    and customer satisfaction.

                </p>

                <p>

                    At BigB, we believe shopping should be simple, secure, and
                    convenient. With features like wishlist, secure payments,
                    order tracking, and personalized recommendations, we aim to
                    make every purchase enjoyable.

                </p>

                <p>

                    Thank you for choosing BigB. We look forward to serving you
                    and becoming your trusted shopping destination.

                </p>

            </div>

            </main>

            <Footer />
        </>

    );

}

export default About;
