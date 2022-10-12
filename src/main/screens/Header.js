import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { Avatar, Button, IconButton } from "@material-ui/core";
import { Person, Menu } from "@material-ui/icons";
import SideBar from "../components/SideBar";

function Header() {
    const [show, setShow] = React.useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth > 625) {
                setShow(false);
            }
        });
        return window.removeEventListener("resize", () => {});
    }, []);

    console.log(show);
    return (
        <div className={classes.header}>
            <div className={classes.header__navLeft}>
                <div className={classes.header__logo}>
                    <SideBar show={show} setShow={setShow} />
                    <IconButton onClick={() => setShow(!show)}>
                        <Menu className={classes.header__menu} />
                    </IconButton>
                    <Link to="/">
                        <img src="http://themashabrand.com/templates/Kafe/Kafe-v4/assets/img/logo.jpg" alt="" />
                        <h1>The Kafe</h1>
                    </Link>
                </div>

                <div className={classes.header__links}>
                    <Link to="/hire">gohire</Link>
                    <Link to="/work">gowork</Link>
                    <Link to="/pricing">pricing</Link>
                    <Link to="/info">how it works</Link>
                </div>
            </div>
            <div className={classes.header__navRight}>
                <Link to="/hire">
                    <Person className={classes.icon} />
                    <span>Sign in/Register</span>
                </Link>
                <Link to="/dashboard">
                    <Avatar className={classes.avatar} src="Ameen" alt="Ameen" />
                    <span>Muhammad Ameen</span>
                </Link>
                <div className={classes.user}>
                    {/* <List className={classes.list}>
                        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List> */}
                </div>
                <Button variant="contained">Post a job</Button>
            </div>
            <Button variant="contained">Join</Button>
        </div>
    );
}

export default Header;
