const { v4: uuidv4 } = require('uuid');

const data = [
   {
      id: uuidv4(),
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Rubiks_cube_solved.jpg/110px-Rubiks_cube_solved.jpg',
      shape: 'Cube',
      difficulty: 'Easy',
      solved: false
   },
   {
      id: uuidv4(),
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Rubiks_revenge_solved.jpg/110px-Rubiks_revenge_solved.jpg',
      shape: 'Cube',
      difficulty: 'Moderate',
      solved: false
   },
   {
      id: uuidv4(),
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Professor%27s_cube_solved.jpg/110px-Professor%27s_cube_solved.jpg',
      shape: 'Cube',
      difficulty: 'Moderate',
      solved: false
   },
   {
      id: uuidv4(),
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/V-Cube_6_small.jpg/110px-V-Cube_6_small.jpg',
      shape: 'Cube',
      difficulty: 'Hard',
      solved: false
   },
   {
      id: uuidv4(),
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Combination_Puzzle_Dodecahedron_Rubik.jpg/110px-Combination_Puzzle_Dodecahedron_Rubik.jpg',
      shape: 'Megaminx',
      difficulty: 'Hard',
      solved: false
   },
   {
      id: uuidv4(),
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Combination_Puzzle_Tetrahedron_Rubik.jpg/110px-Combination_Puzzle_Tetrahedron_Rubik.jpg',
      shape: 'Pyraminx',
      difficulty: 'Moderate',
      solved: false
   },
]

module.exports = {
   data
}