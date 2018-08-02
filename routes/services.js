const router = require('express').Router();

const Service = require('../models/Service');

//RESTful API
/* GET Services listing. */
router.get('/', (req, res, next) => {
  Service.find()
  .then(services=> {
    res.status(200).json(services);
  })
  .catch(error=> next(error));
});

/* CREATE a new Service. */
router.post('/', (req, res, next) => {
  Service.create(req.body)
    .then(service => {
      return res.status(201).json(service)
    })
    .catch(error => {
      return res.status(500).json(error)
    });
});

/* GET a single Service. */
router.get('/:id', (req, res, next) => {
  Service.findById(req.params.id)
    .then(service => {
      if(!service) return res.status(404)
      return res.status(200).json(service)
    })
    .catch(error => {
      return res.status(500).json(error)
    });
});

/* EDIT a Service. */
router.put('/:id', (req, res, next) => {
  Service.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(service => {
      return res.status(202).json(service)
    })
    .catch(error => {
      return res.status(404).json(error)
    });
});

/* DELETE a Service. */
router.delete('/:id', (req, res, next) => {
  Service.findByIdAndRemove(req.params.id)
    .then(service => {
      res.status(200).json(service)
    })
    .catch(error => {
      res.status(500).json({message:"Something went wrong!"})
        next(error)
    });
})

module.exports = router;