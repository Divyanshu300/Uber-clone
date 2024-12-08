const http = require("http");
const app = require("./index");
const port = process.env.PORT || 3000;

//JB BHI HMM LOG SOCKET KA USE KRTE HAI TB HMMLOG http KA USE KRTE HAI TO CREATE SERVER
const server = http.createServer(app);

server.listen(port , () => {
    console.log(`Server is running on port ${port}`);
})