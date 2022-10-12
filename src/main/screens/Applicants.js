import React from "react";
import classes from "./Applicants.module.css";
import { Button } from "@material-ui/core";
import { Subject, LocationOnSharp } from "@material-ui/icons";
import Applicant from "../components/Applicant";

function Applicants() {
    const details = [
        {
            prime: "Posted",
            second: "4 Hours Ago",
        },
        {
            prime: "Location",
            second: " Kenya  ",
        },
        {
            prime: "Budget",
            second: "$220",
        },
        {
            prime: "Duration",
            second: "Not Sure",
        },
        {
            prime: "Applicants",
            second: "15",
        },
    ];

    return (
        <div className={classes.applicants}>
            <div className={classes.applicantsTop}>
                <h2>Code Ebay store and listing design to be mobile responsive.</h2>
                <h4> Customer Service - Customer Service</h4>
                <div className={classes.applicantsDetails}>
                    {details.map(({ prime, second }, index) => (
                        <div key={index} className={classes.applicantsDetail}>
                            <h5>{prime}</h5>
                            <p>
                                {" "}
                                {index === 1 && <LocationOnSharp style={{ color: "#00c4cf", fontSize: "16px" }} />} {second}
                            </p>
                        </div>
                    ))}
                    <Button variant="contained" startIcon={<Subject />}>
                        Apply
                    </Button>
                </div>
            </div>
            <div className={classes.applicantsInfo}>
                <div className={classes.applicantsInfoLeft}>
                    <div className={classes.description}>
                        <h3> Job Description</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.
                            <br />
                            <br />
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni।
                        </p>
                    </div>
                </div>

                <div className={classes.applicantsInfoRight}>
                    <div className={classes.requirements}>
                        <h3>Requirements</h3>
                        <div>
                            <div className={classes.requirement}>
                                <h4>Intermediate</h4>
                                <p>Required Level</p>
                            </div>
                            <div className={classes.requirement}>
                                <h4>4.5+ Stars</h4>
                                <p>Feedback Score</p>
                            </div>
                            <div className={classes.requirement}>
                                <h4>100+ Hours</h4>
                                <p>Hours Worked</p>
                            </div>
                            <div className={classes.requirement}>
                                <h4>Allowed</h4>
                                <p>Companies</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.activity}>
                        <h3>Activity</h3>
                        <div>
                            <div className={classes.requirement}>
                                <h4>3</h4>
                                <p>Proposals</p>
                            </div>
                            <div className={classes.requirement}>
                                <h4>0</h4>
                                <p>Interviewing</p>
                            </div>
                            <div className={classes.requirement}>
                                <h4>0</h4>
                                <p>Hired</p>
                            </div>
                        </div>
                        <p>Last viewed by client: 3 days ago</p>
                    </div>
                    <div className={classes.employer}>
                        <img src={"http://themashabrand.com/templates/Kafe/Kafe-v4/assets/img/users/12.jpg"} alt="asgasdg" />
                        <h4>Julie L. Arsenault</h4>
                        <div className={classes.employerDetails}>
                            <div className={classes.employerDetail}>
                                <h5>1</h5>
                                <p>Jobs Posted</p>
                            </div>
                            <div className={classes.employerDetail}>
                                <h5>$0.00</h5>
                                <p>Spent</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Applicant />
            </div>
        </div>
    );
}

export default Applicants;
