const mongoose = require('mongoose')

// Make sure to add part about jokes, ask alex
mongoose.connect('mongodb+srv://root:rootroot@cluster0.uxwoa.mongodb.net/jokesdb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));

