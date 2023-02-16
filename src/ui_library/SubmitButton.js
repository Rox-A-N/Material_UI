import React from "react";
import  Button  from "@material-ui/core/Button";
import { Search, Call, Mood } from "@material-ui/icons";

function SubmitButton() {

    return (
        <Button variant="contained" color="secondary">
            <Mood  color="primary" />
            </Button>
    )
}


export default SubmitButton;