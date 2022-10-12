import React from "react";
import classes from "./Info.module.css";
import { useHistory } from "react-router-dom";
import { Button, Divider, IconButton } from "@material-ui/core";
import {
    Assignment,
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
    Group,
} from "@material-ui/icons";
import FlipMove from "react-flip-move";

function Info() {
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
            Icon: Assignment,
            users: 1541351,
            text: "Post projects to tell us what you need done.",
        },
        {
            Icon: Group,
            users: 4351,
            text: "Browse profiles, reviews, then hire your most favorite and start project.",
        },
        {
            Icon: Work,
            users: 20405000,
            text: "Use The Kafe platform to chat and share files",
        },
        {
            Icon: AttachMoney,
            users: 20405000,
            text: "With our protection, money is only paid for work you authorize.",
        },
    ];

    return (
        <div className={classes}>
            <div className={classes.categories}>
                <h2> HOW IT WORKS</h2>

                <div className={classes.categories__reputation}>
                    <FlipMove>
                        {reputation.map(({ text, Icon, users }, index) => (
                            <div key={index} className={classes.reputation}>
                                <Icon className={classes.reputation__icon} />
                                {/* <p>({users})</p> */}
                                <p>{text}</p>
                            </div>
                        ))}
                    </FlipMove>
                </div>
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
            </div>
        </div>
    );
}

export default Info;
