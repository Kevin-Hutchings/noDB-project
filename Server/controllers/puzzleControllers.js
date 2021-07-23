const data = require('../data')
const puzzles = [...data.data]

function getPuzzle(req, res){
   res.status(200).json(puzzles)
}

function addPuzzle(req, res){
   const { img, shape, difficulty } = req.body;
   puzzles.push({ img, shape, difficulty })
   res.status(200).json(puzzles)
}

function deletePuzzle(req, res){
   const { id } = req.params
   const index = puzzles.findIndex((el) => el.id === +id)
   puzzles.splice(index, 1);
   res.status(200).json(puzzles)
}

module.exports = {
   getPuzzle,
   addPuzzle,
   deletePuzzle,
}