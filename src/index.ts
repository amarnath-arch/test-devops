import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "hello world",
  });
});

app.get("/hello", (req, res) => {
  res.json({
    message: "hello to you my friend",
  });
});

app.listen(3000);
