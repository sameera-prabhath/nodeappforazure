const mongoose = require('mongoose');

var guserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: ' can\'t be empty'
    },
    email: {
        type: String,
        required: ' can\'t be empty',
       
    },
    googleid: {
        type: String,
        required: ' can\'t be empty',
        
    }


}); 



mongoose.model('GUser', guserSchema , 'User');