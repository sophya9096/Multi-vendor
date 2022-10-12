import React from "react";
import DashboardPanel from "./DashboardPanel";
import classes from "./Company.module.css";
import Edit from "../components/EditProfile";
import EditImage from "../components/EditImage";
import EditPassword from "../components/EditPassword";

function EditProfile() {
    return (
        <div className={classes.company}>
            <div className={classes.dashboardPanel}>
                <DashboardPanel />
            </div>
            <div className={classes.dashboardResult}>
                <Edit />
                <EditImage />
                <EditPassword />
            </div>
        </div>
    );
}

export default EditProfile;
