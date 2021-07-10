const { Router } = require('express');
const UserController = require('../controllers/UserController');
const CommentController = require('../controllers/CommentController');
const router = Router();

router.get('/users',UserController.index);
router.get('/users/:id',UserController.show);
router.post('/users',UserController.create);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.destroy);

router.get('/comment',CommentController.index);
router.get('/comment/:id',CommentController.show);
router.post('/comment',CommentController.create);
router.put('/comment/:id',CommentController.update);
router.delete('/comment/:id',CommentController.destroy);

module.exports = router;

