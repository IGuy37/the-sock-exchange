import express from 'express';
import { promises as fs } from 'fs';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
import cors from 'cors';
import pg from 'pg';

dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;
const collectionName = process.env.MONGO_DB_COLLECTION;

const { Pool } = pg;
// PostgreSQL pool configuration
const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.PROCESS_PASSWORD,
    port: 5432,
});

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// set up rate limiter: maximum of 60 requests per minute
const RateLimit = require('express-rate-limit');
const limiter = RateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 60, // max 5 requests per windowMs
});

// apply rate limiter to all requests
app.use(limiter);

app.post('/socks', async (req, res) => {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const result = await collection.insertOne(req.body);
        console.log(`New document created with _id: ${result.insertedId}`);
        client.close();
        res.json(result);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Hmmm, something smells... No socks for you! ☹");
    }
});

app.post('/socks/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const result = await pool.query('SELECT uid FROM users WHERE username = $1 AND password = $2', [username, password]);
        if (result.rows.length > 0) {
            res.status(200).json({ uid: result.rows[0].uid });
        } else {
            res.status(401).json({ message: 'Authentication failed' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/socks/search', async (req, res) => {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        console.log(req.body);
        const searchTerm = req.body.searchTerm;
        const documents = await collection.find({"sockDetails.color": {$eq: searchTerm}}).toArray();
        console.log(documents);
        client.close();
        res.json(documents);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Hmm, something doesn\'t smell right... Error searching for socks');
    }
});


// Endpoint to read and send JSON file content
app.get('/socks', async (req, res) => {
    try {
        console.log(url)
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const socks = await collection.find({}).toArray();
        res.json(socks);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Hmmm, something smells... No socks for you! :(");
    }
});

app.get('/socks/:color', async (req, res) => {
    try {
        const data = await fs.readFile('../data/socks.json', 'utf8');
        const jsonObj = JSON.parse(data);
        console.log(jsonObj);
        const matchingColors = [];
        for(const sock of jsonObj){
            if(sock.color.toLowerCase() === req.params.color.toLowerCase()){
                matchingColors.push(sock);
            }
        }
        if(matchingColors.length === 0){
            res.status(404).send("No socks with that color here. Try again...?");
        } else {
            res.json(matchingColors);
        }
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Hmmm, something smells... No socks for you! :(");
    }
});



app.get('/socks/:page/:limit', async (req, res) => {
    try {
        const page = +req.params.page;
        const limit = +req.params.limit; // The + converts limit from a string to integer.
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        console.log(page);
        const socks = await collection.find({}).skip((page - 1) * limit).limit(limit).toArray();
        res.json(socks);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Hmm, something doesn\'t smell right... Error fetching socks');
    }
});



app.delete('/socks/:id', async (req, res) => {
    try {
        const {id} = req.params;
        console.log(id);
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const result = await collection.deleteOne({ _id: new ObjectId(id) });
        console.log(`${result.deletedCount} document(s) deleted`);
        client.close();
        res.json(result);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Hmm, something doesn\'t smell right... Error deleting sock');
    }
});



app.put('/user/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { email } = req.body;
        console.log('Updating email for user with ID:', id);
        res.status(200).send({
            status: 'success',
            data: email, // This URL should point to the newly created user
            message: 'User updated successfully.'
        });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Hmm, something doesn\'t smell right... Error deleting sock');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});