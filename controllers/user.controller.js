const mongoose = require('mongoose');
const passport = require('passport');
const User = mongoose.model('User');
const Post = mongoose.model('Post');
const _ = require('lodash');



module.exports.register = (req, res, next) => {
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}

module.exports.authenticate = (req, res, next) => {

    console.log(req.body.email)
    User.findOne({email:req.body.email}).then((user)=>{
if(user){
if(user.password){
    User.findOne({email:req.body.email}
        ,
        (err,user)=>{
            console.log(user)
        })
    
        // call for passport authentication
        passport.authenticate('local', (err, user, info) => {
        
            // error from passport middleware
            if (err){
                console.log("ERRR "+err)
                return res.status(400).json(err);} 
            // registered user
            else if (user) return res.status(200).json({ "token": user.generateJwt() });
            // unknown user or wrong password
            else return res.status(404).json(info);
        })(req, res);
}
else{
 
    res.status(400).json({ message: 'Mmm , This is not the way you login' })
}

}
else{
    res.status(400).json({ message: 'Email is not registered' })
}


    })


}

module.exports.userProfile = (req, res, next) => {

    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true , user:_.pick(user, ['_id', 'fullName', 'email'])}) });
        }
    
   


        module.exports.findUser = (req, res) => {
            User.find((err, users) => {
                if (err)
                    console.log(err);
                else
                    res.json(users);
            });
        }

        module.exports.deleteUser = (req, res) => {
            User.findByIdAndRemove({ _id: req.params.id }, (err, User) => {
                if (err)
                    res.json(err);
                else
                    res.json('remove successfully');
            });
        }

        module.exports.findUserById = (req, res) => {
            User.findById(req.params.id, (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json(user);
            });
        }


        module.exports.getuserforothers = (req, res) => {

            User.findById(req.params.id, (err, user) => {
                if (err)
                    console.log(err);
                else{
      
                    Post.find({ ownerid: req.params.id },(err, posts) => {
                        if (err)
                            console.log(err);
                        else{
                            res.json({posts:posts , user:_.pick(user, ['_id', 'fullName', 'email'])});
                        }
                            
                    });



                }
                    
            });

        }
        

