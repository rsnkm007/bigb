import "./AdminDashboard.css";

import { useEffect, useState, useCallback } from "react";

import adminApi from "../../api/adminApi";

import Sidebar from "../../components/Admin/Sidebar";
import Topbar from "../../components/Admin/Topbar";
import DashboardCards from "../../components/Admin/DashboardCards";

function AdminDashboard() {

    const [stats, setStats] = useState({});

    const loadStats = useCallback(async () => {

        try {

            const response = await adminApi.get("/admin/dashboard/stats");
            console.log(response.data);
            setStats(response.data);

        }

        catch (error) {

            console.error(error);

        }

    }, []);

    useEffect(() => {

        loadStats();

    }, [loadStats]);

    return (

        <div className="admin-layout">

            <Sidebar />

            <div className="admin-main">

                <Topbar />

                <DashboardCards stats={stats} />

            </div>

        </div>

    );

}

export default AdminDashboard;