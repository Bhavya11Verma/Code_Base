const http = require("http");
const server = http.createServer((req,res) => {
  res.writeHeadd(200, { "Content-Type": "text/plain"});
});

const PORT = process.env.PORT || 3000;
server.listen(PORT,() => console.log("Server is runnin on port 3000"))