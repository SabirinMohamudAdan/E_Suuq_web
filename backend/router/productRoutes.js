// const express = require("express")
// const prodoductControler = require("../controller/prodoductControler")
// const imageUpload = require("../middleware/imageUpload")
// const Router = express.Router()

// Router.post("/create/product", imageUpload.single("image"), prodoductControler.RegisterProduct)
// Router.post("/read/product", prodoductControler.readProduct)
// Router.get("/read/product1", prodoductControler.readProduct2)

// Router.get("/read/single/:id", prodoductControler.ReadSingleData)


// Router.put("/product/update/:id", imageUpload.single("image"), prodoductControler.UpdateData)

// Router.delete("/product/delete/:id", prodoductControler.DeleteData);






// module.exports = Router


const express = require("express");
const productController = require("../controller/productController");
const imageUpload = require("../middleware/imageUpload");
const router = express.Router();

// Corrected endpoint paths and fixed typo in controller name
router.post("/products", imageUpload.single("image"), productController.RegisterProduct);
router.post("/products/filter", productController.readProduct);
router.get("/products", productController.readProduct2);
router.get("/products/:id", productController.ReadSingleData);
router.put("/products/:id", imageUpload.single("image"), productController.UpdateData);
router.delete("/products/:id", productController.DeleteData);

module.exports = router;