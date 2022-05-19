const mongoose = require('mongoose');
 
const JokeSchema = new mongoose.Schema({

    setup: {
        type: String,
        required: [true, "setup is required"],
        minlenth: [15, "setup must be at least 15 characters"]
    },
    punchline: {
        type: String,
        required: [true, "punchline is required"],
        minlenth: [15, "punchline must be at least 15 characters"]
    },
    rating: {
        type: Number,
        minrate: [0, "Rating must be positive"],
        maxrate: [5, "Max rating is 5"]
    },

}, {timestamps: true});

// Creating joke schema and calling it joke
// Option 1
module.exports = mongoose.model('Joke', JokeSchema);

// Option 2
// module.exports.Joke = mongoose.model('Joke', JokeSchema);