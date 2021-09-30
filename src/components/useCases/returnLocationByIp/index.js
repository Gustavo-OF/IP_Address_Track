//  Importação do arquivo de API.
import { ApiIPLocation } from "./api"
//  Fim importação da API.

/**
 * Realiza a chamada da API de buscar a localização.
 * @param {String} ip 
 * @returns 
 */
export async function getLocationByIp(ip) {
    let response = await ApiIPLocation(ip);
    return response.data;
}