import React, { useState, useCallback } from "react";
import { Avatar, Button, Link } from "@material-ui/core";
import classes from "./Discussions.module.css";

function Discussions() {
    const [messages, setMessages] = useState([
        "t’s so fresh that it almost has that new car smell. But after so much pain and suffering to get your design right",
        "That is when you turn to Lorem Ipsum. In your mind, something says “This, again? Maybe it’s time for a change, time for something new”. Oh boy, we couldn’t agree more.",
        "This post is for those who still need a filler text but crave something more entertaining",
        "Designers use Lorem Ipsum as a dummy text, something to cover the fact that content",
        "Lorem Ipsum is so generalized, that some people have developed a true distaste for it.",
        "Here are our ten favorite alternatives to the classic Lorem Ipsum.",
        "Other available options include Star Wars, The Simpsons and Doctor Who. Fun!",
    ]);
    const [contacts, setContacts] = useState(["Liam", "Otis", "Noah", "Emma", "Olivia", "Ava", "William", "Sophia"]);

    const [message, setMessage] = useState("");

    const setRef = useCallback((node) => {
        if (node) {
            node.scrollIntoView({ smooth: true });
        }
    }, []);

    const handleClick = () => {
        setMessages([...messages, message]);
        setMessage("");
    };

    return (
        <div className={classes.discussions}>
            <div className={classes.discussionsHead}>
                <h3>Code Ebay store and listing design to be mobile responsive.</h3>
                <p>Customer Service - Customer Service</p>
                <div className={classes.headMid}>
                    <Avatar
                        className={classes.headMidImg}
                        src={"http://themashabrand.com/templates/Kafe/Kafe-v4/assets/img/users/1.jpg"}
                        alt={"Anna Morgan"}
                    />
                    <div className={classes.headName}>
                        <div>
                            <Link>Anna Morgan</Link>
                            <p> Freelancer</p>
                        </div>
                        <Button variant={"contained"}>Is Job Completed? CLick here..</Button>
                    </div>
                </div>
                <div className={classes.headBottom}>
                    <div className={classes.headBottomLeft}>
                        <h6>Freelancer Proposal</h6>
                        <p>$20/hr</p>
                    </div>
                    <div className={classes.headBottomRight}>
                        <h6>Job Type</h6>
                        <p>Hourly</p>
                    </div>
                </div>
            </div>
            <div className={classes.chatBox}>
                <div className={classes.chatBoxHead}>
                    <img src={`http://themashabrand.com/templates/Kafe/Kafe-v4/assets/img/users/1.jpg`} alt="image" />
                    <div className={classes.chatBoxName}>
                        <h5>Anna Morgan</h5>
                        <p>Online</p>
                    </div>
                </div>
                <div className={classes.messages}>
                    {messages.map((_, i) => {
                        const lastMessage = i === messages.length - 1;
                        return (
                            <div ref={lastMessage ? setRef : null} key={i} className={i % 2 === 0 ? classes.message : classes.messenger}>
                                <img
                                    src={`http://themashabrand.com/templates/Kafe/Kafe-v4/assets/img/users/${i % 2 === 0 ? 1 : 2}.jpg`}
                                    alt="image"
                                />
                                <div className={classes.chatBoxName}>
                                    <p>{_} </p>
                                    <span>5 minutes ago</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className={classes.sendMessage}>
                    <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Add Your Message" />
                    <Button onClick={handleClick} variant="contained">
                        Send{" "}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Discussions;
