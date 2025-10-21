import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './app';

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log('Application is connected to database successfully🎆');
    const PORT = process.env.PORT ?? 3000;
    app.listen(PORT, function () {
      console.info(`Application is running on http://localhost:${PORT} 🚀`);
      console.info(`Admin project on http://localhost:${PORT}/admin \n`);
    });
  })
  .catch((error) => {
    console.log('ERROR on connection to MongoDB', error);
  });
