const express = require('express')
const app = express()

const movies = [
    {
        name: "DR. DOLITTLE",
        year: 2006
    },
    {
        name: "Friday",
        year: 1991
    },
    {
        name: "Save The Last Dance",
        year: 2007
    },
    {   
        name: "This Christmas",
        year: 2014
    },
    {   
        name: "Home Alone",
        year: 1994
    }
]

const actors = [
    {
        name: "Eddie Murphy",
        age: 57
    },
    {
        name: "Jamie Foxx",
        age: 30
    },
    {
        name: "Denzel Washington",
        age: 73
    },
    {   
        name: "Samuel L. Jackson",
        age: 59
    },
    {   
        name: "Will Smith",
        age: 51
    }
]

const actresses = [
    {
        name: "Cicely Tyson",
        age: 35
    },
    {
        name: "Taraji P Henson",
        age: 30
    },
    {
        name: "Sanaa Lathan",
        age: 74
    },
    {   
        name: "Jada Pinkett Smith",
        age: 59
    },
    {   
        name: "Angela Bassett",
        age: 60
    }
]

app.get("/movies", (req, res) => {
    res.send(movies)
})

app.get("/actors", (req, res) => {
    res.send(actors)
})

app.get("/actresses", (req, res) => {
    res.send(actresses)
})


app.listen(2500, () => {
    console.log("The servcer is running on Port 2500")
})