import { comparePassword } from "../../../utils/bcrypt";
import { getUser } from "../../../database/queries/auth/login";
import { signJWT } from "../../../utils/jwt";

export const loginController = async (req: any, res: any): Promise<void>  => {
    const { email, password } = req.body;
    const user: any = await getUser(email);
    if (user.length == 0) {
        res.status(400).json({
            message: 'User does not exist'
        });
    }
    console.log(user[0]);
    const compare = await comparePassword(password, user[0].password);
    if (compare) {
        const token = signJWT({ id: user.id },"secret");
        res.status(200).json({
            token: token,
        });
    } else {
        res.status(400).json({
            message: 'Invalid credentials'
        });
    }
}