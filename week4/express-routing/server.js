const express = require("express");
const app = express();

app.use(express.json());

app.use("/node", require("./Routes/trackBounties"));

app.listen(2500, () => {
    console.log("The server is running on Port 2500.")
});