import express, { request, response } from "express";
import mongoose from "mongoose";
import { PORT, MongoDBURL } from "./config.js";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';

const app = express();

//Middleware for parsing request body
app.use(express.json());

//middleware for Handling CORS Policy
//Option 1: Allow all Origins with default of cors(*)
app.use(cors());
//Option 2: Allow custom Origins
//app.use(
//    cors({
//        origin: 'http://localhost:3000',
//        methods: ['GET','POST','PUT','DELETE'],
//        allowedHeaders: ['Content-Type'],
//    })
//);

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To My page');
});

app.use('/books',booksRoute)

app.listen(PORT, () => {
    console.log(`App is listening to the port:${PORT}`);
})

mongoose
    .connect(MongoDBURL)
    .then(() => {
        console.log('App Connected to database');
    })
    .catch(() => {
        console.log(error);
    })