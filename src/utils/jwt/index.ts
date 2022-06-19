import { verify, sign } from "jsonwebtoken";


export const signJWT = (payload: any, secret: string): string => {
    return sign(payload, secret);
}

export const verifyJWT = (token: string, secret: string) => {
    return verify(token, secret);
}