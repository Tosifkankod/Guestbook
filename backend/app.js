import express from "express";
import entryRoute from './routes/entries.js';
import path from 'path';
import cors from 'cors';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/v1/guest', entryRoute);

// serve build folder 
app.use(express.static(path.join(__dirname,"../frontend/dist")))


app.get("*", (req, res) => {
    console.log("first")
    res.sendFile(path.resolve(__dirname,"../frontend/dist/index.html"))
})


export default app; 