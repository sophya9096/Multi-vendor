import React, { forwardRef } from "react";
import classes from "./Card.module.css";
import { LocationOnSharp, StarSharp } from "@material-ui/icons";
import { Link } from "react-router-dom";

const MediaCard = forwardRef(({ index }, ref) => {
    return (
        <div ref={ref} className={classes.card}>
            {/* <CardActionArea> */}
            <img
                className={classes.person}
                src={`http://themashabrand.com/templates/Kafe/Kafe-v4/assets/img/users/${index + 1}.jpg`}
                alt="asgasdg"
            />{" "}
            <div className={classes.card__top}>
                <Link to="/profile" style={{ listStyle: "none", cursor: "pointer" }}>
                    <h2>Julie L. Arsenault</h2>
                </Link>
                <div className={classes.location}>
                    <LocationOnSharp className={classes.locationIcon} />
                    <span>Nairobi, Kenya</span>
                </div>
                <div className={classes.rating}>
                    {[...Array(5)].map((_, i) => (
                        <StarSharp key={i} className={classes.star} />
                    ))}
                    {"     "}99%
                </div>
            </div>
            <div className={classes.card__center}>
                <h3>ISTQB certified Expert QA Engineer, QA Lead</h3>
                <h4>Company</h4>
                <p>Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
            <div className={classes.card__bottom}>
                <div className={classes.jobs}>
                    <p>1</p>
                    <p>Jobs Done </p>
                </div>
                <div className={classes.hours}>
                    <p> 2165</p>
                    <p>Hours </p>
                </div>
                <div className={classes.rate}>
                    <p>$ 15.00 /hr</p>
                    <p>Hourly Rate</p>
                </div>
            </div>
            {/* </CardActionArea> */}
        </div>
    );
});
export default MediaCard;
