const express = require('express')
const app = express()
const port = 3001

app.get('/rout1', (req, res) => {
  res.send('Hello World!')
})

app.get('/rout2', (req, res) => {
    res.send('Hello World! 2')
})

app.get('/json', function(req, res) {
    res.json({
            name: "Abhi",
            age: 23
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})