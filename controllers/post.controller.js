const mongoose = require('mongoose');
const Post = mongoose.model('Post');
const User = mongoose.model('User');

module.exports.addpost = (req, res, next) => {

    User.findById(req._id, (err, user) => {
        if (err)
            console.log(err);
        else {
            var size = req.headers['content-length'] / 1048576;
            console.log("Post size = " + size + "MB");

            var post = new Post();
            post.topic = req.body.topic;
            post.postbody = req.body.postbody;
            post.ownerid = req._id;
            post.ownername = user.fullName;
            post.save((err, doc) => {
                if (!err)
                    res.send({done:'done'});
                else {

                    console.log(err);

                }

            });

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
    var page = req.params.page
    
    Post.countDocuments({}, function (err, c) {
        if (err) {
            console.log(err)
        }
        else {
            var pageCout = Math.ceil(c / 10)
            var StartingPost = 10 * (page - 1)

            console.log(StartingPost)   
            Post.find({}, null,
                { skip: StartingPost, limit: 10, sort: { $natural: -1 } },
                (err, posts) => {
                    if (err)
                        console.log(err);
                    else {
                        res.json(posts);
                    }

                });

        }


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