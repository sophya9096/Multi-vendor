import { Avatar, Button } from "@material-ui/core";
import React from "react";
import classes from "./EditProfile.module.css";

function EditImage() {
    return (
        <div className={classes.editImage}>
            <h1>Edit Image</h1>
            <div className={classes.profileImage}>
                <Avatar className={classes.img} src={`http://themashabrand.com/templates/Kafe/Kafe-v4/assets/img/users/${2}.jpg`} alt="" />
                <div className={classes.imageInfo}>
                    <Button className={classes.change}>Change Image</Button>
                    <p>Max 20 MB</p>
                </div>
            </div>
            <button className={classes.submit}>Submit</button>
        </div>
    );
}

export default EditImage;
