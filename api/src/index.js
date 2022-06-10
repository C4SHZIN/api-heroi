import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import controller from './controller/controllerheroi.js'
const server = express();

server.use(cors());
server.use(express.json());

server.use(controller)
server.listen(process.env.PORT, ()=> console.log(`API CONECTADA A PORTA ${process.env.PORT}`))