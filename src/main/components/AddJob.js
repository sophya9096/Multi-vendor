import { Button, ButtonGroup } from "@material-ui/core";
import React from "react";
import classes from "./AddJob.module.css";
import DashboardPanel from "../screens/DashboardPanel";

function AddJob() {
    return (
        <div className={classes.addJob}>
            <div className={classes.dashboardPanel}>
                <DashboardPanel />
            </div>
            <div className={classes.addJobResult}>
                <h3>Add Job</h3>
                <div className={classes.addInput}>
                    <p>Title</p>
                    <input className={classes.input} />
                    <div className={classes.subInput}>
                        <div>
                            <p>Category</p>
                            <input className={classes.input} />
                        </div>
                        <div>
                            <p>Sub Category</p>
                            <input className={classes.input} />
                        </div>
                    </div>
                    <div className={classes.subInput}>
                        <div>
                            <p>Country</p>
                            <input className={classes.input} />
                        </div>
                        <div>
                            <p>Budget</p>
                            <input className={classes.input} />
                        </div>
                    </div>
                </div>
                <p>How would you like to pay </p>
                <ButtonGroup className={classes.group}>
                    <Button>BY Hour</Button>
                    <Button>Fixed Cost</Button>
                </ButtonGroup>
                <div className={classes.addJobDiscription}>
                    <p>Hours Per Week</p>
                    <span>40+</span>
                    <span>30-39</span>
                    <span>20-29</span>
                    <span>10-19</span>
                    <span>1-9</span>
                </div>

                <div className={classes.addJobDiscription}>
                    <p>Desired Experience Level</p>
                    <span>$ Entry Level</span>
                    <span>$$ Intermediate</span>
                    <span>$$$ Expert</span>
                </div>

                <div className={classes.addJobDiscription}>
                    <p>Job Duration</p>
                    <span>Not Sure</span>
                    <span>6+ Months</span>
                    <span>3 to 6 Months</span>
                    <span>1 to 3 Months</span>
                    <span>Less than 1 Month</span>
                    <span>Less than 1 Week</span>
                </div>
                <p className={classes.textareaTitle}>Description</p>
                <textarea placeholder={"Provide a more detail discription of your job to get better proposals"} />
                <Button className={classes.submit}>Submit</Button>
            </div>
        </div>
    );
}

export default AddJob;
