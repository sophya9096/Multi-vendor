import * as React from "react";
import PropTypes from "prop-types";
import { DataGrid } from "@material-ui/data-grid";
import { useDemoData } from "@material-ui/x-grid-data-generator";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";

function customCheckbox(theme) {
    return {
        "& .MuiCheckbox-root svg": {
            width: 16,
            height: 16,
            backgroundColor: "transparent",
            border: `1px solid ${theme.palette.type === "light" ? "#d9d9d9" : "rgb(67, 67, 67)"}`,
            borderRadius: 2,
        },
        "& .MuiCheckbox-root svg path": {
            display: "none",
        },
        "& .MuiCheckbox-root.Mui-checked:not(.MuiCheckbox-indeterminate) svg": {
            backgroundColor: "#1890ff",
            borderColor: "#1890ff",
        },
        "& .MuiCheckbox-root.Mui-checked .MuiIconButton-label:after": {
            position: "absolute",
            display: "table",
            border: "2px solid #fff",
            borderTop: 0,
            borderLeft: 0,
            transform: "rotate(45deg) translate(-50%,-50%)",
            opacity: 1,
            transition: "all .2s cubic-bezier(.12,.4,.29,1.46) .1s",
            content: '""',
            top: "50%",
            left: "39%",
            width: 5.71428571,
            height: 9.14285714,
        },
        "& .MuiCheckbox-root.MuiCheckbox-indeterminate .MuiIconButton-label:after": {
            width: 8,
            height: 8,
            backgroundColor: "#1890ff",
            transform: "none",
            top: "39%",
            border: 0,
        },
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        border: 0,
        color: theme.palette.type === "light" ? "rgba(0,0,0,.85)" : "rgba(255,255,255,0.85)",
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
        WebkitFontSmoothing: "auto",
        letterSpacing: "normal",
        "& .MuiDataGrid-columnsContainer": {
            backgroundColor: theme.palette.type === "light" ? "yellow" : "yellow",
        },
        "& .MuiDataGrid-iconSeparator": {
            display: "block",
        },
        "& .MuiDataGrid-colCell, .MuiDataGrid-cell": {
            borderRight: `1px solid ${theme.palette.type === "light" ? "blue" : "purple"}`,
        },
        "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
            borderBottom: `1px solid ${theme.palette.type === "light" ? "#f0f0f0" : "#303030"}`,
        },
        "& .MuiDataGrid-cell": {
            color: theme.palette.type === "light" ? "rgba(0,0,0,.85)" : "rgba(255,255,255,0.65)",
        },
        "& .MuiPaginationItem-root": {
            borderRadius: 0,
        },
        ...customCheckbox(theme),
    },
}));

function CustomPagination(props) {
    const { state, api } = props;

    return (
        <Pagination
            color="primary"
            variant="outlined"
            shape="rounded"
            page={state.pagination.page}
            count={state.pagination.pageCount}
            // @ts-expect-error
            renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
            onChange={(event, value) => api.current.setPage(value)}
        />
    );
}

CustomPagination.propTypes = {
    /**
     * ApiRef that let you manipulate the grid.
     */
    api: PropTypes.shape({
        current: PropTypes.object.isRequired,
    }).isRequired,
    /**
     * The GridState object containing the current grid state.
     */
    state: PropTypes.object.isRequired,
};

export default function AntDesignGrid() {
    const { data } = useDemoData({
        dataSet: "Commodity",
        rowLength: 10,
        maxColumns: 10,
    });

    const classes = useStyles();

    return (
        <div style={{ height: 400, width: "100%" }}>
            <DataGrid
                className={classes.root}
                checkboxSelection
                pageSize={5}
                components={{
                    Pagination: CustomPagination,
                }}
                {...data}
            />
        </div>
    );
}
