import React from "react";
import classes from "./Hire.module.css";
import Card from "../components/Card";
import FlipMove from "react-flip-move";

function Hire() {
    return (
        <div className={classes.hire}>
            <h1 className={classes.heading}>FREELANCERS</h1>
            <div className={classes.hire__cards}>
                <FlipMove>
                    {[...Array(12)].map((_, i) => (
                        <Card key={i} index={i} />
                    ))}
                </FlipMove>
            </div>
        </div>
    );
}

export default Hire;
