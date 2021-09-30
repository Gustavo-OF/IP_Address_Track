import { ApiReturnUserIp } from "./api"

export async function getIp(ip) {
    if (ip !== ""){
        return ip
    }else{
        let response = await ApiReturnUserIp();
        return response.IPv4;
    }
}