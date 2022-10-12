import React, { useState, useCallback } from "react";
import { Button } from "@material-ui/core";
import { SearchSharp } from "@material-ui/icons";
import classes from "./Chat.module.css";

function Chat() {
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
        <div className={classes.chat}>
            <div className={classes.chatList}>
                <h3>Messages</h3>
                <div className={classes.search}>
                    <input className={classes.input} placeholder="Search " />
                    <SearchSharp />
                </div>
                <div className={classes.contacts}>
                    {contacts.map((_, i) => (
                        <div key={i} className={classes.contact}>
                            <img src={`http://themashabrand.com/templates/Kafe/Kafe-v4/assets/img/users/${i + 2}.jpg`} alt="image" />
                            <div className={classes.contactDetail}>
                                <h4>{_}</h4>
                                <p>This is the new message</p>
                                <span>1.55 pm</span>
                            </div>
                            <p>13</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={classes.chatBox}>
                <div className={classes.chatBoxHead}>
                    <img src={`http://themashabrand.com/templates/Kafe/Kafe-v4/assets/img/users/2.jpg`} alt="image" />
                    <div className={classes.chatBoxName}>
                        <h5>Anthony McCartney</h5>
                        <p>Online</p>
                    </div>
                </div>
                <div className={classes.messages}>
                    {/* <h1>Messages</h1> */}
                    {messages.map((_, i) => {
                        const lastMessage = i === messages.length - 1;
                        return (
                            <div ref={lastMessage ? setRef : null} key={i} className={i % 2 === 0 ? classes.message : classes.messenger}>
                                <img
                                    src={`http://themashabrand.com/templates/Kafe/Kafe-v4/assets/img/users/${i % 2 === 0 ? 2 : 1}.jpg`}
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

export default Chat;
