const mongoose = require('mongoose');
const Post = mongoose.model('Post');


module.exports.addpost = (req, res, next) => {
    var post = new Post();
    post.topic = req.body.topic;
    post.postbody = req.body.postbody;
    post.ownerid = req._id;

    post.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {

            console.log(err);

        }

    });
} 

module.exports.findPostById = (req, res) => {
    Post.findById(req.params.id, (err, post) => {
        if (err)
            console.log(err);
        else
            res.json(post);
    });
}

module.exports.findPost = (req, res) => {
    Post.find((err, posts) => {
        if (err)
            console.log(err);
        else
            res.json(posts);
    });
}

module.exports.deletePost = (req, res) => {
    Post.findByIdAndRemove({ _id: req.params.id }, (err, Post) => {
        if (err)
            res.json(err);
        else
            res.json('remove successfully');
    });
}