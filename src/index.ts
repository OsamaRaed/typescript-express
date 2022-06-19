import express, { Express, Request, Response } from 'express';
import router from './router';
import { init } from './database/connection';



const app: Express = express();

init();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});
// error 
app.use(function (err : any, req: Request, res: Response, next: any) {
    res.status(err.status || 500);
    res.json(err.message);
});
const port: number = 4000;
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
