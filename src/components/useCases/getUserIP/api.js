//  Importação do Axios.
import axios from "axios";
//  Fim importação do Axios.

//  Base URL para não precisar digitar
const api = axios.create({
    baseURL: "https://geolocation-db.com/json/"
});

/**
 * Api para pegar o IP da sessão atual do usuário.
 * @returns 
 */
export async function ApiReturnUserIp() {
    try{
        let res = await api.get();
        return res.data;
    }catch(err){
        return err;
    }
}

