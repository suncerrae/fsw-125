const express = require("express");
const trackBounties = express.Router();
const { v4: uuidv4 } = require('uuid');


const bounties = [
    {
        firstName: "Tina",
        lastName: "Turner",
        living: true,
        bountyAmount: 500,
        type: "Jedi",
        _id: uuidv4()
    },
    {
        firstName: "Beyonce",
        lastName: "Carter",
        living: false,
        bountyAmount: 450,
        type: "Sith",
        _id: uuidv4()
    },
    {
        firstName: "Shawn",
        lastName: "Carter",
        living: false,
        bountyAmount: 300,
        type: "Jedi",
        _id: uuidv4()
    },
    {
        firstName: "George",
        lastName: "Smith",
        living: true,
        bountyAmount: 120,
        type: "Sith",
        _id: uuidv4()
    }
];

trackBounties.route("/")
    .get((req, res) => {
    res.send(bounties)
    })
    .post((req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the database!`)
});

trackBounties.route("/:id")
    .get((req, res) => { console.log(req.params.id)
        var bounty = bounties.filter((person)=>{
            return person._id === (req.params.id)
        })
    res.send(bounty [0])
    })


    //week4 Assignment/project
//Get & Post
trackBounties.route("/")
    .get((req, res) => {
    res.send(bounties)
    })
    .post((req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the database!`)
});

//Delete & update
trackBounties.route("/:bountyId")
    .delete((req, res) => {
    const bountyId = req.params.bountyId
    const bounty = req.body
    bounty._id = uuidv4()
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Bounty was deleted!")
})
    .put((req, res) => {
    const bountyId = req.params.bountyId
    const bounty = req.body
    bounty._id = uuidv4()
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body) 
    res.send(updatedBounty)
})



module.exports = trackBounties