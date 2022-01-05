// import http from "http";
import express from "express";
import bp from "body-parser";
import morgan from "morgan";

const app = express();
const port = 8020;
const { urlencoded, json } = bp;

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use(morgan("dev"));

const db = [];

// app.post("/todo", (req, res) => {
//   const newTodo = {
//     id: Date.now(),
//     text: req.body.text,
//   };

//   db.push(newTodo);
//   res.json(newTodo);
// });

// app.get("/todo/:id", (req, res) => {
//   const todo = db.find((t) => {
//     return t.id === req.body.id;
//   });
//   res.json(db);
// });

app.listen(process.env.PORT, () => {
  console.log(`Served on port ${port}`);
});
