import React from "react";
import AddJob from "../components/AddJob";
import JobPosted from "../components/JobPosted";
import { useHistory } from "react-router-dom";

function Job({ addJob }) {
    const history = useHistory();

    console.log(history.location.pathname);

    return <div className={""}> {addJob ? <AddJob /> : <JobPosted />} </div>;
}

export default Job;
