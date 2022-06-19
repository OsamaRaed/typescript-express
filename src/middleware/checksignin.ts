import { verifyJWT } from "../utils/jwt";

export const checkSignin = async (req: any, res: any, next: any) => {
    const token = req.headers.authorization.split(' ')[1];;
    if (token) {
        console.log(token);
        const decoded = verifyJWT(token,"secret");
        if (decoded) {
            req.user = decoded;
            next();
        } else {
            res.status(401).json({
                message: 'Invalid token'
            });
        }
    } else {
        res.status(401).json({
            message: 'No token provided'
        });
    }
}