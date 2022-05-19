// Option 1
const { response } = require("express")
const Joke = require("../models/jokes.model")

// Option 2 (can destructure more easily if multiple schemas on models file)
// const {Song} = require("./../models/joke.model")


// Get all
module.exports.allJokes = (req, res) => {
    Joke.find()
        .then(jokes => res.json(jokes))
        .catch(err => res.json(err))
}

// Get one
module.exports.oneJoke = (req, res) => {
    Joke.findOne({_id : req.params.id})
        .then(joke => res.json(joke))
        .catch(err => res.json(err))
}

// Create Version 1
module.exports.createJoke2 = (req, res) => {
    const newJoke = new Joke(req.body)
    newJoke.save()
        .then(joke => res.json(joke))
        .catch(err => res.json(err))
}

// Create Version 2
module.exports.createJoke = (req, res) => {
    const newJoke = req.body
    Joke.create(newJoke)
        .then(joke => res.json(joke))
        .catch(err => res.json(err))
}

// Update  
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        {_id : req.params.id}, 
        req.body, 
        {new: true, runValidators: true}
        )
        .then(response => res.json(response))
        .catch(err => res.json(err))
}

// Delete
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id : req.params.id})
        .then(status => res.json(status))
        .catch(err => res.json(err))
}

// // Random
// module.exports.randomJoke = (req, res) => {
//     Joke.aggregate({ $sample : {size:1}})
//         .then(jokes => res.json(jokes))
//         .catch(err => res.json(err))
// }
