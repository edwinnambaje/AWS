const express = require("express")
const app = express()

const port = 80;

app.get("/", (req, res )=>{
    res.send("App is running and working");
})
app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`);
})