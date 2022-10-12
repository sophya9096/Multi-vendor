import React from "react";
import classes from "../screens/Profile.module.css";
import { SettingsRounded } from "@material-ui/icons";

function ProfileInfo() {
    return (
        <div className={classes.ProfileDiv}>
            <div className={classes.profileDivLeft}>
                <h3>About</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <br />
                    <br />
                    <br />
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni। Skills
                </p>
                <div className={classes.skillsHeading}>
                    <SettingsRounded />
                    <h4>Skills</h4>
                </div>
                <div>
                    <div className={classes.skillsRequire}>
                        <span>HTML 5</span>
                        <span>CSS 3</span>
                        <span>Bootstrap</span>
                        <span>Php</span>
                        <span>My Sql</span>
                    </div>
                </div>
            </div>
            <div className={classes.profileDivRight}>
                <div className={classes.work}>
                    <h3>
                        Stats <span> GOWORK</span>
                    </h3>
                    <div className={classes.workDone}>
                        <div className={classes.workDetail}>
                            <p>12</p>
                            Jobs Completed
                        </div>
                        <div className={classes.workDetail}>
                            <p>1543</p>
                            Hours Completed
                        </div>
                        <div className={classes.workDetail}>
                            <p>2</p>
                            Active Contract
                        </div>
                    </div>
                </div>
                <div className={classes.work}>
                    <h3>
                        Stats <span> GOHIRE</span>
                    </h3>
                    <div className={classes.workDone}>
                        <div className={classes.workDetail}>
                            <p>4</p>
                            Jobs Posted
                        </div>
                        <div className={classes.workDetail}>
                            <p>Below $100</p>
                            Total Spent
                        </div>
                        <div className={classes.workDetail}>
                            <p>5</p>
                            Active Contract
                        </div>
                    </div>
                </div>
                <div className={classes.work}>
                    <h3>Background</h3>

                    <div className={classes.history}>
                        <h4> Employment history</h4>
                        <h5>Paralect</h5>
                        <p>Co-founder</p>
                        <p>9/2009 – Present</p>
                        <h5>Paralect</h5>
                        <p>Co-founder</p>
                        <p>9/2009 – Present</p>
                    </div>
                    <div className={classes.education}>
                        <h4> Education</h4>
                        <h5>Paralect</h5>
                        <p>Co-founder</p>
                        <p>9/2009 – Present</p>
                        <h5>Paralect</h5>
                        <p>Co-founder</p>
                        <p>9/2009 – Present</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
