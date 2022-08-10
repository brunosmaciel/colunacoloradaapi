import app from './app';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const connectionString = process.env.CONNECTIONSTRING as string;

mongoose.connect(connectionString).then(() => {
  app.emit('connected');
  console.log('Conecting...');
});
const port = process.env.APP_PORT || 3000;

app.on('connected', () => {
  app.listen(port, () => {
    console.log(`Conectend`);
    console.log(`url: http://localhost:${port}`);
  });
});
