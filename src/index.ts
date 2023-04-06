import express, { Express, Request, Response } from 'express';

const app: Express = express();
app.use(express.json());
const port: number = 8080;

app.get('/', async (_: Request, res: Response) => {
    res.status(200).send('Hello, World!');
});

app.listen(port, async () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
