import React from "react";
import classes from "./Messages.module.css";
import DashboardPanel from "./DashboardPanel";
import Chat from "../components/Chat";

function Messages() {
    return (
        <div className={classes.messages}>
            <div className={classes.dashboardPanel}>
                <DashboardPanel />
            </div>
            <div className={classes.dashboardResult}>
                <Chat />
            </div>
        </div>
    );
}

export default Messages;
