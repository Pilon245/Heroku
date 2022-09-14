import express, {Request , Response} from  'express'
import bodyParser from 'body-parser'
import {productsRouter} from "./routes/products-router";
import {addressesRouter} from "./routes/addresses-router";

//create express app
const app = express()

const port = process.env.PORT || 5000

const parserMiddleware = bodyParser({})
app.use(parserMiddleware)

app.use('/products', productsRouter)
app.use('/addresses', addressesRouter)

//starp app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// app.get('/', (req: Request , res:Response) => {
//     let helloMessage = 'Hello INCUBATOR!!!';
//     res.send(helloMessage)
//
// })