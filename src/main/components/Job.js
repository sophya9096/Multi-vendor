import React, { forwardRef } from "react";
import { LocationOnSharp, StarSharp } from "@material-ui/icons";
import classes from "./Job.module.css";
import { Link } from "react-router-dom";

const Job = forwardRef(({ index }, ref) => {
    return (
        <div ref={ref} className={classes.job}>
            <div className={classes.top}>
                <Link style={{ listStyle: "none", color: "#00c4cf" }} to="/applicants">
                    <h3>Code Ebay store and listing design to be mobile responsive.</h3>
                </Link>
                <h4>Web Development</h4>
                <h5>Hourly $$ (intermediate) 40+ hours per week</h5>
                <h6>Posted 14 Hours ago</h6>
            </div>
            <div className={classes.center}>
                <p>
                    Description of every page/module: I have a PSD ebay store and listing design in photoshop that needs to be sliced and
                    coded for eBay to be mobile responsive. Description of requirements/features: Mobile Responsive Ebay store and listing
                    design...
                </p>
                <div className={classes.skillsRequire}>
                    <span>HTML 5</span>
                    <span>CSS 3</span>
                    <span>Bootstrap</span>
                    <span>Php</span>
                    <span>My Sql</span>
                </div>
            </div>

            <div className={classes.bottom}>
                <img src={`http://themashabrand.com/templates/Kafe/Kafe-v4/assets/img/users/${index + 1}.jpg`} alt="asgasdg" />{" "}
                <div className={classes.employer}>
                    <h4>Bill Morgan</h4>
                    <span>
                        {" "}
                        <LocationOnSharp className={classes.icon} /> USA{" "}
                    </span>
                    <div className={classes.rating}>
                        {[...Array(5)].map((_, i) => (
                            <StarSharp key={i} className={classes.icon} />
                        ))}
                    </div>
                </div>
                <div className={classes.applicants}>
                    <p>5</p>
                    <p>APPLICANTS</p>
                </div>
            </div>
        </div>
    );
});

export default Job;
