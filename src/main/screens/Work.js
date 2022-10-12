import React from "react";
import Job from "../components/Job";
import FlipMove from "react-flip-move";
import classes from "./Work.module.css";

function Work() {
    return (
        <div className={classes.work}>
            <h1>JOBS</h1>
            <FlipMove>
                {[...Array(9)].map((_, i) => (
                    <Job key={i} index={i} />
                ))}
            </FlipMove>{" "}
        </div>
    );
}

export default Work;
