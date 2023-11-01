import path from "path"
import fs from 'fs';
import {v4 as uuid} from "uuid";

const dirCodes = path.join(__dirname, 'codes');

if(!fs.existsSync(dirCodes)) {
    fs.mkdirSync(dirCodes, {recursive:true});
}

export const generateFile = async(language: string, code: string) => {
    const jobId = uuid();
    const filename = `${jobId}.${language}`;
    const filepath = path.join(dirCodes, filename);
    await fs.writeFileSync(filepath, code);
    return filepath;
}