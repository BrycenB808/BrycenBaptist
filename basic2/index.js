const express = require('express');
const app = express()
const port = 3001

app.get("/", function(request, response){
    response.send("kiss my asses")
})

app.listen(port, function(){
        console.log("basic server listening on port " + port)
})