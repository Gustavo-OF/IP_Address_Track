import axios from "axios";

export async function ApiIPLocation(ip) {
    try{
        let res = await axios.get(`https://geo.ipify.org/api/v1?apiKey=at_FH7zpyLyrK4uP6vMvrtg2hGaADKmq&ipAddress=${ip}`);
        return res;
    }catch(err){
        return err;
    }
}