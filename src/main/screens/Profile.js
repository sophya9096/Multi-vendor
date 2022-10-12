import React, { useState } from "react";
import classes from "./Profile.module.css";
import { Button, ButtonGroup } from "@material-ui/core";
import { LocationOnSharp, StarSharp } from "@material-ui/icons";
import { Suspense, lazy } from "react";

const ProfileInfo = lazy(() => import("../components/ProfileInfo"));
const Feedbacks = lazy(() => import("../components/Feedbacks"));
const Portfolio = lazy(() => import("../components/Portfolio"));

function Profile() {
    const [active, setActive] = useState("PROFILE");
    const btn1 = "PROFILE";
    const btn2 = "FEEDBACKS";
    const btn3 = "PORTFOLIO";

    const disc = [
        {
            title: "Total Spent",
            num: "Below $100",
        },
        {
            title: "Total Spent",
            num: "1",
        },
        {
            title: "Total Spent",
            num: "$55.00",
        },
        {
            title: "Total Spent",
            num: "12",
        },
        {
            title: "Total Spent",
            num: "1,903",
        },
        {
            title: "Total Spent",
            num: "4",
        },
    ];

    console.log(active);

    const activeStyles = {
        fontSize: "medium",
        background: "white",
        color: "#00c4cf",
    };

    return (
        <div className={classes.container}>
            <div className={classes.profile}>
                <ButtonGroup className={classes.tabs}>
                    <Button
                        style={(active === btn1 && activeStyles) || null}
                        onClick={(e) => {
                            setActive(e.target.innerText);
                        }}
                    >
                        Profile
                    </Button>
                    <Button
                        style={(active === btn2 && activeStyles) || null}
                        onClick={(e) => {
                            setActive(e.target.innerText);
                        }}
                    >
                        Feedbacks
                    </Button>
                    <Button
                        style={(active === btn3 && activeStyles) || null}
                        onClick={(e) => {
                            setActive(e.target.innerText);
                        }}
                    >
                        Portfolio
                    </Button>
                </ButtonGroup>
                <div className={classes.info}>
                    <div className={classes.infoTop}>
                        <img src={"http://themashabrand.com/templates/Kafe/Kafe-v4/assets/img/users/1.jpg"} alt="asgasdg" />
                        <div className={classes.infoDiscription}>
                            <h3>Kris Magamigi</h3>
                            <p>MongoDB/CQRS/ES/ASP.NET MVC/Node.JS/AngularJS/BackboneJS</p>
                            <div className={classes.location}>
                                <LocationOnSharp className={classes.locationIcon} />
                                <p> Nyayo Highrise, Nairobi</p>
                            </div>
                            <div className={classes.rating}>
                                {[...Array(5)].map((_, i) => (
                                    <StarSharp key={i} className={classes.star} />
                                ))}{" "}
                                99%
                            </div>
                        </div>
                        <div className={classes.buttons}>
                            <Button>Contact</Button>
                            <Button>Hire</Button>
                        </div>
                    </div>
                    <div className={classes.infoBottom}>
                        {disc.map(({ num, title }, index) => (
                            <div key={index}>
                                <h6>{title}</h6>
                                <p>{num}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Suspense fallback={<h1>Loading...</h1>}>
                {active === "PROFILE" ? <ProfileInfo /> : active === "FEEDBACKS" ? <Feedbacks /> : active === "PORTFOLIO" && <Portfolio />}
            </Suspense>
        </div>
    );
}

export default Profile;
