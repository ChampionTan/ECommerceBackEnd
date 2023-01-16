const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll();
    res.json(categoryData);
  }catch {
    console.log(err);
    res.json(err);
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{

      }]
    });
    res.json(categoryData);
  }catch {
    console.log(err);
    res.json(err);
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.json(categoryData);
  }catch {
    console.log(err);
    res.json(err);
  }
  // create a new category
});

router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(
      {where: {id: req.params.id}});
      res.json(categoryData);
    }catch {
      console.log(err);
      res.json(err);
    }
  // update a category by its `id` value
});

router.delete('/:id', async(req, res) => {
  try {
    const categoryData = await Category.destroy(
      {where: {id: req.params.id}});
      res.json(categoryData);
  }catch {
    console.log(err);
    res.json(err);
  }
  // delete a category by its `id` value
});

module.exports = router;
