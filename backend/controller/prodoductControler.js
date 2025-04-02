
const productModel = require("../model/productModel");

// Create product
const RegisterProduct = async (req, res) => {
    try {
        const newData = new productModel({
            prName: req.body.prName,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: req.file ? req.file.filename : null 
        });

        const SaveData = await newData.save();
        res.status(201).json(SaveData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};



//read data
const readProduct2 = async (req, res) => {
    try {
        const readData = await productModel.find()
        res.status(200).json(readData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};

// end




const readProduct = async (req, res) => {
    try {
        const { category } = req.body; 
        let filterData = {};
        if (category) {
            filterData.category = category;
        }
        const readData = await productModel.find(filterData)
        res.status(200).json(readData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};


// Read single product by ID
const ReadSingleData = async (req, res) => {
    try {
        const GetSingleData = await productModel.findById( req.params.id);
        if (!GetSingleData) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json(GetSingleData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};

// Update product by ID
const UpdateData = async (req, res) => {
    try {
        const updatedProduct = await productModel.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    prName: req.body.prName,
                    description: req.body.description,
                    price: req.body.price,
                    category: req.body.category,
                    image: req.file ? req.file.filename : undefined // Only update image if a new one is uploaded
                }
            },
        //     { new: true, runValidators: true } // Returns updated document and applies validation
        );

        if (!updatedProduct) {
            return res.status(404).json({ error: "Product not found" });
        }

        res.status(200).json({ message: "Update successful", updatedProduct });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};


//delete

const DeleteData = async (req, res) => {
    try {
        const removedata = await productModel.deleteOne({ _id: req.params.id });

        if (removedata.deletedCount === 0) {
            return res.status(404).json({ error: "Product not found" });
        }

        res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};

module.exports = { RegisterProduct, readProduct, ReadSingleData, UpdateData , DeleteData, readProduct2};



















































// const productModel = require("../model/productModel")

// // create product

// const RegisterProduct = async (req, res) => {
//         try {
//                 const newData = productModel({
//                         prName: req.body.prName,
//                         description: req.body.description,
//                         price: req.body.price,
//                         category: req.body.category,
//                         image: req.file.filename
       
//                 })
//                 const SaveData = await newData.save();
//                 if (SaveData) {
//                         res.send(SaveData)
//                 }
//         } catch (error) {
//                 console.log(error)
//                 res.send({error: "server error"})
//         }
// }


// const readProduct = async (req, res) => {
//         try {
//                 const readData = await productModel.find()
//                 if (readData) {
//                         res.send(readData)
//                 }
//         } catch (error) {
//                 console.log(error)
//                 res.send({error: "server error"})
//         }
// }


// const ReadSingleData = async (req, res) => {
//         try {
//                 const GetSingleData = await productModel.find({ _id: req.params.id })
//                 if (GetSingleData) {
//                         res.send(GetSingleData)
//                 }
//         } catch (error) {
//                 console.log(error)
//         }
// }


// // update section

// const UpdateData = async (req, res) => {
//         try {
//                 const PutData = await productModel.updateOne({ _id: req.params.id }, {
//                         $set: {
//                         prName: req.body.prName,
//                         description: req.body.description,
//                         price: req.body.price,
//                         category: req.body.category,
//                         image: req.file.filename
//                 } })
//                 if (PutData) {
//                         res.send("updated success")
//                 }
//         } catch (error) {
//                 console.og(error)
//         }

// }


// module.exports ={ RegisterProduct , readProduct , ReadSingleData, UpdateData}
