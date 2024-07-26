import { Router } from 'express';
import MenuModel from '../models/menuModel.js';
//import { featuredProducts } from '../data.js';
import handler from 'express-async-handler';

const router = Router();

// Fetch all menu items
router.get('/', handler(async (req, res) => {
  const foods = await MenuModel.find({});
  res.send(foods);
}));

// Fetch a specific menu item by ID
router.get('/:id', handler(async (req, res) => {
  const { id } = req.params;
  try {
    const food = await MenuModel.findById(id);
    if (food) {
      res.send(food);
    } else {
      res.status(404).send({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).send({ error: 'Error retrieving product' });
  }
}));

export default router;

