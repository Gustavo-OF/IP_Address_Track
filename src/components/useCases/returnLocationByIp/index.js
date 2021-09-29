import { ApiIPLocation } from "./api"

export async function getLocationByIp(ip) {
    let response = await ApiIPLocation(ip);
    return response.data;
}