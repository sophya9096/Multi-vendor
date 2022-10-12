import React from "react";
import classes from "./Featured.module.css";
import DashboardPanel from "./DashboardPanel";
import ProfileList from "../components/ProfileList";
import ProfileFeatured from "../components/FeatureProfile";

function FeatureProfile({ profileList }) {
    return (
        <div className={classes.featured}>
            <div className={classes.dashboardPanel}>
                <DashboardPanel />
            </div>
            <div className={classes.dashboardResult}>{profileList ? <ProfileList /> : <ProfileFeatured />}</div>
        </div>
    );
}

export default FeatureProfile;
