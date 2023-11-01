import {exec} from 'child_process';
import path from 'path';
import fs from "fs";

const outputPath = path.join(__dirname, "output");
if(!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, {recursive:true})
}

export const executeCode = async (filepath:string, language:string) => {
    const runCommand = await languageRunCommand(language);
    return new Promise((resolve, reject) => 
        exec(`${runCommand} ${filepath}`, (error, stdout, stderr) => {
            error && reject({ error, stderr });
            stderr && reject(stderr);
            resolve(stdout);
        }
        )
    )

}

async function languageRunCommand(language: string) {
    switch(language) {
        case "ts": return "ts-node";
        case "go": return "go run";
        default : return "node";
    }
}