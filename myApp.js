let express = require('express');
let app = express();
require('dotenv').config()

//console.log("Hello World")
const publicMiddleWare = __dirname + '/public'
app.use('/public',express.static(publicMiddleWare))

app.get("/", function(req, res){
    const absolutePath = __dirname + '/views/index.html'
    res.sendFile(absolutePath)
})

app.get('/json', function(req, res){
    var jsonText = 'Hello json'
    var jsonResponse = {}
    const envVariable = process.env.MESSAGE_STYLE;
    console.log(envVariable)
    if (envVariable === 'uppercase'){
        jsonText = jsonText.toUpperCase()
        jsonResponse = {"message": `${jsonText}`}
    } else {
        jsonResponse = {"message": `${jsonText}`}
    }
    res.json(jsonResponse)
})






























 module.exports = app;
