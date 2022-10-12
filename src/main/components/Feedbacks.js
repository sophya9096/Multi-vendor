import React from "react";
import classes from "../screens/Profile.module.css";
import { StarSharp } from "@material-ui/icons";

function Feedbacks() {
    return (
        <div className={classes.feedbacks}>
            {[...Array(7)].map((_, i) => (
                <div key={i} className={classes.feedback}>
                    <div className={classes.feedbackTop}>
                        <img src={`http://themashabrand.com/templates/Kafe/Kafe-v4/assets/img/users/${i + 2}.jpg`} alt="" />
                        <div className={classes.heading}>
                            <h3>Venessa Wells</h3>
                            <p>9 Hours Ago</p>
                        </div>
                        <p>{i % 2 === 0 ? "Go Work" : "Go HIRE"}</p>
                    </div>
                    <div className={classes.rating}>
                        {[...Array(4)].map((_, i) => (
                            <StarSharp key={i} className={classes.star} />
                        ))}{" "}
                    </div>
                    <p>
                        Description of every page/module: I have a PSD ebay store and listing design in photoshop that needs to be sliced
                        and coded for eBay to be mobile responsive. Description of requirements/features: Mobile Responsive Ebay store and
                        listing design
                    </p>
                </div>
            ))}
        </div>
    );
}

export default Feedbacks;
