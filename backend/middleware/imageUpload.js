const multer = require("multer")

// tilmaan image location ama image ka meshi la dhigin   lahaa

const imageLocation = multer.diskStorage({
        destination: (req, file, cb) => {
                cb(null, "document")
        },
        filename: (req, file, cb) => {
                cb(null, file.originalname)
        }
})

const uploadImage = multer({
        storage: imageLocation
})

module.exports = uploadImage