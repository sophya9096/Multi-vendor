import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";

const rows = [
    {
        id: 1,
        col0: 1,
        col1: "I need a designer to design a logo & questionnaire for a Nutrition Company",
        col2: "Assigned",
        col3: "View Proposal",
        col4: "Go to Work",
    },
    {
        col0: 2,
        col0: 2,

        id: 2,
        col1: "I need a designer to design a logo & questionnaire for a Nutrition Company",
        col2: "Assigned",
        col3: "View Proposal",
        col4: "Go to Work",
    },
    {
        id: 3,
        col0: 3,
        col1: "I need a designer to design a logo & questionnaire for a Nutrition Company",
        col2: "Assigned",
        col3: "View Proposal",
        col4: "Go to Work",
    },
    {
        id: 4,
        col0: 4,

        col1: "I need a designer to design a logo & questionnaire for a Nutrition Company",
        col2: "Assigned",
        col3: "View Proposal",
        col4: "Go to Work",
    },
    {
        id: 5,
        col0: 5,

        col1: "I need a designer to design a logo & questionnaire for a Nutrition Company",
        col2: "Assigned",
        col3: "View Proposal",
        col4: "Go to Work",
    },
    {
        id: 6,
        col0: 6,

        col1: "I need a designer to design a logo & questionnaire for a Nutrition Company",
        col2: "Assigned",
        col3: "View Proposal",
        col4: "Go to Work",
    },
    {
        col0: 7,
        id: 7,
        col1: "I need a designer to design a logo & questionnaire for a Nutrition Company",
        col2: "Assigned",
        col3: "View Proposal",
        col4: "Go to Work",
    },
];

const columns = [
    { field: "col0", headerName: "Id", width: 100, cellClassName: "Freelancers" },
    { field: "col1", headerName: "Job Title", width: 400, cellClassName: "JobTitle" },
    { field: "col2", headerName: "Assigned", width: 150, cellClassName: "Assigned" },
    { field: "col3", headerName: "Proposal", width: 150, cellClassName: "Proposal" },
    { field: "col4", headerName: "Action", width: 150, cellClassName: "Action" },
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
        "&  .Freelancers , .JobTitle  ,.Assigned , .Proposal , .Action": {
            fontSize: "16px",
            color: "gray",
            cursor: "pointer",
            transition: "all .3s ease",
        },
        "&  .Freelancers:hover , .JobTitle:hover  ,.Assigned:hover , .Proposal:hover , .Action:hover": {
            color: "#00c4cf",
            backgroundColor: "rgba(0,0,0,.1)",
        },
    },
}));

function YourProposals() {
    const [data, setData] = useState([]);

    const styleClasses = useStyles();

    return (
        <div className={""}>
            <h1 style={{ marginBottom: "25px" }}>Your Proposals</h1>
            <div style={{ width: "100%", height: "450px" }}>
                <DataGrid className={styleClasses.root} onRowSelected={(newRow) => setData([newRow.data])} columns={columns} rows={rows} />
            </div>
        </div>
    );
}

export default YourProposals;
