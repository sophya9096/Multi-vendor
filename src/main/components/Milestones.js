import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import classes from "./Milestones.module.css";
import { Button, TextField } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { DataGrid } from "@material-ui/data-grid";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

function JobPosted() {
    const [rows, setRows] = useState([
        {
            id: 1,
            col0: 1,
            col1: "30%",
            col2: "Research",
            col3: "$195",
            col4: "20th July 2020",
            col5: "20th May 2021",
            col6: "Not Paid",
            col7: "Pay With Paypal",
        },
        {
            id: 2,
            col0: 2,
            col1: "50%",
            col2: "Design",
            col3: "$215",
            col4: "20th July 2020",
            col5: "20th May 2021",
            col6: "Not Paid",
            col7: "Pay With Paypal",
        },
        {
            id: 3,
            col0: 3,
            col1: "60%",
            col2: "Graphics",
            col3: "$150",
            col4: "20th July 2020",
            col5: "20th May 2021",
            col6: "Not Paid",
            col7: "Pay With Paypal",
        },
        {
            id: 4,
            col0: 4,
            col1: "85%",
            col2: "Development",
            col3: "$505",
            col4: "20th July 2020",
            col5: "20th May 2021",
            col6: "Not Paid",
            col7: "Pay With Paypal",
        },
    ]);

    const columns = [
        { field: "col0", headerName: "Id", width: 100, cellClassName: "Freelancers" },
        { field: "col1", headerName: "Progress", width: 120, cellClassName: "title" },
        { field: "col2", headerName: "Name", width: 100, cellClassName: "JobTitle" },
        { field: "col3", headerName: "Budget", width: 100, cellClassName: "Public" },
        { field: "col4", headerName: "Date to Start", width: 180, cellClassName: "clicks" },
        { field: "col5", headerName: "Date to End", width: 180, cellClassName: "views" },
        { field: "col6", headerName: "Paid", width: 100, cellClassName: "active" },
        { field: "col7", headerName: "Action", width: 180, cellClassName: "action" },
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
            "& .title , .action": {
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

    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [col1, setCol1] = useState("");
    const [col2, setCol2] = useState("");
    const [col3, setCol3] = useState("");
    const [col4, setCol4] = useState("");
    const [col5, setCol5] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClick = () => {
        setRows([
            ...rows,
            {
                id: rows.length + 1,
                col0: rows.length + 1,
                col1: col1 + "%",
                col2,
                col3,
                col4,
                col5,
                col6: "not paid",
                col7: "Pay With Paypal",
            },
        ]);
        setCol1("");
        setCol2("");
        setCol3("");
        setCol4("");
        setCol5("");
        handleClose();
    };

    console.log({ col1, col2, col3, col4, col5 });

    const styleClasses = useStyles();

    return (
        <div className={classes.milestones}>
            <div className={classes.milestonesHead}>
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    Add Milestones
                </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add Milestones</DialogTitle>
                    <DialogContent>
                        <TextField
                            onChange={(e) => setCol2(e.target.value)}
                            style={{ margin: "15px auto" }}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            onChange={(e) => setCol3(e.target.value)}
                            style={{ margin: "15px auto" }}
                            autoFocus
                            margin="dense"
                            id="budget"
                            label="Budget"
                            type="text"
                            fullWidth
                        />
                        {/* <TextField
                            onChange={(e) => setCol3(e.target.value)}
                            style={{ margin: "15px auto" }}
                            autoFocus
                            margin="dense"
                            id="discription"
                            label="discription"
                            type="text"
                            fullWidth
                        /> */}
                        <TextField
                            onChange={(e) => setCol1(e.target.value)}
                            style={{ margin: "15px auto" }}
                            autoFocus
                            margin="dense"
                            id="progress"
                            label="Progress"
                            type="number"
                            fullWidth
                        />
                        <TextField
                            onChange={(e) => setCol4(e.target.value)}
                            style={{ margin: "15px auto" }}
                            autoFocus
                            margin="dense"
                            id="start-date"
                            label="Start Data"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            onChange={(e) => setCol5(e.target.value)}
                            style={{ margin: "15px auto" }}
                            autoFocus
                            margin="dense"
                            id="end-date"
                            label="End Date"
                            type="text"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleClick} color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>{" "}
            <div style={{ width: "100%", height: "350px" }}>
                <DataGrid className={styleClasses.root} onRowSelected={(newRow) => setData([newRow.data])} columns={columns} rows={rows} />
            </div>
        </div>
    );
}

export default JobPosted;
