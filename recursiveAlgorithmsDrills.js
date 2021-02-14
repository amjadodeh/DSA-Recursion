// 1. Counting Sheep
// a function that counts how many sheep jump over the fence
const countingSheep = (numOfSheep) => {
  if (numOfSheep === 0) {
    return console.log(`All sheep jumped over the fence`);
  }
  console.log(`${numOfSheep}: Another sheep jumps over the fence`);
  return countingSheep(numOfSheep - 1);
};

countingSheep(3);

// 2. Power Calculator
// a function that returns the value of the base raised to the power of the exponent
const powerCalculator = (base, exponent) => {
  if (exponent < 0) {
    return `exponent should be >= 0`;
  }
  if (exponent === 0) {
    return 1;
  }
  return base * powerCalculator(base, exponent - 1);
};

console.log(powerCalculator(10, 2));
console.log(powerCalculator(10, 0));
console.log(powerCalculator(10, -2));

// 3. Reverse String
// a function that reverses a string
const reverseString = (string) => {
  if (string === ``) {
    return ``;
  }
  return reverseString(string.slice(1)) + string[0];
};

console.log(reverseString('abc'));
console.log(reverseString('string'));

// 4. nth Triangular Number
// a function that calculates the nth triangular number
const triangularNumber = (n) => {
  if (n === 0) {
    return 0;
  }
  return n + triangularNumber(n - 1);
};

console.log(triangularNumber(5));

// 5. String Splitter
// a function that splits a string based on a separator
const stringSplitter = (string, separator) => {
  if (string.indexOf(separator) === -1) {
    return [string.slice(0, string.length)];
  }
  return [
    string.slice(0, string.indexOf(separator)),
    ...stringSplitter(string.slice(string.indexOf(separator) + 1), separator),
  ];
};

console.log(stringSplitter('02/20/2020', '/'));

// 6. Fibonacci
// a function that prints the Fibonacci sequence of a given number
const fibonacci = (num) => {
  if (num === 2) {
    return [1, 1];
  }
  let fibArray = fibonacci(num - 1);
  fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
  return fibArray;
};

console.log(fibonacci(7));

// 7. Factorial
// a function that finds the factorial of a given number
const factorial = (num) => {
  if (num === 1) {
    return num;
  }
  return num * factorial(num - 1);
};

console.log(factorial(5));

// 8. Find a way out of the maze
// a function that will help you find a possible path through the maze
let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e'],
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e'],
];

const mazeOut = (
  maze,
  position = 0,
  row = 0,
  column = 0,
  direction = 'V',
  path = []
) => {
  if (column < 0 || row < 0) {
    return;
  } else if (column >= maze[0].length || row >= maze.length) {
    return;
  }
  path[position] = direction;
  position++;
  if (maze[row][column] === 'e') {
    console.log(path);
    return;
  }
  if (maze[row][column] === ' ') {
    maze[row][column] = 'V';
    mazeOut(maze, position, row - 1, column, 'U', path); // go up
    mazeOut(maze, position, row, column + 1, 'R', path); // go right
    mazeOut(maze, position, row + 1, column, 'D', path); // go down
    mazeOut(maze, position, row, column - 1, 'L', path); // go left
  }
  position--;
};

mazeOut(maze);
mazeOut(mySmallMaze);

// 9. Find ALL the ways out of the maze
// a function that will help you find all possible exit paths through the maze
const allMazeOut = (
  maze,
  position = 0,
  row = 0,
  column = 0,
  direction = 'V',
  path = []
) => {
  if (column < 0 || row < 0) {
    return;
  } else if (column >= maze[0].length || row >= maze.length) {
    return;
  }
  path[position] = direction;
  position++;
  if (maze[row][column] === 'e') {
    console.log(path);
    return;
  }
  if (maze[row][column] === ' ') {
    maze[row][column] = 'V';
    allMazeOut(maze, position, row - 1, column, 'U', path); // go up
    allMazeOut(maze, position, row, column + 1, 'R', path); // go right
    allMazeOut(maze, position, row + 1, column, 'D', path); // go down
    allMazeOut(maze, position, row, column - 1, 'L', path); // go left
    maze[row][column] = ' ';
  }
  position--;
};

allMazeOut(maze);
allMazeOut(mySmallMaze);

// 10. Anagrams
// a function that creates an anagram list,
// listing all the rearrangements of a given word
const getAnagrams = (prefix, word) => {
  if (word.length <= 1) {
    console.log(prefix + word);
  } else {
    for (let i = 0; i < word.length; i++) {
      const currentWord = word.substring(i, i + 1);
      const wordBefore = word.substring(0, i);
      const wordAfter = word.substring(i + 1);
      getAnagrams(prefix + currentWord, wordBefore + wordAfter);
    }
  }
};

const prefix = '';
getAnagrams(prefix, 'east');

// 11. Organization Chart
// a function that prints the following organization chart,
// output should show the hierarchy in an object as shown below
// (indentation is to show the hierarchy)
//
// Zuckerberg
//     Schroepfer
//         Bosworth
//             Steve
//             Kyle
//             Andra
//         Zhao
//             Richie
//             Sofia
//             Jen
//     Schrage
//         VanDyck
//             Sabrina
//             Michelle
//             Josh
//         Swain
//             Blanch
//             Tom
//             Joe
//     Sandberg
//         Goler
//             Eddie
//             Julie
//             Annie
//        Hernandez
//             Rowi
//             Inga
//             Morgan
//        Moissinac
//             Amy
//             Chuck
//             Vinni
//        Kelley
//             Eric
//             Ana
//             Wes
//
const employees = [
  { id: 'Zuckerberg', boss: null },
  { id: 'Schroepfer', boss: 'Zuckerberg' },
  { id: 'Schrage', boss: 'Zuckerberg' },
  { id: 'Sandberg', boss: 'Zuckerberg' },
  { id: 'Bosworth', boss: 'Schroepfer' },
  { id: 'Zhao', boss: 'Schroepfer' },
  { id: 'Steve', boss: 'Bosworth' },
  { id: 'Kyle', boss: 'Bosworth' },
  { id: 'Andra', boss: 'Bosworth' },
  { id: 'Richie', boss: 'Zhao' },
  { id: 'Sofia', boss: 'Zhao' },
  { id: 'Jen', boss: 'Zhao' },
  { id: 'VanDyck', boss: 'Schrage' },
  { id: 'Swain', boss: 'Schrage' },
  { id: 'Sabrina', boss: 'VanDyck' },
  { id: 'Michelle', boss: 'VanDyck' },
  { id: 'Josh', boss: 'VanDyck' },
  { id: 'Blanch', boss: 'Swain' },
  { id: 'Tom', boss: 'Swain' },
  { id: 'Joe', boss: 'Swain' },
  { id: 'Goler', boss: 'Sandberg' },
  { id: 'Hernandez', boss: 'Sandberg' },
  { id: 'Moissinac', boss: 'Sandberg' },
  { id: 'Kelley', boss: 'Sandberg' },
  { id: 'Eddie', boss: 'Goler' },
  { id: 'Julie', boss: 'Goler' },
  { id: 'Annie', boss: 'Goler' },
  { id: 'Rowi', boss: 'Hernandez' },
  { id: 'Inga', boss: 'Hernandez' },
  { id: 'Morgan', boss: 'Hernandez' },
  { id: 'Amy', boss: 'Moissinac' },
  { id: 'Chuck', boss: 'Moissinac' },
  { id: 'Vinni', boss: 'Moissinac' },
  { id: 'Eric', boss: 'Kelley' },
  { id: 'Ana', boss: 'Kelley' },
  { id: 'Wes', boss: 'Kelley' },
];

const organizeChart = (employees, boss) => {
  let orgChart = {};
  employees
    .filter((employee) => employee.boss === boss)
    .forEach(
      (employee) =>
        (orgChart[employee.id] = organizeChart(employees, employee.id))
    );
  return orgChart;
};

console.log(JSON.stringify(organizeChart(employees, null)));

// 12. Binary Representation
// a function that prints out the binary representation of a given number
const toBinary = (num) => {
  num = num | 0;
  if (num <= 1) {
    return num.toString();
  }
  const bit = (num % 2).toString();
  return toBinary(num / 2) + bit;
};

console.log(toBinary(0));
console.log(toBinary(1));
console.log(toBinary(3));
console.log(toBinary(14));
console.log(toBinary(25));
