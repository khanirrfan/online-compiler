import { Response, Request } from "express"
import { generateFile } from "./generatefile";
import { executeCode } from "./execute";

const codeCompiler = async (req: Request, res: Response) => {
    const { code, language } = req.body;
    if (!code) return res.status(400).json({ success: 'false', msg: 'empty code bad request' });
    const filepath = await generateFile(language, code);
    const response = await executeCode(filepath, language);
    return res.status(200).json({ filepath, response });

}

export const codeCompilerService = {
    codeCompiler
}