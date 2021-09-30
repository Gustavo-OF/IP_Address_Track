//  Importação da função de realizar a pesquisa pelo Axios.
import { ApiReturnUserIp } from "./api"
//  Fim importação da função.

/**
 * Valida se o usuário digitou um IP. Caso não tenha digitado, captura o IP da sessão dele
 * e retorna. 
 * @param {String} ip 
 * @returns 
 */
export async function getIp(ip) {
    if (ip !== ""){
        return ip
    }else{
        let response = await ApiReturnUserIp();
        return response.IPv4;
    }
}