const express = require('express');
const router = express.Router();
const jwthelper = require('../config/jwthelper');

const passport = require('passport');

const ctrlUser = require('../controllers/user.controller');

router.post('/register', ctrlUser.register);
router.post('/signin', ctrlUser.authenticate);
router.get('/userProfile',jwthelper.verifyJwtToken, ctrlUser.userProfile);

router.get('/userlist',ctrlUser.findUser);
router.get('/user/:id',ctrlUser.findUserById);
router.delete('/user/delete/:id',ctrlUser.deleteUser);
  
// router.get('/googlelll',ctrlUser.googlelogin);
// router.get('/google/callback',ctrlUser.googleredct);



router.get('/google/callback', passport.authenticate('google',{ 
    successRedirect: '/api/login',
    failureRedirect: '/api/login'
}
));

router.get('/googlelll', 
passport.authenticate('google', {     scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
    ] }
));
 



module.exports = router;
