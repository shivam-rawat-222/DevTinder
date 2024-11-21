const express = require('express');
const app = express();
const port = 2002;

app.use("/demo", (req, res) => {
    res.end("hello from the test path")
})
app.use("/", (req, res) => {
    res.end("hello from wworld ")
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})