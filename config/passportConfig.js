const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const localStrategy = require('passport-local').Strategy;

const mongoose = require('mongoose');

var User = mongoose.model('User');
var gUser = mongoose.model('GUser');

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((id, done) => {
    gUser.findById(id).then((user) => {
        done(null, user)
    })

})

passport.use(new GoogleStrategy({
    clientID: "765218609554-ad0vt5h52kqec48pirni5i44kg4fv4ok.apps.googleusercontent.com",
    clientSecret: "7_bq16M16rEZ4H0dKzpxqjbN",
    callbackURL: "/api/google/callback",
    passReqToCallback: true
},
    function (request, accessToken, refreshToken, profile, done) {
        console.log("oooO OO o o " + JSON.stringify(profile))


        gUser.findOne({ googleid: profile.id }).then((crrntuser) => {

            if (crrntuser) {
                console.log("old: " + crrntuser);
                done(null, crrntuser);
            }
            else {

                new gUser({
                    fullName: profile.displayName,
                    email: profile.emails[0].value,
                    googleid: profile.id

                }).save((err, newuser) => {
                    if (!err)
                    done(null, newuser);
                    else {
                        done(null, null);
                    }
            
                });
                
                
                // save().then((newuser) => {
                //     console.log("new: " + newuser);
                //     done(null, newuser);
                // })

            }
        })

    }
));


passport.use(
    new localStrategy({ usernameField: 'email' },
        (username, password, done) => {



            User.findOne({ email: username },
                (err, user) => {
                    if (err)
                        return done(err);
                    // unknown user
                    else if (!user)
                        return done(null, false, user.password);
                    // wrong password
                    else if (!user.verifyPassword(password))
                        return done(null, false, { message: 'Wrong password.' });
                    // authentication succeeded
                    else
                        return done(null, user);
                });

        }
    )
);



