import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";

const rows = [
    {
        id: 1,
        col0: 1,
        col1: "$1500",
        col2: "Payooner",
        col3: "15th June 2020",
    },
    {
        col0: 2,
        id: 2,
        col1: "$1200",
        col2: "	PayPal :- themashabrandbusiness@gmail.com",
        col3: "15th June 2020",
    },
    {
        id: 3,
        col0: 3,
        col1: "$1600",
        col2: "	PayPal :- themashabrandbusiness@gmail.com",
        col3: "15th June 2020",
    },
    {
        id: 4,
        col0: 4,

        col1: "$1100",
        col2: "	Skrill :- themashabrand@gmail.com",
        col3: "15th June 2020",
    },
];

const columns = [
    { field: "col0", headerName: "Id", width: 100, cellClassName: "Freelancers" },
    { field: "col1", headerName: "Amount", width: 150, cellClassName: "Freelancers" },
    { field: "col2", headerName: "From", width: 400, cellClassName: "JobTitle" },
    { field: "col3", headerName: "Date Proceed", width: 250, cellClassName: "Assigned" },
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
        "& .JobTitle": {
            color: "#00c4cf",
        },
        "&  .Freelancers:hover , .JobTitle:hover  ,.Assigned:hover , .Proposal:hover , .Action:hover": {
            color: "#00c4cf",
            backgroundColor: "rgb(235, 252, 252) ",
        },
    },
}));

const styles = { background: "#fff", padding: "10px", paddingBottom: "1px", marginBottom: "10px", borderRadius: "10px" };

function Offers() {
    const [data, setData] = useState([]);

    const styleClasses = useStyles();

    return (
        <div className={""}>
            <div style={styles}>
                <h5 style={{ color: "#00c4cf" }}>Next Payouts.</h5>
                <p style={{ color: "gray" }}>Your next Payout of $1700 will be on 15th March 2021</p>
            </div>
            <h1 style={{ marginBottom: "25px" }}>Withdrawls</h1>

            <div style={{ width: "100%", height: "350px" }}>
                <DataGrid className={styleClasses.root} onRowSelected={(newRow) => setData([newRow.data])} columns={columns} rows={rows} />
            </div>
        </div>
    );
}

export default Offers;
