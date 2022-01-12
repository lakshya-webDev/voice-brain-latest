import {
    HOME_DATA_FAIL,
    HOME_DATA_SUCCESS,
    HOME_DATA_REQUEST,
} from "../constants/homeConstants";

export const homeReducer = (state = { homeData: [] }, action) => {
    switch (action.type) {
        case HOME_DATA_REQUEST:
            return {
                loading: true,
                homeData: [],
            };
        case HOME_DATA_SUCCESS:
            return {
                loading: false,
                homeData: action.payload,
            };
        case HOME_DATA_FAIL:
            return {
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};