import "./Careers.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Careers() {

    const jobs = [

        {
            id: 1,
            title: "Frontend Developer",
            location: "Bengaluru, India",
            type: "Full Time"
        },

        {
            id: 2,
            title: "Backend Developer",
            location: "Remote",
            type: "Full Time"
        },

        {
            id: 3,
            title: "UI / UX Designer",
            location: "Hyderabad, India",
            type: "Internship"
        },

        {
            id: 4,
            title: "Customer Support Executive",
            location: "Remote",
            type: "Full Time"
        }

    ];

    return (

        <>
            <Header />

            <main className="careers-page">

            <div className="careers-container">

                <h1>Careers at BigB</h1>

                <p className="careers-subtitle">

                    Join our passionate team and help us build the future of
                    online shopping. We believe in innovation, collaboration,
                    and continuous learning.

                </p>

                <div className="job-list">

                    {

                        jobs.map(job => (

                            <div
                                className="job-card"
                                key={job.id}
                            >

                                <h2>{job.title}</h2>

                                <p>

                                    <strong>Location:</strong> {job.location}

                                </p>

                                <p>

                                    <strong>Employment:</strong> {job.type}

                                </p>

                                <button className="apply-btn">

                                    Apply Now

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

export default Careers;
