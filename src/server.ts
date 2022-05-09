import express from 'express';
const app = express()
const port = 3000

app.get('/', (request, response) => {
    response.json({hello: 'Im configuring Node Type Script'})
 })

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})