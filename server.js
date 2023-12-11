const express = require('express');
const exphbs = require('express-handlebars');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up Handlebars as the view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set the path for views (assuming your main.handlebars is in a 'views' folder)
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());

const dataFilePath = path.join(__dirname, 'db.json');

app.get('/', (req, res) => {
  // Assuming main.handlebars is your main template file
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

<<<<<<< HEAD
    fs.writeFile(dataFilePath, JSON.stringify(notes, null, 2), (err) => {
=======
    fs.writeFile(dataFilePath, JSON.stringify(notes), (err) => {
>>>>>>> 2e5321d4f32ddd877c072ade70c6cb4912472002
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
<<<<<<< HEAD
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'notes.handlebars'));
=======
>>>>>>> 2e5321d4f32ddd877c072ade70c6cb4912472002
});