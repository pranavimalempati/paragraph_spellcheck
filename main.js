const express= require('express')
const router =require('./router/paragraph_router')
require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
const main =express()
main.use(bodyParser.urlencoded({extended:true}))
main.use(bodyParser.json())
main.use(cors())
function run() {
    main.use("/", router)
    //run server
    main.listen(process.env.PORT, () => {
        console.log(`server is listining at ${process.env.PORT}`)
    })
}
run()
