const cloudinary = require('cloudinary').v2;
import { Request } from 'express';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { MAX_FILE_UPLOAD } from '../constants/upload';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    // @ts-ignore
    folder: 'lighthouse',

    format: async (req: Request) => {
      const format = req.file?.mimetype.split('/')[1]; // 'image/png' => 'png'
      return format;
    },
    
    public_id: (req: Request, file) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const filePublicId = `asset_${req.user.id}_${uniqueSuffix}`
      return filePublicId;
    }
  },
});

export const uploadImageParser = multer({ 
  storage: storage, 
  limits: { 
    fileSize: MAX_FILE_UPLOAD
  },
  fileFilter: (req: Request, file, cb) => {
    if (!file.mimetype.startsWith('image')) {
      return cb(new Error('Please upload an image file'));
    }
    cb(null, true);
  }
});
