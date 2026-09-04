import { useContext } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { NotificationContext } from "../../context/NotificationContext";
import "./Notifications.css";

function Notifications() {

    const {

        notifications,

        markAsRead

    } = useContext(NotificationContext);

    return (

        <>

            <Header />

            <main className="notifications-page">

                <h1>Notifications</h1>

                {

                    notifications.length === 0 ?

                        <p>No notifications available.</p>

                        :

                        notifications.map(notification => (

                            <button

                                key={notification.id}

                                onClick={() => markAsRead(notification.id)}

                                className={`notification-card${notification.read ? "" : " is-unread"}`}

                                type="button"

                            >

                                <h3>{notification.message}</h3>

                                <small>{notification.time}</small>

                            </button>

                        ))

                }

            </main>

            <Footer />

        </>

    );

}

export default Notifications;
