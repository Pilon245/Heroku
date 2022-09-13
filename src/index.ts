import express, {Request , Response} from  'express'
//import bodyParser from 'body-parser'  //
//import cors from 'cors'  //

const app = express()

//const corsMiidleware = cors(); //
//app.use(corsMiidleware)  //
//const jsonBodyMiddleware = bodyParser.json()  //
//app.use(jsonBodyMiddleware) //

const port = process.env.PORT || 5000

//let videos = [...] //

app.get('/', (req: Request , res:Response) => {
    let helloMessage = 'Hello INCUBATOR!!!';
    res.send(helloMessage)

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})