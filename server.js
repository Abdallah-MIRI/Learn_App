const http = require("http");
const app = require("./App");

const PORT = process.env.PORT || 3000;

http.createServer(app);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
