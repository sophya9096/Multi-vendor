import React from "react";
import classes from "./Footer.module.css";
import { Facebook, Twitter, Instagram, Pinterest, LinkedIn } from "@material-ui/icons";

function Footer() {
    return (
        <div className={classes.footer}>
            <p>Copyright © 2021. All Rights Reserved</p>
            <div className={classes.footer__social}>
                <Facebook className={classes.socialIcon} />
                <Twitter className={classes.socialIcon} />
                <Instagram className={classes.socialIcon} />
                <Pinterest className={classes.socialIcon} />
                <LinkedIn className={classes.socialIcon} />
            </div>
        </div>
    );
}

export default Footer;
