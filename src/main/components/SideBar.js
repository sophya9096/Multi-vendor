import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import classes from "./Sidebar.module.css";
import { IconButton, Menu } from "@material-ui/core";

export default function TemporaryDrawer({ setShow, show }) {
    // const [show, setShow] = React.useState(false);

    const toggleDrawer = (anchor, open) => (event) => {
        // if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
        //     return;
        // }

        // setState({ ...state, [anchor]: open });
        setShow(!show);
    };

    const list = (anchor) => (
        <div className={classes.list} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
            <List>
                {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {["All mail", "Trash", "Spam"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <React.Fragment>
                <Drawer variant="temporary" anchor={"left"} open={show} onClose={toggleDrawer()}>
                    <div
                        className={classes.list}
                        // role="presentation"
                        onClick={toggleDrawer("anchor", false)}
                        // onKeyDown={toggleDrawer("anchor", false)}
                    >
                        <List>
                            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <List>
                            {["All mail", "Trash", "Spam"].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                    {/* <div role="presentation">
                        <button onClick={toggleDrawer()}>Game on hai</button>
                    </div> */}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
