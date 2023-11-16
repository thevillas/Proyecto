const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://villalbas991:megustaprogramar23@cluster0.s5epy4z.mongodb.net/mean', {

})
    .then(db => console.log ('db connection'))
    .catch(err => console.log (err));