import { CardActions } from "@material-ui/core";
import { Switch } from "react-router-dom";

export const initialState = {
    user: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return state;
    }
};

export default reducer;
