const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{
        model: Product
      }]
    });
    res.json(tagData);
  }catch {
    console.log(err);
    res.json(err);
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findByPk({
      include: [{
        model: Product
      }]
    });
    res.json(tagData);
  }catch {
    console.log(err);
    res.json(err);
  }
 
});

router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.json(tagData);
  }catch {
    console.log(err);
    res.json(err);
  }
  // create a new tag
});

router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(
      {where: {id: req.params.id}});
      res.json(tagData);
  }catch {
    console.log(err);
    res.json(err);
  }
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy( {
      where: {id: req.body.id}});
      res.json(tagData);
  }catch {
    console.log(err);
    res.json(err);
  }
  // delete on tag by its `id` value
});

module.exports = router;
