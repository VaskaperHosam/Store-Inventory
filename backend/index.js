import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import storeRoute from './routes/storeRoute.js';
import cors from 'cors';

const app = express();
app.use(cors());

// Middleware for parsing request body
app.use(express.json());





app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome to your inventory');
});

app.use('/store', storeRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
