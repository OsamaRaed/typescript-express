import * as connection from '../../../connection';

export const login = async (email: string,password: string) => {
    const rows = await connection.execute('SELECT * FROM bookshelf.users WHERE email = ? AND password = ?', [email,password]);
    return rows;
}

export const getUser = async (email: string) => {
    const rows = await connection.execute('SELECT * FROM bookshelf.users WHERE email = ?', [email]);
    return rows;
}