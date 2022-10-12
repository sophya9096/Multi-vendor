import { Button } from "@material-ui/core";
import React, { useState } from "react";
import classes from "./Feature.module.css";

function FeatureJob() {
    const [active, setActive] = useState("5 days");
    const btn1 = "5 days";
    const btn2 = "10 days";
    const btn3 = "15 days";
    const btn4 = "1 month";

    const btn5 = "$15";
    const btn6 = "$35";
    const btn7 = "$60";
    const btn8 = "$35";

    const activeStyles = {
        fontSize: "medium",
        color: "white",
        background: "#00c4cf",
    };

    return (
        <div className={classes.feature}>
            <h3>Feature Your Companies</h3>
            <select className={classes.select}>
                <option>Engro Co.</option>
                <option>Whitz Co.</option>
                <option>Saphire CO.</option>
            </select>

            <p> Days for the ad to run.</p>
            <div className={classes.btns}>
                <Button
                    style={(active === btn1 && activeStyles) || null}
                    onClick={(e) => {
                        setActive(e.target.innerText);
                    }}
                    variant="contained"
                >
                    {btn1}
                </Button>
                <Button
                    style={(active === btn2 && activeStyles) || null}
                    onClick={(e) => {
                        setActive(e.target.innerText);
                    }}
                    variant="contained"
                >
                    {btn2}
                </Button>
                <Button
                    style={(active === btn3 && activeStyles) || null}
                    onClick={(e) => {
                        setActive(e.target.innerText);
                    }}
                    variant="contained"
                >
                    {btn3}
                </Button>
                <Button
                    style={(active === btn4 && activeStyles) || null}
                    onClick={(e) => {
                        setActive(e.target.innerText);
                    }}
                    variant="contained"
                >
                    {btn4}
                </Button>
            </div>

            <p> Budget depending on the days you have choosen.</p>

            <div className={classes.btns}>
                <Button disabled style={(active === btn1 && activeStyles) || null} variant="contained">
                    {btn5}
                </Button>
                <Button disabled style={(active === btn2 && activeStyles) || null} variant="contained">
                    {btn6}
                </Button>
                <Button disabled style={(active === btn3 && activeStyles) || null} variant="contained">
                    {btn7}
                </Button>
                <Button disabled style={(active === btn4 && activeStyles) || null} variant="contained">
                    {btn8}
                </Button>
            </div>
            <Button className={classes.submit}>Proceed to Checkout</Button>
        </div>
    );
}

export default FeatureJob;
