import { checkSignin } from './../middleware/checksignin';
import { getAllBooksController, addBookController, updateBookController, deleteBookController } from './../controllers/BookController/index';
import { signupController } from '../controllers/auth/SignupController';
import { loginController } from '../controllers/auth/LoginController';
import { Router } from 'express';

const router = Router();


router.post('/signup', signupController);
router.post('/login', loginController);
router.get('/shelf', getAllBooksController);
router.post('/shelf', checkSignin, addBookController);
router.put('/shelf/:id', checkSignin, updateBookController);
router.delete('/shelf/:id', checkSignin, deleteBookController);


router.get('/user', checkSignin, (req: any, res: any) => {
    res.json(req.user);
    
});


// router.get('/shelf', async (request, response) => {
//     const rows = await connection.execute('SELECT * FROM bookshelf.shelf', [])
//     response.json(rows);
//     // console.log(rows);
// });


// router.post('/shelf', async (request, response) => {
//     const rows = await connection.execute('INSERT INTO shelf (book_name, author) VALUES (?, ?)', [request.body.book_name, request.body.author]);
//     response.json(rows);
// });


// router.put('/shelf/:id', async (request, response) => {
//     const rows = await connection.execute('UPDATE shelf SET book_name = ?, author = ? WHERE id = ?', [request.body.book_name, request.body.author, request.params.id]);
//     response.json(rows);
// });

// router.delete('/shelf/:id', async (request, response) => {
//     const rows = await connection.execute('DELETE FROM shelf WHERE id = ?', [request.params.id]);
//     response.json(rows);
// });

export default router;