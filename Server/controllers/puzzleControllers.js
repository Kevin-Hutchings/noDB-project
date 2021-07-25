const data = require('../data')
const puzzles = [...data.data]

function getPuzzle(req, res){
   res.status(200).json(puzzles)
}

function addPuzzle(req, res){
   const { id, img, shape, difficulty, solved } = req.body;
   puzzles.push({ img, shape, difficulty, id, solved })
   res.status(200).json(puzzles)
}

function editPuzzle(req, res){
   const { difficulty, solved } = req.body;
   const { id } = req.params;

   const index = puzzles.findIndex((el) => el.id === id);

   if(puzzles[index].difficulty !== difficulty && difficulty !== ''){
      [...puzzles, puzzles[index].difficulty = difficulty]
   } else if(puzzles[index].solved !== solved){
      [...puzzles, puzzles[index].solved = solved]
   }

   res.status(200).json(puzzles)
}

function deletePuzzle(req, res){
   const { id } = req.params
   const index = puzzles.findIndex((el) => el.id === id)
   puzzles.splice(index, 1);
   res.status(200).json(puzzles)
}

module.exports = {
   getPuzzle,
   addPuzzle,
   editPuzzle,
   deletePuzzle,
}