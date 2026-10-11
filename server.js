import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
const files={'/':'index.html','/app.js':'app.js','/style.css':'style.css','/finance.js':'finance.js'};
const types={html:'text/html; charset=utf-8',js:'text/javascript; charset=utf-8',css:'text/css; charset=utf-8'};
http.createServer(async(req,res)=>{const file=files[new URL(req.url,'http://localhost').pathname];if(!file){res.writeHead(404);return res.end('Nie znaleziono');}try{const body=await readFile(fileURLToPath(new URL(file,import.meta.url)));res.writeHead(200,{'Content-Type':types[file.split('.').pop()]});res.end(body);}catch{res.writeHead(500);res.end('Błąd serwera');}}).listen(Number(process.env.PORT)||3000,'0.0.0.0');
