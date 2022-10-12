import React from "react";
import classes from "./Home.module.css";
import { Button, IconButton } from "@material-ui/core";
import {
    Assignment,
    People,
    Work,
    Build,
    Code,
    Visibility,
    BorderColor,
    Create,
    Payment,
    CastForEducation,
    Gavel,
    AttachMoney,
} from "@material-ui/icons";
import FlipMove from "react-flip-move";
import { useHistory } from "react-router-dom";

function Home() {
    const history = useHistory();

    const category = [
        {
            Icon: Code,
            text: "Web & Mobile Development",
            avalaible: 215,
        },
        {
            Icon: Visibility,
            text: "Design Arts & Multimedia",
            avalaible: 215,
        },
        {
            Icon: Create,
            text: "Writing & Translation",
            avalaible: 215,
        },
        {
            Icon: BorderColor,
            text: "Admin Support",
            avalaible: 215,
        },
        {
            Icon: Payment,
            text: "Management & Finance",
            avalaible: 215,
        },
        {
            Icon: CastForEducation,
            text: "Sales & Marketing",
            avalaible: 215,
        },
        {
            Icon: Build,
            text: "Engineering & Architecture",
            avalaible: 215,
        },
        {
            Icon: Gavel,
            text: "Legal",
            avalaible: 215,
        },
    ];

    const reputation = [
        {
            Icon: People,
            users: 1541351,
            text: "Total Users",
        },
        {
            Icon: Work,
            users: 4351,
            text: "Total Users",
        },
        {
            Icon: AttachMoney,
            users: 20405000,
            text: "Paid to Freelancers",
        },
    ];

    return (
        <div className={classes.home}>
            <div className={classes.banner}>
                <h1>Find the best Freelancers in their finest hour</h1>
                <h2>Getting a job done has never been easy.</h2>
                <div className={classes.banner__search}>
                    <input type="text" placeholder="What do you need to get done" />
                    <Button variant="contained">Let's Go</Button>
                </div>
                <div className={classes.banner__discription}>
                    <div className={classes.proposal}>
                        <IconButton>
                            <Assignment className={classes.icon} />
                        </IconButton>
                        <h3>Get Proposals in three minutes </h3>
                    </div>
                    <div className={classes.freelancer}>
                        <IconButton>
                            <People className={classes.icon} />
                        </IconButton>
                        <h3>Choose Your Freelancer </h3>
                    </div>
                    <div className={classes.job}>
                        <IconButton>
                            <Work className={classes.icon} />
                        </IconButton>
                        <h3>Post Job for free</h3>
                    </div>
                </div>
            </div>
            <div className={classes.categories}>
                <h2> BROWSE FREELANCERS BY CATEGORY</h2>
                <div className={classes.categories__section}>
                    <FlipMove>
                        {category.map(({ text, Icon, avalaible }, index) => (
                            <div onClick={() => history.push("/hire")} key={index} className={classes.category}>
                                <Icon className={classes.category__icon} />
                                <h4>{text}</h4>
                                <p>({avalaible})</p>
                            </div>
                        ))}
                    </FlipMove>
                </div>
                <div className={classes.categories__reputation}>
                    <FlipMove>
                        {reputation.map(({ text, Icon, users }, index) => (
                            <div key={index} className={classes.reputation}>
                                <Icon className={classes.reputation__icon} />
                                <p>({users})</p>
                                <h4>{text}</h4>
                            </div>
                        ))}
                    </FlipMove>
                </div>
            </div>
        </div>
    );
}

export default Home;
