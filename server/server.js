import express from 'express';
import { promises as fs } from 'fs';

const app = express();
const PORT = 3000;

// Endpoint to read and send JSON file content
app.get('/socks', async (_req, res) => {
    try {
        const data = await fs.readFile('../data/socks.json', 'utf8');
        const jsonObj = JSON.parse(data);
        res.json(jsonObj);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Hmmm, something smells... No socks for you!");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});