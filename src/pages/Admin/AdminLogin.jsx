import "./AdminLogin.css";

import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import adminApi from "../../api/adminApi";

import { AdminContext } from "../../context/AdminContext";

function AdminLogin() {

    const navigate = useNavigate();

    const { setAdmin } = useContext(AdminContext);

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    const login = async () => {

        try {

            const response = await adminApi.post(

                "/admin/login",

                {

                    username,

                    password

                }

            );

            setAdmin(response.data.admin);

            navigate("/admin/dashboard");

        }

        catch {

            alert("Invalid Username or Password");

        }

    };

    return (

        <div className="admin-login">

            <h1>Admin Login</h1>

            <input

                type="text"

                placeholder="Username"

                value={username}

                onChange={(e) =>

                    setUsername(e.target.value)

                }

            />

            <input

                type="password"

                placeholder="Password"

                value={password}

                onChange={(e) =>

                    setPassword(e.target.value)

                }

            />

            <button

                onClick={login}

            >

                Login

            </button>

        </div>

    );

}

export default AdminLogin;