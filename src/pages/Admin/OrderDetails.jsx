import "./OrderDetails.css";

import { useEffect, useState, useCallback } from "react";

import { useParams } from "react-router-dom";

import adminApi from "../../api/adminApi";

import Sidebar from "../../components/Admin/Sidebar";
import Topbar from "../../components/Admin/Topbar";

function OrderDetails() {

  const { id } = useParams();

  const [order, setOrder] = useState(null);

  const [items, setItems] = useState([]);

  const loadOrder = useCallback(async () => {

    try {

      const response = await adminApi.get(

        `/admin/orders/${id}`

      );

      setOrder(response.data.order);

      setItems(response.data.items);

    }

    catch (error) {

      console.error(error);

    }

  }, [id]);
  useEffect(() => {

    loadOrder();

  }, [loadOrder]);



  if (!order) {

    return <h2>Loading...</h2>;

  }

  const updateStatus = async () => {

    try {

      await adminApi.put(

        `/admin/orders/${id}/status`,

        {

          order_status: order.order_status

        }

      );

      alert("Order Status Updated Successfully");

    }

    catch (error) {

      console.error(error);

      alert("Failed to Update Status");

    }

  };

  return (

    <div className="admin-layout">

      <Sidebar />

      <div className="admin-main">

        <Topbar />

        <div className="order-details">

          <h1>

            Order #{order.id}

          </h1>

          <h2>

            Customer Information

          </h2>

          <p>

            <strong>Name:</strong>

            {order.name}

          </p>

          <p>

            <strong>Email:</strong>

            {order.email}

          </p>

          <p>

            <strong>Phone:</strong>

            {order.phone}

          </p>

          <h2>

            Shipping Address

          </h2>

          <p>{order.full_name}</p>

          <p>{order.address_line1}</p>

          <p>{order.address_line2}</p>

          <p>

            {order.city},

            {" "}

            {order.state}

          </p>

          <p>

            {order.postal_code}

          </p>

          <p>

            {order.country}

          </p>

          <h2>

            Products

          </h2>

          {

            items.map(item => (

              <div

                key={item.product_id}

                className="order-item"

              >

                <img

                  src={item.image}

                  alt={item.name}

                  width="80"

                />

                <div>

                  <h3>

                    {item.name}

                  </h3>

                  <p>

                    ₹{item.price}

                    ×

                    {item.quantity}

                  </p>

                </div>

              </div>

            ))

          }

          <h2>

            Total

          </h2>

          <p>

            ₹{order.total_amount}

          </p>

          <h2>

            Payment Status

          </h2>

          <p>

            {order.payment_status}

          </p>

          <h2>

            Order Status

          </h2>

          <select

            value={order.order_status}

            onChange={(e) =>

              setOrder({

                ...order,

                order_status: e.target.value

              })

            }

          >

            <option>Placed</option>

            <option>Confirmed</option>

            <option>Packed</option>

            <option>Shipped</option>

            <option>Delivered</option>

          </select>

          <button

            onClick={updateStatus}

          >

            Update Status

          </button>

        </div>

      </div>

    </div>

  );

}

export default OrderDetails;