const express = require('express');
const router = express.Router();
const Person = require('./../models/person'); // Adjust the path as necessary

// Person Post Function
router.post('/', async function (req, res) {
    const person = new Person(req.body);
    try {
      const response = await person.save();
      res.status(200).json(response);
      console.log('Person Data Save');
    } catch (error) {
      console.log(error);
      res.status(500).send({error: 'Internal server error'});
    }
});

// Person Get Function
router.get('/', async (req, res) => {
    try {
      const person = await Person.find();
      console.log('Person data fetched');
      res.send(person);
    } catch (error) {
      console.log(error);
      res.status(500).send({error: 'Internal server error'});
    }
});

router.get('/:workType', async (req, res) => {
    try {
      const workType = req.params.workType;
      if(workType == 'chef' || workType == 'waiter' || workType == 'manager'){
        const person = await Person.find({work: workType});
        console.log('person data fetched');
        res.status(200).json(person);
      }
      else{
        res.status(404).send('Data not found');
      }
    }
    catch (error) {
        console.log(error);
        res.status(500).send({error: 'Internal server error'});
    }
});

// Person Update Function
router.put('/:id', async (req, res) => {
    try {
      const person = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      res.send(person);
      console.log('Data updated : ', req.params.id);

      if(!person){
          return res.status(404).json({error: 'Person not found'})
      }
      res.status(200).json({message: 'person updated sucessfully'});
    } catch (error) {
      console.log(error);
      res.status(500).send({error: 'Internal server error'});
    }
});

// Person Delete Function
router.delete('/:id', async (req, res) => {
  try {
    const person = await Person.findByIdAndDelete(req.params.id);

    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }

    res.status(200).json({ message: 'Person deleted successfully' });
    console.log('Data deleted :', req.params.id);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Internal server error' });
  }
});

module.exports = router;