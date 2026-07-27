import "./DashboardCards.css";

function DashboardCards({ stats }) {

    const cards = [

        {
            title: "Products",
            value: stats.totalProducts || 0
        },

        {
            title: "Orders",
            value: stats.totalOrders || 0
        },

        {
            title: "Users",
            value: stats.totalUsers || 0
        },

        {
            title: "Revenue",
            value: `₹${stats.totalRevenue || 0}`
        },

        {
            title: "Pending Orders",
            value: stats.pendingOrders || 0
        },

        {
            title: "Delivered Orders",
            value: stats.deliveredOrders || 0
        }

    ];

    return (

        <div className="cards">

            {

                cards.map(card => (

                    <div
                        className="card"
                        key={card.title}
                    >

                        <h3>

                            {card.title}

                        </h3>

                        <h1>

                            {card.value}

                        </h1>

                    </div>

                ))

            }

        </div>

    );

}

export default DashboardCards;