import "./Users.css";

import { useEffect, useState } from "react";

import Sidebar from "../../components/Admin/Sidebar";
import Topbar from "../../components/Admin/Topbar";

import adminApi from "../../api/adminApi";

function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        loadUsers();

    }, []);

    const loadUsers = async () => {

        try {

            const response = await adminApi.get("/admin/users");

            setUsers(response.data);

        }

        catch (error) {

            console.error(error);

        }

    };

    return (

        <div className="admin-layout">

            <Sidebar />

            <div className="admin-main">

                <Topbar />

                <div className="users-page">

                    <h1>Users</h1>

                    <table>

                        <thead>

                            <tr>

                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Provider</th>
                                <th>Joined</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                users.map(user => (

                                    <tr key={user.id}>

                                        <td>{user.id}</td>

                                        <td>{user.name}</td>

                                        <td>{user.email}</td>

                                        <td>{user.provider}</td>

                                        <td>

                                            {new Date(user.created_at).toLocaleDateString()}

                                        </td>

                                    </tr>

                                ))

                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}

export default Users;