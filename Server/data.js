const { v4: uuidv4 } = require('uuid');

const data = [
   {
      id: uuidv4(),
      img: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Rubiks_cube_solved.jpg',
      shape: 'Cube',
      difficulty: 'Easy',
      solved: 'false'
   },
   {
      id: uuidv4(),
      img: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Rubiks_revenge_solved.jpg',
      shape: 'Cube',
      difficulty: 'Hard',
      solved: 'false'
   },
   {
      id: uuidv4(),
      img: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Professor%27s_cube_solved.jpg',
      shape: 'Cube',
      difficulty: 'Moderate',
      solved: 'false'
   },
   {
      id: uuidv4(),
      img: 'https://upload.wikimedia.org/wikipedia/commons/8/89/V-Cube_6_small.jpg',
      shape: 'Cube',
      difficulty: 'Hard',
      solved: 'false'
   },
   {
      id: uuidv4(),
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/V-Cube_7_solved.jpg/220px-V-Cube_7_solved.jpg',
      shape: 'Cube',
      difficulty: 'Moderate',
      solved: 'false'
   },
   {
      id: uuidv4(),
      img: 'https://upload.wikimedia.org/wikipedia/en/2/2f/Combination_Puzzle_Dodecahedron_Rubik.jpg',
      shape: 'Megaminx',
      difficulty: 'Hard',
      solved: 'false'
   },
   {
      id: uuidv4(),
      img: 'https://upload.wikimedia.org/wikipedia/en/5/5a/Combination_Puzzle_Tetrahedron_Rubik.jpg',
      shape: 'Pyraminx',
      difficulty: 'Moderate',
      solved: 'false'
   },
   {
      id: uuidv4(),
      img: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Rubiksmagic_solved.jpg',
      shape: '2D',
      difficulty: '?',
      solved: 'false'
   },
   {
      id: uuidv4(),
      img: 'https://www.cs.brandeis.edu/~storer/JimPuzzles/RUBIK/MasterBall/MasterBallRainbow-TN.jpg',
      shape: 'Sphere',
      difficulty: 'Easy',
      solved: 'false'
   },
]

module.exports = {
   data
}