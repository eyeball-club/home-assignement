// Import the endpoints.
import { competitionslist, matchlist, teamslist } from '../Configuration/config_url';
// Import the axios Method.
import { getAPI, postAPI, putAPI, deleteAPI } from './axiosMethodCalls';

function concatarray (array) {
    var queryString = Object.keys(array).map(key => key + '=' + array[key]).join('&');
    return '?'+queryString;
}

export const getCompetitionData = async (array) => {
    try {
        const response = await getAPI(competitionslist);
        return response.data;
    }
    catch(error){
        console.log(`url: ${competitionslist} Axios request failed ${error}`);
    }
}

export const getmatchData = async (array) =>{
    try {
        var queryString = concatarray(array);
        const response = await getAPI(matchlist+queryString);
        return response.data;
    } 
    catch (error) {
        console.log(`url: ${matchlist} Axios request failed ${error}`);
    }
}

export const getteamData = async (array) => {
    try {
        var queryString = concatarray(array);
        const response = await getAPI(teamslist+queryString,);
        return response.data;
    }
    catch(error){
        console.log(`url: ${competitionslist} Axios request failed ${error}`);
    }
}