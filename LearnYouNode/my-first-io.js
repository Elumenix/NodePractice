import fs from 'node:fs'

const filePath = process.argv[2];
const fileContent = fs.readFileSync(filePath, 'utf8');
const lines = fileContent.split('\n').length - 1;
console.log(lines);

