// const express = require("express"); // We won't get TS support.  Use import.
import express, { Request, Response, NextFunction } from "express";
const app = express();
import todoRoutes from "./routes/todos";
import { json } from "body-parser";

app.use(json());

app.use("/todos", todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000, () => console.log("listening on port 3000"));

/*
npm i --save-dev @types/node
npm i --save-dev @types/express

To run:
On one terminal run tsc -w (or npm run start-tsc) <-- for manual TS compilation
On another terminal run npm start <-- for our Express server
*/
