import { Subject } from "@material-ui/icons";
import React, { useState } from "react";
import classes from "./Dashboard.module.css";
import DashboardPanel from "./DashboardPanel";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";

const rows = [
    {
        id: 1,
        col0: 1,
        col1: "Jhon Doe",
        col2: "I need a designer to design a logo & questionnaire for a Nutrition Company",
        col3: "Go to Work",
    },
    {
        col0: 2,
        col0: 2,

        id: 2,
        col1: "Jane Doe",
        col2: "I need a designer to design a logo & questionnaire for a Nutrition Company",
        col3: "Go to Work",
    },
    {
        id: 3,
        col0: 3,
        col1: "Eon Morgan",
        col2: "I need a designer to design a logo & questionnaire for a Nutrition Company",
        col3: "Go to Work",
    },
    {
        id: 4,
        col0: 4,

        col1: "James Anderson",
        col2: "I need a designer to design a logo & questionnaire for a Nutrition Company",
        col3: "Go to Work",
    },
    {
        id: 5,
        col0: 5,

        col1: "Kevin Peterson",
        col2: "I need a designer to design a logo & questionnaire for a Nutrition Company",
        col3: "Go to Work",
    },
    {
        id: 6,
        col0: 6,

        col1: "Ricky Ponting",
        col2: "I need a designer to design a logo & questionnaire for a Nutrition Company",
        col3: "Go to Work",
    },
    {
        col0: 7,
        id: 7,
        col1: "Joe Root",
        col2: "I need a designer to design a logo & questionnaire for a Nutrition Company",
        col3: "Go to Work",
    },
];

const columns = [
    { field: "col0", headerName: "Id", width: 100, cellClassName: "Freelancers" },
    { field: "col1", headerName: "Freelancers", width: 150, cellClassName: "Freelancers" },
    { field: "col2", headerName: "Job Title", width: 400, cellClassName: "JobTitle" },
    { field: "col3", headerName: "Workroom", width: 150, cellClassName: "Workroom" },
];

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiDataGrid-colCell": {
            backgroundColor: theme.palette.type === "light" ? "#00c4cf" : "#333",
            border: "1px  solid  #efefef",
            fontSize: "20px",
            color: "white",
        },
        "& .MuiDataGrid-colCell, .MuiDataGrid-cell": {
            border: `1px solid #efefef`,
        },
        "&  .Freelancers": {
            color: "gray",
            cursor: "pointer",
            transition: "color .3s ease",
        },
        "&  .JobTitle": {
            color: "gray",
            transition: "color .3s ease",
            cursor: "pointer",
        },
        "&  .Workroom": {
            color: "gray",
            transition: "color .3s ease",
            cursor: "pointer",
        },
        "& .Freelancers:hover": {
            color: "#00c4cf",
            background: "#EBFCFC",
        },
        "& .JobTitle:hover": {
            color: "#00c4cf",
            background: "#EBFCFC",
        },
        "& .Workroom:hover": {
            color: "#00c4cf",
            background: "#EBFCFC",
        },
    },
}));

function Dashboard() {
    const [data, setData] = useState([]);

    const styleClasses = useStyles();

    return (
        <div className={classes.dashboard}>
            <div className={classes.dashboardPanel}>
                <DashboardPanel />
            </div>
            <div className={classes.dashboardResult}>
                <h1>Dashboard</h1>
                <div className={classes.counts}>
                    <div className={classes.count}>
                        <h3>$0.00</h3>
                        <p>Total Amount</p>
                    </div>
                    <div className={classes.count}>
                        <h3>0</h3>
                        <p>Contracts</p>
                    </div>
                    <div className={classes.count}>
                        <h3>0:00.00</h3>
                        <p>Total Logged</p>
                    </div>
                    <div className={classes.count}>
                        <h3>0</h3>
                        <p>Total Milestones</p>
                    </div>
                </div>
                <div className={classes.recent}>
                    <Subject className={classes.recentIcon} />
                    <h4>You have no recent contracts.</h4>
                    <h5>Look for work here Home</h5>
                </div>
                <div style={{ width: "100%", height: "300px", marginTop: "28px" }}>
                    <DataGrid
                        className={styleClasses.root}
                        onRowSelected={(newRow) => setData([newRow.data])}
                        columns={columns}
                        rows={rows}
                    />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
