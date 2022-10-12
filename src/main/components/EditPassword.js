import React from "react";
import classes from "./EditProfile.module.css";

function ChangePassword() {
    return (
        <div className={`${classes.editPassword} ${classes.editProfile}`}>
            <h1>Change Your Password</h1>
            <p>Current Password</p>
            <input type="text" placeholder={"Current Password"} />
            <p>New Password</p>
            <input type="text" placeholder={"New Password"} />
            <p>Confirm Password</p>
            <input type="text" placeholder={"Confirm Password"} />
            <button className={classes.submit}>Submit</button>
        </div>
    );
}

export default ChangePassword;
