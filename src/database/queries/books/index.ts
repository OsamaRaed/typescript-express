import * as connection from '../../../database/connection';


export const getBooks = async () => {
    const rows = await connection.execute('SELECT * FROM bookshelf.shelf', []);
    return rows;
}

export const addBook = async (book_name: string, author: string) => {
    const rows = await connection.execute('INSERT INTO shelf (book_name, author) VALUES (?, ?)', [book_name, author]);
    return rows;
}

export const updateBook = async (book_name: string, author: string, id: number) => {
    const rows = await connection.execute('UPDATE shelf SET book_name = ?, author = ? WHERE id = ?', [book_name, author, id]);
    return rows;
}

export const deleteBook = async (id: number) => {
    const rows = await connection.execute('DELETE FROM shelf WHERE id = ?', [id]);
    return rows;
}
