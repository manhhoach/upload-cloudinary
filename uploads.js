const cloudinary = require('cloudinary');

const { CloudinaryStorage } = require('multer-storage-cloudinary')
const { getFileName } = require('./getFileName')
const multer = require('multer')
require('dotenv').config({})

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
})


const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: {
    folder: 'test-folder',
    format: async (req, file) => {
      // return 'jpg'||'png', ......
    },
    public_id: (req, file) => { // set file name in cloudinary
      return `${Date.now()}-${getFileName(file.originalname)}`
    }
  }

})

const upload = multer({ storage: storage })

module.exports = {
  upload_array: upload.array('files'),
  upload_single: upload.single('file')
}