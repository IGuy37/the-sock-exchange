import express from 'express';
import { promises as fs } from 'fs';

const app = express();
const PORT = 3000;


// Middleware to parse JSON bodies
app.use(express.json());

app.post('/socks', async (req, res) => {
    try {
        // Obligatory reference to POST Malone
        console.log("If POST Malone were a sock, he'd be the one with the most colorful pattern.");
        // Simulate creating a user
        const { username, email } = req.body;
        if (!username || !email) {
            // Bad request if username or email is missing
            return res.status(400).send({ error: 'Username and email are required.' });
        }

        // Respond with the created user information and a 201 Created status
        res.status(201).send({
            status: 'success',
            location: 'http://localhost:3000/users/1234', // This URL should point to the newly created user
            message: 'User created successfully.'
        });
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Hmmm, something smells... No socks for you! ☹");
    }
});

// Endpoint to read and send JSON file content
app.get('/socks', async (req, res) => {
    try {
        // Console log the entire request object
        console.log(req);

        // Console log specific parts of the request
        console.log("Headers:", req.headers);
        console.log("URL:", req.url);
        console.log("Method:", req.method);
        console.log("Query parameters:", req.query);

        const data = await fs.readFile('../data/socks.json', 'utf8');
        const jsonObj = JSON.parse(data);
        res.json(jsonObj);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Hmmm, something smells... No socks for you! :(");
    }
});


app.get('/socks/:color', async (req, res) => {
    try {
        // Console log the entire request object
        //console.log(req);

        // Console log specific parts of the request
        //console.log("Headers:", req.headers);
        //console.log("URL:", req.url);
        //console.log("Method:", req.method);
        //console.log("Query parameters:", req.query);

        const data = await fs.readFile('../data/socks.json', 'utf8');
        const jsonObj = JSON.parse(data);
        console.log(jsonObj);
        const matchingColors = []
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

app.delete('/socks/:id', async (req, res) => {
    try {
        const { id } = req.params;
        console.log('Deleting sock with ID:', id);
        res.status(200).send('Sock deleted successfully');
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