import express from 'express';
import path from 'node:path';
const app = express();
const root = path.join(import.meta.dirname, '..', 'Basic File Serving');

// Because all the html files are in the other server, we fetch files from there
app.use(express.static(root));


app.get('/', (req, res) => res.sendFile('index.html', { root }));
app.get('/about', (req, res) => res.sendFile('about.html', { root }));
app.get('/contact-me', (req, res) => res.sendFile('contact-me.html', { root }));

// Anything that doesn't hit the gets runs here
app.use((req, res) => res.status(404).sendFile('404.html', { root }));

const PORT = 3000;
app.listen(PORT, (error) => {
    // This is important!
    // Without this, any startup errors will silently fail
    // instead of giving you a helpful error message.
    if (error) {
        throw error;
    }

    console.log(`My first Express app - listening on port ${PORT}!`);
});
