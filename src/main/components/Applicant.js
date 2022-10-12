import React from "react";
import classes from "./Applicant.module.css";
import { Group, LocationOnSharp, StarSharp } from "@material-ui/icons";

function Applicant() {
    return (
        <div className={classes.feedbacks}>
            <div className={classes.feedbacksHeading}>
                <Group className={classes.headingIcon} />
                <h2> Applicants (7)</h2>
            </div>
            {[...Array(7)].map((_, i) => (
                <div key={i} className={classes.feedback}>
                    <div className={classes.feedbackTop}>
                        <img src={`http://themashabrand.com/templates/Kafe/Kafe-v4/assets/img/users/${i + 2}.jpg`} alt="" />
                        <div className={classes.heading}>
                            <h3>Venessa Wells</h3>
                            <p>
                                <LocationOnSharp style={{ color: "#00c4cf", fontSize: "16px" }} /> Kenya
                            </p>
                            <div className={classes.rating}>
                                {[...Array(4)].map((_, i) => (
                                    <StarSharp key={i} className={classes.star} />
                                ))}{" "}
                            </div>
                        </div>
                        {/* <p>{i % 2 === 0 ? "Go Work" : "Go HIRE"}</p> */}
                    </div>
                    <p>
                        Description of every page/module: I have a PSD ebay store and listing design in photoshop that needs to be sliced
                        and coded for eBay to be mobile responsive. Description of requirements/features: Mobile Responsive Ebay store and
                        listing design...
                    </p>
                    <span>HTML 5</span>
                    <span>CSS3</span>
                    <span>PHP</span>
                    <span>My Sql</span>
                    <span>Bootstrap</span>
                    <span>JavaScript</span>
                </div>
            ))}
        </div>
    );
}

export default Applicant;
