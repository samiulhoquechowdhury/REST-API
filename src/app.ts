import express, { NextFunction, Request, Response } from "express";
import createHttpError, { HttpError } from "http-errors";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app = express();

//routes
//http methods GETS, POST, PUT, PATCH, DELETE
app.get("/", (req, res, next) => {
  // throw new Error("something is wrong");
  const error = createHttpError(400, "Something is wrong");
  throw error;
  res.json({ message: "welcome to elib API" });
});

//global error handler
app.use(globalErrorHandler)

export default app;
