import { ApiReturnUserIp } from "./api"

export async function getUserIp() {
    let response = await ApiReturnUserIp();
    return response.IPv4;
}