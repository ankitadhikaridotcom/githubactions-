import express from "express";

const app = express();
const port =process.env.port ?? 8080;

app.get("/", (req, res) => {
  res.send("Hello, Ankits !");
});

app.listen(port, () => {
  console.log(`Server is  fucking running on http://localhost:${port}`);
});
