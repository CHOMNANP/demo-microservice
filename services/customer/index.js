var express = require('express')
var app = express()


app.get('/', function (req, res) {
    res.send('Welcome to customer module')
})

app.get('/api/customer', function (req, res) {
    res.send({
        customer: {
            id: 1,
            name: "Jonh Doe"
        },

    })
})

app.listen(3001)