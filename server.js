const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up HBS as the view engine
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

// Set the path for views (assuming your main.hbs is in a 'views' folder)
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dataFilePath = path.join(__dirname, 'db.json');

app.get('/', (req, res) => {
  // Assuming main.hbs is your main template file
  res.render('main', { /* You can pass data to your template here if needed */ });
});

app.get('/api/notes', (req, res) => {
  fs.readFile(dataFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    const notes = JSON.parse(data);
    res.json(notes);
  });
});

app.post('/api/notes', (req, res) => {
  const newNote = req.body;

  fs.readFile(dataFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    const notes = JSON.parse(data);

    newNote.id = Date.now().toString();

    notes.push(newNote);

    fs.writeFile(dataFilePath, JSON.stringify(notes), (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      res.json(newNote);
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:3000`);
});