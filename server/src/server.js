const app = require('./app');
const http = require('http');
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);
server.listen(PORT, () => {
    console.log('app listening on the port', PORT);
})
