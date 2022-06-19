import * as express from 'express';
import * as connection from './utils/mysql.connector';

const router = express.Router();

router.get('/shelf', async (request, response) => {
    const rows = await connection.execute('SELECT * FROM bookshelf.shelf', [])
    response.json(rows);
    // console.log(rows);
});


router.post('/shelf', async (request, response) => {
    const rows = await connection.execute('INSERT INTO shelf (book_name, author) VALUES (?, ?)', [request.body.book_name, request.body.author]);
    response.json(rows);
});


router.put('/shelf/:id', async (request, response) => {
    const rows = await connection.execute('UPDATE shelf SET book_name = ?, author = ? WHERE id = ?', [request.body.book_name, request.body.author, request.params.id]);
    response.json(rows);
});

router.delete('/shelf/:id', async (request, response) => {
    const rows = await connection.execute('DELETE FROM shelf WHERE id = ?', [request.params.id]);
    response.json(rows);
});

export default router;