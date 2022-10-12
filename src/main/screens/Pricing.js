import { Button, Divider } from "@material-ui/core";
import React from "react";
import classes from "./Pricing.module.css";

function Pricing() {
    return (
        <div className={classes.pricing}>
            <h1>Pricing For Freelancers</h1>
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
                            Job Free - <span>9.5%</span>{" "}
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
                            Job Free - <span>8.5%</span>{" "}
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
                            Job Free - <span>7.5%</span>{" "}
                        </p>
                        <Button>Select a Plan</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
