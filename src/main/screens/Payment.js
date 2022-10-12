import { Button } from "@material-ui/core";
import React, { useState } from "react";
import DashboardPanel from "./DashboardPanel";
import classes from "./Payment.module.css";

function Payment() {
    const [active, setActive] = useState("Paypal");
    const btn1 = "Paypal";
    const btn2 = "Skrill";
    const btn3 = "Brain Tree";
    const btn4 = "Mobile Money";

    const activeStyles = {
        fontSize: "medium",
        color: "white",
        background: "#00c4cf",
    };

    return (
        <div className={classes.payment}>
            <div className={classes.dashboardPanel}>
                <DashboardPanel />
            </div>
            <div className={classes.paymentMethods}>
                <h3>Put your preffered Payment Method</h3>
                <p> Payment Methods</p>
                <div className={classes.btns}>
                    <Button
                        style={(active === btn1 && activeStyles) || null}
                        onClick={(e) => {
                            setActive(e.target.innerText);
                        }}
                        variant="contained"
                    >
                        Paypal
                    </Button>
                    <Button
                        style={(active === btn2 && activeStyles) || null}
                        onClick={(e) => {
                            setActive(e.target.innerText);
                        }}
                        variant="contained"
                    >
                        Skrill
                    </Button>
                    <Button
                        style={(active === btn3 && activeStyles) || null}
                        onClick={(e) => {
                            setActive(e.target.innerText);
                        }}
                        variant="contained"
                    >
                        Brain Tree
                    </Button>
                    <Button
                        style={(active === btn4 && activeStyles) || null}
                        onClick={(e) => {
                            setActive(e.target.innerText);
                        }}
                        variant="contained"
                    >
                        Mobile Money
                    </Button>
                </div>
                <label>Associated Email</label>
                <input type="email" placeholder={"Associated Email"} />
                <Button className={classes.submit}>Submit</Button>
            </div>
        </div>
    );
}

export default Payment;
