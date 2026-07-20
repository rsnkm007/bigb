import { useContext } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { NotificationContext } from "../../context/NotificationContext";

function Notifications() {

    const {

        notifications,

        markAsRead

    } = useContext(NotificationContext);

    return (

        <>

            <Header />

            <div style={{ marginTop: "150px", padding: "20px" }}>

                <h1>Notifications</h1>

                {

                    notifications.length === 0 ?

                        <p>No notifications available.</p>

                        :

                        notifications.map(notification => (

                            <div

                                key={notification.id}

                                onClick={() => markAsRead(notification.id)}

                                style={{

                                    border: "1px solid lightgray",

                                    marginBottom: "10px",

                                    padding: "15px",

                                    cursor: "pointer"

                                }}

                            >

                                <h3>{notification.message}</h3>

                                <small>{notification.time}</small>

                            </div>

                        ))

                }

            </div>

            <Footer />

        </>

    );

}

export default Notifications;