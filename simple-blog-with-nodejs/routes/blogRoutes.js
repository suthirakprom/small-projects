const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();

router.get('/create', blogController.blog_create_get);
router.get('/', blogController.blog_index);
router.get('/', blogController.blog_create_post);
router.get('/:id', blogController.blog_detail);
router.get('/:id', blogController.blog_delete);

module.exports = router;