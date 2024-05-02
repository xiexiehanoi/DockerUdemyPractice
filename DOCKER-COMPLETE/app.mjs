import express from "express";

import connectToDatabase from "./dockerstart.mjs";

const app = express();

app.get("/", (req, res) => {
  res.send("<h2>Welcome to the xiexiehanoi Ground!</hs>");
});

await connectToDb();

app.listen(3000);
