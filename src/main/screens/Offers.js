import React from "react";
import classes from "./Proposals.module.css";
import DashboardPanel from "./DashboardPanel";
import CLientOffers from "../components/Offers";

export default function Offers() {
    return (
        <div className={classes.proposals}>
            <div className={classes.dashboardPanel}>
                <DashboardPanel />
            </div>
            <div className={classes.dashboardResult}>{<CLientOffers />} </div>
        </div>
    );
}
