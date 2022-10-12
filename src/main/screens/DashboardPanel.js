import {
    AlbumSharp,
    Apple,
    CompareArrows,
    CreditCard,
    FileCopy,
    Image,
    LocalOffer,
    NearMe,
    Person,
    PostAdd,
    RadioButtonChecked,
    StarOutlined,
    Subject,
} from "@material-ui/icons";
import React, { useState } from "react";
import classes from "./DashboardPanel.module.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import DraftsIcon from "@material-ui/icons/Drafts";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";

function DashboardPanel() {
    const [openJobs, setOpenJobs] = useState(false);
    const [openProposals, setOpenProposals] = useState(false);
    const [openCompanies, setOpenCompanies] = useState(false);
    const [openWallet, setOpenWallet] = useState(false);
    const [openJob, setOpenJob] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);
    const [openFeatureCompany, setOpenFeatureCompany] = useState(false);

    const dash = (
        <List className={classes.list} component="nav" aria-labelledby="nested-list-subheader" subheader={""}>
            <Link to="/dashboard">
                <ListItem button className={classes.listItem}>
                    <ListItemIcon>
                        <AlbumSharp className={classes.listIcon} />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
            </Link>
            <Link to="/contracts">
                <ListItem button className={classes.listItem}>
                    <ListItemIcon>
                        <Subject className={classes.listIcon} />
                    </ListItemIcon>
                    <ListItemText primary="Contracts" />
                </ListItem>
            </Link>
            <ListItem button onClick={() => setOpenJobs(!openJobs)} className={classes.listItem}>
                <ListItemIcon>
                    <FileCopy className={classes.listIcon} />
                </ListItemIcon>
                <ListItemText primary="Jobs" />
                {openJobs ? <ExpandLess className={classes.listIcon} /> : <ExpandMore className={classes.listIcon} />}
            </ListItem>

            <Collapse className={classes.colapse} in={openJobs} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Link to="/jobposted">
                        <ListItem button className={classes.listItem}>
                            <ListItemIcon>
                                <StarOutlined className={classes.listItem} />
                            </ListItemIcon>
                            <ListItemText primary="Job Posted" />
                        </ListItem>
                    </Link>
                    <Link to="/addjob">
                        <ListItem button className={classes.listItem}>
                            <ListItemIcon>
                                <StarOutlined className={classes.listItem} />
                            </ListItemIcon>
                            <ListItemText primary="Add a Job" />
                        </ListItem>
                    </Link>
                </List>
            </Collapse>
            <ListItem button className={classes.listItem} onClick={() => setOpenProposals(!openProposals)}>
                <ListItemIcon>
                    <PostAdd className={classes.listIcon} />
                </ListItemIcon>
                <ListItemText primary="Proposals" />
                {openProposals ? <ExpandLess className={classes.listIcon} /> : <ExpandMore className={classes.listIcon} />}
            </ListItem>
            <Collapse className={classes.colapse} in={openProposals} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Link to="yourproposals">
                        <ListItem button className={classes.listItem}>
                            <ListItemIcon>
                                <StarOutlined className={classes.listItem} />
                            </ListItemIcon>
                            <ListItemText primary="Your Proposals" />
                        </ListItem>
                    </Link>

                    <Link to="otherproposals">
                        <ListItem className={classes.listItem} button>
                            <ListItemIcon>
                                <StarOutlined className={classes.listItem} />
                            </ListItemIcon>
                            <ListItemText primary="Other Proposals" />
                        </ListItem>
                    </Link>
                </List>
            </Collapse>
            <Link to="offers">
                <ListItem button className={classes.listItem}>
                    <ListItemIcon>
                        <LocalOffer className={classes.listIcon} />
                    </ListItemIcon>
                    <ListItemText primary="Offers" />
                </ListItem>
            </Link>
            <ListItem button onClick={() => setOpenCompanies(!openCompanies)} className={classes.listItem}>
                <ListItemIcon>
                    <Apple className={classes.listIcon} />
                </ListItemIcon>
                <ListItemText primary="Companies" />
                {openCompanies ? <ExpandLess className={classes.listIcon} /> : <ExpandMore className={classes.listIcon} />}
            </ListItem>
            <Collapse className={classes.colapse} in={openCompanies} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Link to="/companylist">
                        <ListItem button className={classes.listItem} className={classes.listItem}>
                            <ListItemIcon>
                                <StarOutlined className={classes.listItem} />
                            </ListItemIcon>
                            <ListItemText primary="Company List" />
                        </ListItem>
                    </Link>

                    <Link to="/addcompany">
                        <ListItem button className={classes.listItem} className={classes.listItem}>
                            <ListItemIcon>
                                <StarOutlined className={classes.listItem} />
                            </ListItemIcon>
                            <ListItemText primary="Add a Company" />
                        </ListItem>
                    </Link>
                </List>
            </Collapse>
            <Link to="messages">
                <ListItem button className={classes.listItem}>
                    <ListItemIcon>
                        <DraftsIcon className={classes.listIcon} />
                    </ListItemIcon>
                    <ListItemText primary="Messages" />
                </ListItem>
            </Link>
        </List>
    );

    const wallet = (
        <List className={`${classes.list} ${classes.secondaryList}`} component="nav" aria-labelledby="nested-list-subheader" subheader={""}>
            <ListItem button onClick={() => setOpenWallet(!openWallet)} className={classes.listItem}>
                <ListItemIcon>
                    <CompareArrows className={classes.listIcon} />
                </ListItemIcon>
                <ListItemText primary="Wallet" />
                {openWallet ? <ExpandLess className={classes.listIcon} /> : <ExpandMore className={classes.listIcon} />}
            </ListItem>
            <Collapse className={classes.colapse} in={openWallet} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Link to="deposits">
                        <ListItem button className={classes.listItem} className={classes.listItem}>
                            <ListItemIcon>
                                <StarOutlined className={classes.listItem} />
                            </ListItemIcon>
                            <ListItemText primary="Deposits" />
                        </ListItem>
                    </Link>
                    <Link to="withdrawals">
                        <ListItem button className={classes.nested} className={classes.listItem}>
                            <ListItemIcon>
                                <StarOutlined className={classes.listItem} />
                            </ListItemIcon>
                            <ListItemText primary="Withdrawals" />
                        </ListItem>
                    </Link>
                </List>
            </Collapse>
            <Link to="/payment">
                <ListItem button className={classes.listItem}>
                    <ListItemIcon>
                        <RadioButtonChecked className={classes.listIcon} />
                    </ListItemIcon>
                    <ListItemText primary="Payment Method" />
                </ListItem>
            </Link>
            <Link to="/membership">
                <ListItem button className={classes.listItem}>
                    <ListItemIcon>
                        <CreditCard className={classes.listIcon} />
                    </ListItemIcon>
                    <ListItemText primary="Membership" />
                </ListItem>
            </Link>
        </List>
    );

    const feature = (
        <List className={`${classes.list} ${classes.secondaryList}`} component="nav" aria-labelledby="nested-list-subheader" subheader={""}>
            <ListItem button onClick={() => setOpenJob(!openJob)} className={classes.listItem}>
                <ListItemIcon>
                    <NearMe className={classes.listIcon} />
                </ListItemIcon>
                <ListItemText primary="Feature a Job" />
                {openJob ? <ExpandLess className={classes.listIcon} /> : <ExpandMore className={classes.listIcon} />}
            </ListItem>
            <Collapse className={classes.colapse} in={openJob} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Link to="/joblist">
                        <ListItem button className={classes.listItem} className={classes.listItem}>
                            <ListItemIcon>
                                <StarOutlined className={classes.listItem} />
                            </ListItemIcon>
                            <ListItemText primary="Jobs Featured List" />
                        </ListItem>
                    </Link>
                    <Link to="/featurejob">
                        <ListItem button className={classes.nested} className={classes.listItem}>
                            <ListItemIcon>
                                <StarOutlined className={classes.listItem} />
                            </ListItemIcon>
                            <ListItemText primary="Feature a Job" />
                        </ListItem>
                    </Link>
                </List>
            </Collapse>
            <ListItem button onClick={() => setOpenProfile(!openProfile)} className={classes.listItem}>
                <ListItemIcon>
                    <NearMe className={classes.listIcon} />
                </ListItemIcon>
                <ListItemText primary="Feature a Profile" />
                {openProfile ? <ExpandLess className={classes.listIcon} /> : <ExpandMore className={classes.listIcon} />}
            </ListItem>
            <Collapse className={classes.colapse} in={openProfile} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Link to="/profilelist">
                        <ListItem button className={classes.listItem} className={classes.listItem}>
                            <ListItemIcon>
                                <StarOutlined className={classes.listItem} />
                            </ListItemIcon>
                            <ListItemText primary="Profile Featured List" />
                        </ListItem>
                    </Link>
                    <Link to="/featureprofile">
                        <ListItem button className={classes.nested} className={classes.listItem}>
                            <ListItemIcon>
                                <StarOutlined className={classes.listItem} />
                            </ListItemIcon>
                            <ListItemText primary="Feature your Profile" />
                        </ListItem>
                    </Link>
                </List>
            </Collapse>
            <ListItem button onClick={() => setOpenFeatureCompany(!openFeatureCompany)} className={classes.listItem}>
                <ListItemIcon>
                    <NearMe className={classes.listIcon} />
                </ListItemIcon>
                <ListItemText primary="Feature a Comapny" />
                {openFeatureCompany ? <ExpandLess className={classes.listIcon} /> : <ExpandMore className={classes.listIcon} />}
            </ListItem>
            <Collapse className={classes.colapse} in={openFeatureCompany} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Link to="/companieslist">
                        <ListItem button className={classes.listItem} className={classes.listItem}>
                            <ListItemIcon>
                                <StarOutlined className={classes.listItem} />
                            </ListItemIcon>
                            <ListItemText primary="Companies Featured List" />
                        </ListItem>
                    </Link>
                    <Link to="/featurecompany">
                        <ListItem button className={classes.nested} className={classes.listItem}>
                            <ListItemIcon>
                                <StarOutlined className={classes.listItem} />
                            </ListItemIcon>
                            <ListItemText primary="Feature your company" />
                        </ListItem>
                    </Link>
                </List>
            </Collapse>
        </List>
    );

    const edit = (
        <List className={`${classes.list} ${classes.secondaryList}`} component="nav" aria-labelledby="nested-list-subheader" subheader={""}>
            <Link to="editprofile">
                <ListItem button className={classes.listItem}>
                    <ListItemIcon>
                        <Person className={classes.listIcon} />
                    </ListItemIcon>
                    <ListItemText primary="Edit profile" />
                </ListItem>
            </Link>
            <Link to="/workroom">
                <ListItem button className={classes.listItem}>
                    <ListItemIcon>
                        <Image className={classes.listIcon} />
                    </ListItemIcon>
                    <ListItemText primary="Work Room" />
                </ListItem>
            </Link>
            {/*
            <ListItem button className={classes.listItem}>
                <ListItemIcon>
                    <Lock className={classes.listIcon} />
                </ListItemIcon>
                <ListItemText primary="Change Password" />
            </ListItem> */}
        </List>
    );

    return (
        <div className={classes.dashboardDash}>
            {dash}
            {wallet}
            {feature}
            {edit}
        </div>
    );
}

export default DashboardPanel;
