const router = require('express').Router();

const Post = require('../models/Post');

//RESTful API
/* GET Posts listing. */
router.get('/', (req, res, next) => {
  Post.find()
  .then(posts => {
    res.status(200).json(posts);
  })
  .catch(error=> next(error));
});

/* CREATE a new Post. */
router.post('/', (req, res, next) => {
  Post.create(req.body)
    .then(post => {
      return res.status(201).json(post)
    })
    .catch(error => {
      return res.status(500).json(error)
    });
});

/* GET a single Post. */
router.get('/:id', (req, res, next) => {
  Post.findById(req.params.id)
    .then(post => {
      if(!post) return res.status(404)
      return res.status(200).json(post)
    })
    .catch(error => {
      return res.status(500).json(error)
    });
});

/* SEARCH Posts text*/
// router.post('/search', (req, res, next) => {
//   Post.find({ "text": { $regex: /req.body/i }})
//     .then(posts => {
//       return res.status(200).json(posts)
//     })
//     .catch(error => {
//       return res.status(404).json(error)
//     })
// })

/* EDIT a Post. */
router.put('/:id', (req, res, next) => {
  Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(post => {
      return res.status(202).json(post)
    })
    .catch(error => {
      return res.status(404).json(error)
    });
});

/* DELETE a Post. */
router.delete('/:id', (req, res, next) => {
  Post.findByIdAndRemove(req.params.id)
    .then(post => {
      res.status(200).json(post)
    })
    .catch(error => {
      res.status(500).json({message:"Something went wrong!"})
        next(error)
    });
})

module.exports = router;