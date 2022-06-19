import bcrypt, { compare } from 'bcrypt';

export const hashPassword = async (password: string) : Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

export const comparePassword = async (password: string, hashedPassword: string) : Promise<boolean> => {
    console.log(password, hashedPassword);
    const isValid = await compare(password, hashedPassword);
    return isValid;
}