import express, { urlencoded } from 'express'
import cors  from 'cors'
import 'dotenv/config'
import { connectDB } from './db/connectDB.js';
import projectRouter from './router/projectRouter.js';
import contactRouter from './router/contactRouter.js';



const Port = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/v1/project', projectRouter);
app.use('/api/v1/contact', contactRouter);

await connectDB();

app.listen(Port, ()=>{
    console.log(`Server has started at port ${Port}`);
})