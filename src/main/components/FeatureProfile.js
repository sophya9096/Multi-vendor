import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Feature.module.css";

function FeatureJob() {
    const [active, setActive] = useState("5 days");
    const [active2, setActive2] = useState("$15");
    const btn1 = "5 days";
    const btn2 = "10 days";
    const btn3 = "15 days";
    const btn4 = "1 month";

    const btn5 = "$15";
    const btn6 = "$35";
    const btn7 = "$60";
    const btn8 = "$100";

    const activeStyles = {
        fontSize: "medium",
        color: "white",
        background: "#00c4cf",
    };

    return (
        <div>
            <div className={classes.profileHead}>
                <Avatar
                    className={classes.profileImg}
                    src={`http://themashabrand.com/templates/Kafe/Kafe-v4/assets/img/users/${2}.jpg`}
                    alt="Alex"
                />
                <div className={classes.profileHeadName}>
                    <Link to={`/profile`}>Alex Grantte</Link>
                    <p>Your Profile</p>
                </div>
            </div>
            <div className={classes.feature}>
                <h3>Feature Your Profile</h3>
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
        </div>
    );
}

export default FeatureJob;
