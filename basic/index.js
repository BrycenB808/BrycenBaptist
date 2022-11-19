const express = require('express');
const app = express()
const port = 3000

app.get("/", function(request, response){
    response.send("kiss my ass")
})

app.listen(port, function(){
        console.log("basic server listening on port " + port)
})

app.listen(port, ()=>console.log('Basic server ${port}'))