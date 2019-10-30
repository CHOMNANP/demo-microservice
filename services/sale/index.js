var express = require('express')
var app = express()


app.get('/api', function (req, res) {
    res.send('Welcome to Sale module')
})

app.get('/api/status', function (req, res) {
    res.send({
        sale: {
            id: 1,
            total: 100,
            currency: 'USD'
        }
    })
})

app.listen(3002)