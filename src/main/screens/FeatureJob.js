import React from "react";
import classes from "./Featured.module.css";
import DashboardPanel from "./DashboardPanel";
import JobList from "../components/JobList";
import JobFeatured from "../components/FeatureJob";

function FeatureJob({ jobList }) {
    return (
        <div className={classes.featured}>
            <div className={classes.dashboardPanel}>
                <DashboardPanel />
            </div>
            <div className={classes.dashboardResult}>{jobList ? <JobList /> : <JobFeatured />}</div>
        </div>
    );
}

export default FeatureJob;
