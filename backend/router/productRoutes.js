const express = require("express")
const prodoductControler = require("../controller/prodoductControler")
const imageUpload = require("../middleware/imageUpload")
const Router = express.Router()

Router.post("/create/product", imageUpload.single("image"), prodoductControler.RegisterProduct)
Router.post("/read/product", prodoductControler.readProduct)
Router.get("/read/product1", prodoductControler.readProduct2)

Router.get("/read/single/:id", prodoductControler.ReadSingleData)


Router.put("/product/update/:id", imageUpload.single("image"), prodoductControler.UpdateData)

Router.delete("/product/delete/:id", prodoductControler.DeleteData);






module.exports = Router