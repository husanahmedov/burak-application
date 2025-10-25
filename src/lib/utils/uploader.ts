import path from 'path';
import multer from 'multer';
import { v4 } from 'uuid';

/** Multer Image Uploader **/
function getTargetImageStorage(address: any) {
  return multer.diskStorage({
    destination: function (request, file, cb) {
      cb(null, `./uploads/${address}`);
    },
    filename: function (request, file, cb) {
      const extension = path.parse(file.originalname).ext;
      const random_name = v4() + extension;
      cb(null, random_name);
    },
  });
}

function makeUploader(address: string) {
  const storage = getTargetImageStorage(address);
  return multer({ storage: storage });
}

export default makeUploader;
