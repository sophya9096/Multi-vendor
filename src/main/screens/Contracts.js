import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import classes from "./Contracts.module.css";
import DashboardPanel from "./DashboardPanel";

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
            border: `1px solid #d1d1d1`,
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
        },
        "& .JobTitle:hover": {
            color: "#00c4cf",
        },
        "& .Workroom:hover": {
            color: "#00c4cf",
        },
    },
}));

function Contracts() {
    const [data, setData] = useState([]);

    const styleClasses = useStyles();

    return (
        <div className={classes.contracts}>
            <div className={classes.dashboardPanel}>
                <DashboardPanel />
            </div>
            <div className={classes.contractResult}>
                <h1 style={{ marginBottom: "20px" }}>Contracts</h1>
                <div style={{ width: "100%", height: "450px" }}>
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

export default Contracts;
