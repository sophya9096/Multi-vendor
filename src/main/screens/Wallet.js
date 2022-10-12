import React from "react";
import classes from "./Wallet.module.css";
import DashboardPanel from "./DashboardPanel";
import Deposits from "../components/Deposits";
import Withdrawls from "../components/Withdrawls";

function Wallet({ deposits }) {
    return (
        <div className={classes.wallet}>
            <div className={classes.dashboardPanel}>
                <DashboardPanel />
            </div>
            <div className={classes.dashboardResult}>{deposits ? <Deposits /> : <Withdrawls />} </div>
        </div>
    );
}

export default Wallet;
