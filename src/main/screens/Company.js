import React from "react";
import DashboardPanel from "./DashboardPanel";
import classes from "./Company.module.css";
import CompanyList from "../components/CompanyList";
import AddCompany from "../components/AddCompany";

function Company({ addCompany }) {
    return (
        <div className={classes.company}>
            <div className={classes.dashboardPanel}>
                <DashboardPanel />
            </div>
            <div className={classes.dashboardResult}>{addCompany ? <AddCompany /> : <CompanyList />} </div>
        </div>
    );
}

export default Company;
