const express = require("express")
const mongoose = require("mongoose")
const connectedToMongodb = require("./db/db")
const productRouter = require("./router/productRoutes")
const cors = require("cors")
const port = 4002;
const app = express()
app.use(express.json())
app.use(cors())


app.use(productRouter)
app.use("/allimages" , express.static("document"))
app.listen(port, () => {
        connectedToMongodb
        console.log(`server is running port number ${port}`)
})