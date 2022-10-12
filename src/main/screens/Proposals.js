import React from "react";
import classes from "./Proposals.module.css";
import DashboardPanel from "./DashboardPanel";
import YourProposals from "../components/YourProposals";
import OtherProposals from "../components/OtherProposals";

export default function Proposals({ yourProposals }) {
    return (
        <div className={classes.proposals}>
            <div className={classes.dashboardPanel}>
                <DashboardPanel />
            </div>
            <div className={classes.dashboardResult}>{yourProposals ? <YourProposals /> : <OtherProposals />} </div>
        </div>
    );
}
