import express, { NextFunction,Response, Request } from "express";
import { codeCompilerService } from "./services";
import bodyParser from "body-parser";

const app = express();
const PORT = 4001;
app.use(bodyParser.json({ limit: "20mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "20mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.get("/", (req:Request, res:Response) => {
    console.log("console");
    return res.status(200).json('success');
})
app.post("/compile", codeCompilerService.codeCompiler)
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})
