import express from "express";

const app = express();

//routes
//http methods GETS, POST, PUT, PATCH, DELETE
app.get("/", (req, res, next) => {
  res.json({ message: 'welcome to elib API' });
});

export default app;
