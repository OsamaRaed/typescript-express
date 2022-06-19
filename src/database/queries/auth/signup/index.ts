import * as connection from '../../../connection';


export const checkUser = async (email: string) => {
    const rows = await connection.execute('SELECT * FROM bookshelf.users WHERE email = ?', [email]);
    return rows;
}

export const signup = async (name: string, email: string, password: string) => {
    const rows = await connection.execute('INSERT INTO `users`(`name`, `email`, `password`) VALUES (?, ?, ?)', [name,email,password]);
    return rows;
}
