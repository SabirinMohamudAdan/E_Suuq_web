// const productModel = require("../model/productModel");
// const fs = require("fs");
// const path = require("path");

// // Create product
// const RegisterProduct = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ error: "Product image is required" });
//     }

//     const newProduct = new productModel({
//       prName: req.body.prName,
//       description: req.body.description,
//       price: parseFloat(req.body.price),
//       category: req.body.category,
//       image: req.file.filename
//     });

//     const savedProduct = await newProduct.save();
//     res.status(201).json({
//       message: "Product created successfully",
//       product: savedProduct
//     });
//   } catch (error) {
//     console.error("Create Product Error:", error);
//     res.status(500).json({ 
//       error: "Server error",
//       details: error.message 
//     });
//   }
// };

// // Get all products with optional filtering
// const readProduct = async (req, res) => {
//   try {
//     const { category, search } = req.body;
//     let filter = {};

//     if (category && category !== "All") {
//       filter.category = category;
//     }

//     if (search) {
//       filter.$or = [
//         { prName: { $regex: search, $options: "i" } },
//         { description: { $regex: search, $options: "i" } }
//       ];
//     }

//     const products = await productModel.find(filter);
//     res.status(200).json(products);
//   } catch (error) {
//     console.error("Read Products Error:", error);
//     res.status(500).json({ 
//       error: "Server error",
//       details: error.message 
//     });
//   }
// };

// // Get single product by ID
// const ReadSingleData = async (req, res) => {
//   try {
//     const product = await productModel.findById(req.params.id);
//     if (!product) {
//       return res.status(404).json({ error: "Product not found" });
//     }
//     res.status(200).json(product);
//   } catch (error) {
//     console.error("Single Product Error:", error);
//     res.status(500).json({ 
//       error: "Invalid product ID",
//       details: error.message 
//     });
//   }
// };

// // Update product by ID
// const UpdateData = async (req, res) => {
//   try {
//     const updates = {
//       prName: req.body.prName,
//       description: req.body.description,
//       price: parseFloat(req.body.price),
//       category: req.body.category,
//     };

//     if (req.file) {
//       // Delete old image if new one is uploaded
//       const product = await productModel.findById(req.params.id);
//       if (product.image) {
//         const imagePath = path.join(__dirname, "../uploads", product.image);
//         fs.unlinkSync(imagePath);
//       }
//       updates.image = req.file.filename;
//     }

//     const updatedProduct = await productModel.findByIdAndUpdate(
//       req.params.id,
//       updates,
//       { new: true, runValidators: true }
//     );

//     if (!updatedProduct) {
//       return res.status(404).json({ error: "Product not found" });
//     }

//     res.status(200).json({
//       message: "Product updated successfully",
//       product: updatedProduct
//     });
//   } catch (error) {
//     console.error("Update Product Error:", error);
//     res.status(500).json({ 
//       error: "Server error",
//       details: error.message 
//     });
//   }
// };

// // Delete product by ID
// const DeleteData = async (req, res) => {
//   try {
//     const product = await productModel.findByIdAndDelete(req.params.id);
    
//     if (!product) {
//       return res.status(404).json({ error: "Product not found" });
//     }

//     // Delete associated image file
//     if (product.image) {
//       const imagePath = path.join(__dirname, "../uploads", product.image);
//       fs.unlinkSync(imagePath);
//     }

//     res.status(200).json({ 
//       message: "Product deleted successfully",
//       deletedProduct: product 
//     });
//   } catch (error) {
//     console.error("Delete Product Error:", error);
//     res.status(500).json({ 
//       error: "Server error",
//       details: error.message 
//     });
//   }
// };

// module.exports = { 
//   RegisterProduct, 
//   readProduct, 
//   ReadSingleData, 
//   UpdateData, 
//   DeleteData 
// };


