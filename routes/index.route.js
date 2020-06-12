const express = require('express');
const router = express.Router();
const jwthelper = require('../config/jwthelper');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const ctrlUser = require('../controllers/user.controller');

router.post('/register', ctrlUser.register);
router.post('/signin', ctrlUser.authenticate);
router.get('/userProfile', jwthelper.verifyJwtToken, ctrlUser.userProfile);

router.get('/userlist', ctrlUser.findUser);
router.get('/user/:id', ctrlUser.findUserById);
router.delete('/user/delete/:id', ctrlUser.deleteUser);

// router.get('/googlelll',ctrlUser.googlelogin);
// router.get('/google/callback',ctrlUser.googleredct);



router.get('/google/callback', passport.authenticate('google', {


    // successRedirect: '/api/google/success',
    failureRedirect: '/api/google/failure'


}
),
    (req, res) => {

        const jwtt = jwt.sign({ _id: req.user._id },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXP
            });

        const htmlWithEmbeddedJWT = `
        <html>
          <script>
            // Save JWT to localStorage
            window.localStorage.setItem('token', '${jwtt}');
            // Redirect browser to root of application
            // window.location.href = '/';
            window.close();
          </script>
        </html>
        `;

        res.send(htmlWithEmbeddedJWT);    
        // return res.send({ "token": jwtt })
    }

);

router.get('/googlelll',
    passport.authenticate('google', {
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ]
    }
    ));


router.get('/google/failure', (req, res) => {

    const htmlWithEmbeddedJWT = `
        <html>
        <style>
        .alert {
            padding: 20px;
            background-color: #bd7100af;
            color: rgb(0, 0, 0);
            margin-bottom: 15px;
        }
    
        .button {
            background-color: #b9b9b9a1;
            color: black;
            border: none;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
        }
    
        .closebtn:hover {
            color: rgb(116, 115, 115);
        }
    </style>
    <div style=' text-align: center;'>
        <div class="alert"><h3>Something went wrong, you may use wrong login method</h3></div>
        <button class="button" onclick="closeWin()">Okay</button>
    </div>
          <script>
          function closeWin() {
            window.close();
          }
          </script>
        </html>
        `;

    res.send(htmlWithEmbeddedJWT);




});



module.exports = router;
