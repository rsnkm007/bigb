import { useState } from "react";

import { AdminContext } from "./AdminContext";

function AdminProvider({ children }) {

    const [admin, setAdmin] = useState(null);

    return (

        <AdminContext.Provider

            value={{

                admin,

                setAdmin

            }}

        >

            {children}

        </AdminContext.Provider>

    );

}

export default AdminProvider;