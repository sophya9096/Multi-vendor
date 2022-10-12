import React from "react";
import classes from "./Featured.module.css";
import DashboardPanel from "./DashboardPanel";
import CompaniesList from "../components/CompaniesList";
import CompaniesFeatured from "../components/FeatureCompany";

function FeatureProfile({ companiesList }) {
    return (
        <div className={classes.featured}>
            <div className={classes.dashboardPanel}>
                <DashboardPanel />
            </div>
            <div className={classes.dashboardResult}>{companiesList ? <CompaniesList /> : <CompaniesFeatured />}</div>
        </div>
    );
}

export default FeatureProfile;
