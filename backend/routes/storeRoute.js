import express from 'express';
import { Store } from '../models/storeModel.js';

const router = express.Router();


router.post('/', async (request, response) => {
  try {
    if (
      !request.body.item ||
      !request.body.brand ||
      !request.body.quantity
    ) {
      return response.status(400).send({
        message: 'Send all required fields',
      });
    }
    const newStore = {
      item: request.body.item,
      brand: request.body.brand,
      quantity: request.body.quantity,
      addinfo: request.body.addinfo
    };

    const store = await Store.create(newStore);
    return response.status(201).send(store);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


router.get('/', async (request, response) => {
  try {
    const stores = await Store.find({});

    return response.status(200).json({
      count: stores.length,
      data: stores,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const store = await Store.findById(id);

    return response.status(200).json(store);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


router.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.item ||
      !request.body.brand ||
      !request.body.quantity
    ) {
      return response.status(400).send({
        message: 'Send all required fields'
      });
    }

    const { id } = request.params;

    const result = await Store.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Item not found' });
    }

    return response.status(200).send({ message: 'Inventory updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Store.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Item not found' });
    }

    return response.status(200).send({ message: 'Item deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
