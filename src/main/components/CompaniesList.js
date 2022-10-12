import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";

const rows = [
    {
        id: 1,
        col0: 1,
        col1: "Engro Co.",
        col2: "5 days",
        col3: "$15",
        col4: "1000",
        col5: "879",
        col6: "Ended",
        col7: "20th July 2020",
        col8: "20th May 2021",
    },
    {
        col0: 2,
        col0: 2,

        id: 2,
        col1: "Whitz CO.",
        col2: "5 days",
        col3: "$15",
        col4: "1000",
        col5: "879",
        col6: "Still Active",
        col7: "20th July 2020",
        col8: "20th May 2021",
    },
    {
        id: 3,
        col0: 3,
        col1: "Saphire  Co.",
        col2: "5 days",
        col3: "$15",
        col4: "1000",
        col5: "879",
        col6: "Ended",
        col7: "20th July 2020",
        col8: "20th May 2021",
    },
    // {
    //     id: 4,
    //     col0: 4,
    //     col1: "Kevin Peterson",
    //     col2: "5 days",
    //     col3: "$15",
    //     col4: "1000",
    //     col5: "879",
    //     col6: "Still Active",
    //     col7: "20th July 2020",
    //     col8: "20th May 2021",
    // },
];

const columns = [
    { field: "col0", headerName: "Id", width: 100, cellClassName: "Freelancers" },
    { field: "col1", headerName: "Company", width: 150, cellClassName: "title" },
    { field: "col2", headerName: "Days Featured", width: 100, cellClassName: "JobTitle" },
    { field: "col3", headerName: "Cost", width: 100, cellClassName: "Public" },
    { field: "col4", headerName: "Clicks", width: 100, cellClassName: "clicks" },
    { field: "col5", headerName: "Views", width: 100, cellClassName: "views" },
    { field: "col6", headerName: "Active", width: 100, cellClassName: "active" },
    { field: "col7", headerName: "Date Started", width: 150, cellClassName: "Action" },
    { field: "col8", headerName: "Date to End", width: 150, cellClassName: "Action" },
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
        "&  .Proposals ,  .Public  , .Action  ,.Freelancers , .JobTitle , .Workroom": {
            color: "gray",
            transition: "color .3s ease",
            cursor: "pointer",
        },
        "& .title , .clicks , .views": {
            color: "#00c4cf",
            fontSize: "18px",
        },
        "& .active": {
            color: "red",
            fontSize: "16px",
        },
        "& .Public:hover  , .Proposals:hover , .Action:hover , .Freelancers:hover , .JobTitle:hover , .Workroom:hover ": {
            color: "#00c4cf",
        },
    },
}));

function JobPosted() {
    const [data, setData] = useState([]);

    const styleClasses = useStyles();

    return (
        <div>
            <h1 style={{ marginBottom: "25px" }}>Your Companies Featured</h1>
            <div style={{ width: "100%", height: "300px" }}>
                <DataGrid className={styleClasses.root} onRowSelected={(newRow) => setData([newRow.data])} columns={columns} rows={rows} />
            </div>
        </div>
    );
}

export default JobPosted;
