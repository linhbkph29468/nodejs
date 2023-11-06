// const http = require('node:http');

// Create a local server to receive data from
// const server = http.createServer((req, res) => {
// res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(
//         `
//             <h1>Product Page</h1>
//         `
//     );
// });


const express = require('express')
const app = express()
const port = 8000

app.get('/product', (req, res) => {
    res.send('My Product Page')
})
app.post('/product/add/:slug/:id', (req, res) => {
    const { params, body, query } = req
    console.log(params);
    console.log(body);
    console.log(query);
    res.send('Add new product page')
})

app.listen(port, () => {
    console.log(`Server đang chạy trên PORT ${port}`)
})

// server.listen(port, () => {
//     // console.log("Server đang chạy trên PORT 8000");
// });