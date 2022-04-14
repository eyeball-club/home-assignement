// Import the endpoints.
import { competitionslist } from '../Configuration/config_url';
// Import the axios Method.
import { getAPI, postAPI, putAPI, deleteAPI } from './axiosMethodCalls';


export const getCompetitionData = async (array) => {
    try {
        const response = await getAPI(competitionslist);
        return response.data;
    }
    catch(error){
        console.log(`url: ${competitionslist} Axios request failed ${error}`);
    }
}
