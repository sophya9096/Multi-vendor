import React from "react";
import DashboardPanel from "./DashboardPanel";
import classes from "./Membership.module.css";
import Pricing from "./Pricing";
import { Button, Divider } from "@material-ui/core";

function Membership() {
    return (
        <div className={classes.membership}>
            <div className={classes.dashboardPanel}>
                <DashboardPanel />
            </div>
            <div className={classes.dashboardResult}>
                <div className={classes.packages}>
                    <div className={classes.package}>
                        <div className={classes.packageTop}>
                            <h3>Basic Package</h3>
                            <h2>
                                <sup> $ </sup> 0
                            </h2>
                            <p>per month</p>
                        </div>
                        <Divider />
                        <div className={classes.packageBottom}>
                            <p>
                                Bids - <span>10</span>{" "}
                            </p>
                            <p>
                                Job Free - <span>9.50%</span>{" "}
                            </p>
                            <Button>Select a Plan</Button>
                        </div>
                    </div>
                    <div className={classes.package}>
                        <div className={classes.packageTop}>
                            <h3>Medium Package</h3>
                            <h2>
                                <sup> $ </sup> 10
                            </h2>
                            <p>per month</p>
                        </div>
                        <Divider />
                        <div className={classes.packageBottom}>
                            <p>
                                Bids - <span>50</span>{" "}
                            </p>
                            <p>
                                Job Free - <span>8.50%</span>{" "}
                            </p>
                            <Button>Select a Plan</Button>
                        </div>
                    </div>
                    <div className={classes.package}>
                        <div className={classes.packageTop}>
                            <h3>Ultimate Package</h3>
                            <h2>
                                <sup> $ </sup> 20
                            </h2>
                            <p>per month</p>
                        </div>
                        <Divider />
                        <div className={classes.packageBottom}>
                            <p>
                                Bids - <span>100</span>{" "}
                            </p>
                            <p>
                                Job Free - <span>7.50%</span>{" "}
                            </p>
                            <Button>Select a Plan</Button>
                        </div>
                    </div>
                    <div className={classes.package}>
                        <div className={classes.packageTop}>
                            <h3>Yearly Package</h3>
                            <h2>
                                <sup> $ </sup> 2000
                            </h2>
                            <p>per month</p>
                        </div>
                        <Divider />
                        <div className={classes.packageBottom}>
                            <p>
                                Bids - <span>4000</span>{" "}
                            </p>
                            <p>
                                Job Free - <span>5.50%</span>{" "}
                            </p>
                            <Button>Select a Plan</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Membership;
