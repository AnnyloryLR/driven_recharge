import express, { Request, Response, json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import phonesRouter from './routers/phones-router';
import rechargesRouter from './routers/recharges-router';

dotenv.config();

const app = express();

app.use(cors());
app.use(json());

app.get("/health", (req: Request, res: Response) => {
    res.sendStatus(200);    
});

app.use(phonesRouter);
app.use(rechargesRouter);

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server is up and running on port ${port}!`))

