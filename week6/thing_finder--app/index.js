const express = require('express');
const app = express();
const morgan = require('morgan');


app.use(express.json());
app.use(morgan('dev'));


app.use("/inventoryItems", require("./routes/thingFinder.js"));


app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
});


app.listen(9000, () => {
    console.log("The server is running on Port 9000.")
});