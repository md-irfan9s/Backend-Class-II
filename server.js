const express = require('express')
const app = express();
const port = 3000


// some requests

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.send("hello je")
})



app.post('/items', (request, response) => {
    // response.send("Got a POST Request")
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand)
    response.send("car submit succesfully")
})

// app.put('/items/:id', (request, response) => {
//     response.send("Got a PUT Request")
// })

// app.delete('/items/:id', (request, response) => {
//     response.send("Got a DELETE Request");
// })

app.listen(port, () => {
    console.log("server started as port 3000")
})