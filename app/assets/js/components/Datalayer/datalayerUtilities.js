// Import the endpoints.
import { testlist } from '../Configuration/config_url';
// Import the axios Method.
import { getAPI, postAPI, putAPI, deleteAPI } from './axiosMethodCalls';


export const testList = async (array) => {
    try {
        const response = await getAPI(testlist);
        return response.data;
    }
    catch(error){
        console.log(`url: ${testlist} Axios request failed ${error}`);
    }
}
