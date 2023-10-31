const http = require('node:http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(
        `
        <html>
            <head></head>
            <body>
                <h1>Bùi Khánh Linh - lớp thầy Hoàng</h1>
            </body>
        </html>
        `
    );
});

server.listen(8000, () => {
    console.log("Server đang chạy trên PORT 8000");
});