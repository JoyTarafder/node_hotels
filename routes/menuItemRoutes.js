const express = require('express')
const router = express.Router();
const MenuItem = require('./../models/menuitem'); // Ensure this import is correct


// MenuItem Post Function
router.post('/', async function (req, res) {
  const menuItem = new MenuItem(req.body);
  try {
      await menuItem.save();
      res.send(menuItem);
      console.log('MenuItem Data Save');
  } catch (error) {
      console.log(error);
      if (!res.headersSent) {
          res.status(500).send({ error: 'Internal server error' });
      }
  }
});

// MenuItem Get Function

router.get('/', async (req, res) => {
    try {
      const menuitem = await MenuItem.find();
      console.log('MenuItem data fetched');
      res.send(menuitem);
    } catch (error) {
      console.log(error);
      res.status(500).send({error: 'Internal server error'});
    }
  }
);

// MenuItem Update Function
router.put('/:id', async (req, res) => {
    try {
      const menuItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      res.send(menuItem);
      console.log('Data MenuItem updated');
      } 
    catch (error) {
      console.log(error);
      res.status(500).send({error: 'Internal server error'});
    }
  }
);

// MenuItem Delete Function
router.delete('/:id', async (req, res) => {
    try {
      const menuItem = await MenuItem.findByIdAndDelete(req.params.id);
      if (!menuItem) {
        return res.status(404).send('Menu item not found');
      }
      res.send(menuItem);
      console.log('Data deleted :', req.params.id);
    } 
    catch (error) {
      console.log(error);
      res.status(500).send({error: 'Internal server error'});
    }
  }
);


module.exports = router;