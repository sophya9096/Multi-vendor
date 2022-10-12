import React, { useState } from "react";
// import { Button } from "@material-ui/core";
import classes from "../screens/Profile.module.css";

function Portfolio() {
    const [image, setImage] = useState("");

    const handleImage = (e) => {
        const src = e?.target?.currentSrc;
        setImage(src);
        console.log(image);
    };

    return (
        <div className={classes.portfolio}>
            <div className={classes.portfolioImages}>
                <img onClick={(e) => handleImage(e)} src={"http://themashabrand.com/templates/Kafe/Kafe-v4/assets/img/portfolio/1.jpg"} />
                <img onClick={(e) => handleImage(e)} src={"http://themashabrand.com/templates/Kafe/Kafe-v4/assets/img/portfolio/2.jpg"} />
                <img onClick={(e) => handleImage(e)} src={"http://themashabrand.com/templates/Kafe/Kafe-v4/assets/img/portfolio/3.jpg"} />
                <img onClick={(e) => handleImage(e)} src={"http://themashabrand.com/templates/Kafe/Kafe-v4/assets/img/portfolio/4.jpg"} />
            </div>
            {/* {image && (
                <figure className={classes.figure}>
                    <img src={image} alt="" />
                    <Button onClick={(e) => setImage("")}>X</Button>
                </figure>
            )} */}
        </div>
    );
}

export default Portfolio;
