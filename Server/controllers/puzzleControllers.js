const data = require('../data')

function getPuzzle(req, res){
   res.status(200).json(data)
}

function addPuzzle(req, res){
   const { img, shape, difficulty } = req.body;
   data.push({ img, shape, difficulty })
   res.send(200).json(data)
}

module.exports = {
   getPuzzle,
   addPuzzle,
}