const express = require('express');
const router = express.Router();
const jwthelper = require('../config/jwthelper');

const ctrlpost = require('../controllers/post.controller');



router.post('/addpost', jwthelper.verifyJwtToken,   ctrlpost.addpost );
router.get('/post/:id',  ctrlpost.findPostById );
router.get('/posts/:page',  ctrlpost.findPost );
router.delete('/post/delete/:id',jwthelper.verifyJwtToken,  ctrlpost.deletePost);


module.exports = router;
