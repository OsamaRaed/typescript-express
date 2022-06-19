import { getBooks, addBook, updateBook, deleteBook } from "../../database/queries/books";


export const getAllBooksController = async (req: any, res: any) => {
    const rows = await getBooks();
    res.status(200).json({
        books: rows
    });
}

export const addBookController = async (req: any, res: any) => {
    const { book_name, author } = req.body;
    const rows = await addBook(book_name, author);
    res.status(201).json({
        message: 'Book added successfully'
    });
}

export const updateBookController = async (req: any, res: any) => {
    const { book_name, author, id } = req.body;
    const rows = await updateBook(book_name, author, id);
    res.status(200).json({
        message: 'Book updated successfully'
    });
}


export const deleteBookController = async (req: any, res: any) => {
    const { id } = req.params;
    const rows = await deleteBook(id);
    res.status(200).json({
        message: 'Book deleted successfully'
    });
}