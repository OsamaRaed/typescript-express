import { checkUser, signup } from "../../../database/queries/auth/signup";
import { hashPassword } from '../../../utils/bcrypt';

export const signupController = async (req: any, res: any) : Promise<void> => {
    const { name, email, password } = req.body;
    const hashedPassword: string = await hashPassword(password);
    const user : any = await checkUser(email);
    if (user.length > 0) {
        res.status(400).json({
            message: 'User already exists'
        });
    } else {
        const rows = await signup(name, email, hashedPassword);
        res.status(201).json({
            message: 'User created successfully'
        });
    }
}