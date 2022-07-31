"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express"); // We won't get TS support.  Use import.
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const todos_1 = __importDefault(require("./routes/todos"));
const body_parser_1 = require("body-parser");
app.use((0, body_parser_1.json)());
app.use("/todos", todos_1.default);
app.use((err, req, res, next) => {
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
