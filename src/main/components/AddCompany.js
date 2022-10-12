import React from "react";
import classes from "./AddCompany.module.css";

function AddCompany() {
    return (
        <div className={classes.addCompany}>
            <h1>Add Company</h1>
            <p>Company Name</p>
            <input placeholder={"Company Name"} />
            <p>Website</p>
            <input placeholder={"https://..."} />
            <p>Slogan</p>
            <input placeholder={"Slogan"} />
            <p>Founded</p>
            <input placeholder={"Founded"} />
            <p>Size</p>
            <button>1 - 10</button>
            <button>10 - 20</button>
            <button className={classes.active}>20 - 30</button>
            <button>30 - 40</button>
            <p>Discription</p>
            <textarea placeholder="Provide Details for Your Company" />
            <button className={classes.active}>Choose a File</button>
            <button className={classes.submit}>Submit</button>
        </div>
    );
}

export default AddCompany;
