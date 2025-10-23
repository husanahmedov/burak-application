import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import app from './app';

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
    console.log('salom');
    console.log('ERROR on connection to MongoDB', error);
  });
