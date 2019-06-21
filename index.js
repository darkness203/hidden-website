const express = require("express")
const fs = require("fs")
const app = express()

app.get("/", (req, res) => {
    fs.readFile("./secret_key.txt", "utf8", (err, secret_key) => {
        if(err) throw err

        if(!req.headers["user-agent"].includes(secret_key)) {
            res.status(403).end()
        } else {
            res.send("Hello, world!")
        }
    })
})

app.listen(8080, () => {
    console.log("Listening on port 8080")
})