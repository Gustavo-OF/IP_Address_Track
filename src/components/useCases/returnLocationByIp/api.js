//  Importação do Axios.
import axios from "axios";
//  Fim importação do Axios.

/**
 * Realiza a pesquisa no IpiFy para trazer as informações do usuário de acordo com o IP.
 * @param {String} ip 
 * @returns Array
 */
export async function ApiIPLocation(ip) {
    try{
        let res = await axios.get(`https://geo.ipify.org/api/v1?apiKey=at_FH7zpyLyrK4uP6vMvrtg2hGaADKmq&ipAddress=${ip}`);
        return res;
    }catch(err){
        return err;
    }
}