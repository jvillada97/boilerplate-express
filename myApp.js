let express = require('express');
let app = express();

//console.log("Hello World")
const publicMiddleWare = __dirname + '/public'
app.use('/public',express.static(publicMiddleWare))

app.get("/", function(req, res){
    const absolutePath = __dirname + '/views/index.html'
    res.sendFile(absolutePath)
})
































 module.exports = app;
