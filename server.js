const express = require("express");
const path = require("path");

const app = express();
const cacheTime = 86400000 * 3

 


app.use(
  "/static",
  express.static(path.resolve(__dirname, "frontend", "static"),{maxAge: cacheTime})
);


app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
  
});


app.listen(process.env.PORT || 8000, () => console.log("Server running..."));
