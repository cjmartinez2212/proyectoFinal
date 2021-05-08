import mongoose from 'mongoose'

const dataBaseConn = "mongodb+srv://striker:1010*@mongoclase1.a3jch.mongodb.net/menuRestaurante?retryWrites=true&w=majority"

mongoose.connect(dataBaseConn, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => {
        console.log('Conectada a la BD')
    })
    .catch(err => {
        console.log("Error ========================**", err)
    })