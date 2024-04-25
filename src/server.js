import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bodyParser from 'body-parser';

import {config} from 'dotenv';
import MainRoutes from './routes/routes.js'


const _dotenv = config();
const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(MainRoutes)

const porta = process.env.PORT || 3000
app.listen(porta)