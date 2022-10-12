import { Button, ButtonGroup } from "@material-ui/core";
import React, { useState } from "react";
import DashboardPanel from "./DashboardPanel";
import classes from "./WorkRoom.module.css";
import { Suspense, lazy } from "react";

const Discussions = lazy(() => import("../components/Discussions"));
const Milestones = lazy(() => import("../components/Milestones"));
const Tasks = lazy(() => import("../components/Tasks"));
const Timesheets = lazy(() => import("../components/Timesheets"));
const Files = lazy(() => import("../components/Files"));
const Links = lazy(() => import("../components/Links"));
const Bugs = lazy(() => import("../components/Bugs"));
const Payments = lazy(() => import("../components/Payments"));
const Rate = lazy(() => import("../components/Rate"));

function WorkRoom() {
    const [active, setActive] = useState("OVERVIEW & DISCUSSIONS");

    const btn1 = "OVERVIEW & DISCUSSIONS";
    const btn2 = "MILESSTONES";
    const btn3 = "TASKS";
    const btn4 = "TIMESHEETS";
    const btn5 = "FILES";
    const btn6 = "LINKS";
    const btn7 = "BUGS";
    const btn8 = "PAYMENTS";
    const btn9 = "RATE THE FREELANCER";

    const styles = {
        background: "transparent ",
        boxShadow: "none",
        color: "var(--base) ",
        fontSize: "14px ",
        borderRadius: "0",
        borderRadius: "0",
        transition: "all .3s ease",
    };
    const activeStyles = {
        fontSize: "medium",
        color: "white",
        background: "#00c4cf ",
    };

    console.log(active);

    return (
        <div className={classes.company}>
            <div className={classes.dashboardPanel}>
                <DashboardPanel />
            </div>
            <div className={classes.dashboardResult}>
                <div className={classes.workRoom}>
                    <ButtonGroup className={classes.workRoomNav}>
                        <Button
                            onClick={(e) => setActive(e.target.innerText)}
                            style={active === btn1 ? activeStyles : styles}
                            variant="contained"
                        >
                            {btn1}
                        </Button>
                        <Button
                            onClick={(e) => setActive(e.target.innerText)}
                            style={active === btn2 ? activeStyles : styles}
                            className={classes.navBtn}
                            variant="contained"
                        >
                            {btn2}
                        </Button>
                        <Button
                            onClick={(e) => setActive(e.target.innerText)}
                            style={active === btn3 ? activeStyles : styles}
                            className={classes.navBtn}
                            variant="contained"
                        >
                            {btn3}
                        </Button>
                        <Button
                            onClick={(e) => setActive(e.target.innerText)}
                            style={active === btn4 ? activeStyles : styles}
                            className={classes.navBtn}
                            variant="contained"
                        >
                            {btn4}
                        </Button>

                        <Button
                            onClick={(e) => setActive(e.target.innerText)}
                            style={active === btn5 ? activeStyles : styles}
                            className={classes.navBtn}
                            variant="contained"
                        >
                            {btn5}
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup className={classes.workRoomNav}>
                        <Button
                            onClick={(e) => setActive(e.target.innerText)}
                            style={active === btn6 ? activeStyles : styles}
                            className={classes.navBtn}
                            variant="contained"
                        >
                            {btn6}
                        </Button>
                        <Button
                            onClick={(e) => setActive(e.target.innerText)}
                            style={active === btn7 ? activeStyles : styles}
                            className={classes.navBtn}
                            variant="contained"
                        >
                            {btn7}
                        </Button>
                        <Button
                            onClick={(e) => setActive(e.target.innerText)}
                            style={active === btn8 ? activeStyles : styles}
                            className={classes.navBtn}
                            variant="contained"
                        >
                            {btn8}
                        </Button>
                        <Button
                            onClick={(e) => setActive(e.target.innerText)}
                            style={active === btn9 ? activeStyles : styles}
                            className={classes.navBtn}
                            variant="contained"
                        >
                            {btn9}
                        </Button>
                    </ButtonGroup>
                </div>
                <div className={classes}>
                    <Suspense fallback={<h1>Loading...</h1>}>
                        {active === btn1 ? (
                            <Discussions />
                        ) : active === btn2 ? (
                            <Milestones />
                        ) : active === btn3 ? (
                            <Tasks />
                        ) : active === btn2 ? (
                            <Timesheets />
                        ) : active === btn5 ? (
                            <Files />
                        ) : active === btn6 ? (
                            <Links />
                        ) : active === btn7 ? (
                            <Bugs />
                        ) : active === btn8 ? (
                            <Payments />
                        ) : (
                            active === btn9 && <Rate />
                        )}
                    </Suspense>
                </div>
            </div>
        </div>
    );
}

export default WorkRoom;
