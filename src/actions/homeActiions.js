import {
    HOME_DATA_FAIL,
    HOME_DATA_SUCCESS,
    HOME_DATA_REQUEST,
} from '../constants/homeConstants';
import axios from 'axios';




export const home = () => async (dispatch) => {
    try {
        dispatch({ type: HOME_DATA_REQUEST });

        // const config = { headers: { 'Content-Type': 'application/json' } };
        const { data } = await axios.get(
            'http://localhost:1337/api/homepages?populate[mainSection]=*&populate[missionSection][populate]=mission,ethos&populate[barbarians][populate]=image&populate[serviceSection][populate][serviceInfo]=*&populate[whatWeDoSection][populate]=information&populate[ourProcessSection]=*&populate[tageLineSection]=*'
            // config
        );
        console.log("data", data);
        dispatch({
            type: HOME_DATA_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: HOME_DATA_FAIL,
            payload: error.response.data.message
        });
    }
}