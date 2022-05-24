
import 'reflect-metadata';
import express from 'express';
import {UsersController} from "./Controllers/UsersController";

const app = express()
const port = process.env.PORT || 3000

app.get('/', (request, response) => {
    response.json({hello: 'Im configuring Node Type Script'})
 })

app.listen(port, () => {
    console.log(`running on port ${port}`);
})