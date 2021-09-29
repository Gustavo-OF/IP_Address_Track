import axios from "axios";

const api = axios.create({
    baseURL: "https://geo.ipify.org/api/v1?apiKey=at_FH7zpyLyrK4uP6vMvrtg2hGaADKmq&"
});

export async function ApiIPLocation(ip) {
    try{
        let res = await api.get(`ipAddress=${ip}`)
        return res;
    }catch(err){
        return err;
    }
}