import axios from "axios";

const api = axios.create({
    baseURL: "https://geolocation-db.com/json/"
});

export async function ApiReturnUserIp() {
    try{
        let res = await api.get();
        return res.data;
    }catch(err){
        return err;
    }
}

