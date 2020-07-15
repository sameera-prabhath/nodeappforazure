const mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: ' can\'t be empty'
    },
    postbody: {
        type: String,
        required: ' can\'t be empty',
       
    },
    ownerid: {
        type: String,
        required: ' can\'t be empty',
        
    },
    ownername: {
        type: String,
        required: ' can\'t be empty',
        
    }


}); 



mongoose.model('Post', postSchema);