import "./Blog.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Blog() {

    const blogs = [

        {
            id: 1,
            title: "Top 10 Smartphones to Buy in 2026",
            date: "July 20, 2026",
            category: "Electronics",
            description:
                "Explore the latest smartphones with cutting-edge features, powerful performance, and excellent cameras."
        },

        {
            id: 2,
            title: "Fashion Trends You Shouldn't Miss",
            date: "July 15, 2026",
            category: "Fashion",
            description:
                "Discover the newest clothing styles, accessories, and seasonal fashion trends to upgrade your wardrobe."
        },

        {
            id: 3,
            title: "How to Choose the Perfect Laptop",
            date: "July 10, 2026",
            category: "Technology",
            description:
                "A complete guide to selecting the best laptop based on your needs, whether you're a student, gamer, or professional."
        },

        {
            id: 4,
            title: "BigB Shopping Tips to Save More",
            date: "July 5, 2026",
            category: "Shopping",
            description:
                "Learn how to grab the best deals, use discounts effectively, and make smarter shopping decisions on BigB."
        }

    ];

    return (

        <>
            <Header />

            <main className="blog-page">

            <div className="blog-container">

                <h1>BigB Blog</h1>

                <p className="blog-subtitle">

                    Stay updated with the latest shopping tips, technology news,
                    fashion trends, and product recommendations from BigB.

                </p>

                <div className="blog-grid">

                    {

                        blogs.map(blog => (

                            <div
                                className="blog-card"
                                key={blog.id}
                            >

                                <span className="blog-category">

                                    {blog.category}

                                </span>

                                <h2>{blog.title}</h2>

                                <p className="blog-date">

                                    {blog.date}

                                </p>

                                <p className="blog-description">

                                    {blog.description}

                                </p>

                                <button className="read-more-btn">

                                    Read More

                                </button>

                            </div>

                        ))

                    }

                </div>

            </div>

            </main>

            <Footer />
        </>

    );

}

export default Blog;
