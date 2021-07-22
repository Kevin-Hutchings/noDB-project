const express = require('express');
const { getPuzzle, addPuzzle, deletePuzzle } = require('./controllers/puzzleControllers');

const app = express();

app.use(express.json());

app.get('/api/puzzles', getPuzzle);
app.post('/api/puzzles', addPuzzle);
// app.put('/api/puzzles/:id', editPuzzle);
app.delete('/api/puzzles/:id', deletePuzzle)

app.listen(4242, () => console.log('Listening on Port 4242'));