import "./Team.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Team() {

    const teamMembers = [

        {
            id: 1,
            name: "Nanda Kumar",
            role: "Founder & Full Stack Developer",
            description:
                "Passionate about building modern and user-friendly e-commerce applications."
        },

        {
            id: 2,
            name: "Jane Smith",
            role: "UI / UX Designer",
            description:
                "Designs beautiful, intuitive, and accessible user experiences."
        },

        {
            id: 3,
            name: "Michael Johnson",
            role: "Backend Developer",
            description:
                "Develops secure and scalable backend services for BigB."
        },

        {
            id: 4,
            name: "Sophia Williams",
            role: "Customer Success Manager",
            description:
                "Ensures every customer has a smooth shopping experience."
        }

    ];

    return (

        <>
            <Header />

            <main className="team-page">

            <div className="team-container">

                <h1>Meet Our Team</h1>

                <p className="team-subtitle">

                    Behind BigB is a passionate team committed to providing the
                    best online shopping experience.

                </p>

                <div className="team-grid">

                    {

                        teamMembers.map(member => (

                            <div
                                className="team-card"
                                key={member.id}
                            >

                                <div className="team-avatar">

                                    {member.name.charAt(0)}

                                </div>

                                <h2>{member.name}</h2>

                                <h4>{member.role}</h4>

                                <p>{member.description}</p>

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

export default Team;
