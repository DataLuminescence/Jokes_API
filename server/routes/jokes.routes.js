// const jokeModel = require("../models/joke.model");

const JokeController = require("../controllers/jokes.controller")

module.exports = (app) => {
    app.get("/api/jokes", JokeController.allJokes)
    app.get("/api/jokes/:id", JokeController.oneJoke)
    // app.get("/api/random", JokeController.randomJoke)
    app.post("/api/jokes", JokeController.createJoke)
    app.post("/api/jokes2", JokeController.createJoke2)
    app.put("/api/jokes/:id", JokeController.updateJoke)
    app.delete("/api/jokes/:id", JokeController.deleteJoke)
}
