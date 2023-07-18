const router = require('express').Router();

const {
  getThoughtById,
  getAllThoughts,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction, } = require('../../controllers/thoughtController');

  router
  .route('/')   
  .get(getAllThoughts)
  .post(addThought);

router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

router
  .route('/:thoughtId/reactions')
  .post(addReaction);

router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;