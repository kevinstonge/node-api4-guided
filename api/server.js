require('dotenv').config();
const express = require('express');
const helmet = require('helmet');

const apiRouter = require('./api-router.js');

const server = express();

server.use(helmet());

server.use('/api', apiRouter);

server.get('/', async (req, res) => {
    try { 
        const motd = process.env.MOTD || "Hello World!";
        res.status(200).json({ motd });
    } catch (err) {
        res.status(500).json({error: "sever error"})
    }
})

module.exports = server;
