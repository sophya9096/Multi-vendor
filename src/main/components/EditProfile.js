import React from "react";
import classes from "./EditProfile.module.css";

function EditProfile() {
    return (
        <div className={classes.editProfile}>
            <h1>Edit Your Profile</h1>
            <p>Name</p>
            <input type="text" placeholder={"Your Name"} />
            <p>Profession</p>
            <input type="text" placeholder={"Profession e.g Web Developer"} />
            <p>Location</p>
            <input type="text" placeholder={"Location e.g Karachi ,Pakistan"} />
            <p>Hourly Rate</p>
            <input type="text" placeholder={"e.g Hourly Rate $50"} />
            <p>Skills</p>
            <button>HTML5</button>
            <button>CSS3</button>
            <button className={classes.active}>BOOTSTRAP</button>
            <button>PHP</button>
            <button>WORDPRESS</button>
            <button>REACT</button>
            <p>Discription</p>
            <textarea placeholder="Provide a more Detailed discription about yourself.." />
            {/* <button className={classes.active}>Choose a File</button> */}
            <button className={classes.submit}>Submit</button>
        </div>
    );
}

export default EditProfile;
