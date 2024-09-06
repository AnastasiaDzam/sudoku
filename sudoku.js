const fs = require("fs");
function read() {
  const getPuzzle = fs.readFileSync("./puzzles.txt", "utf-8").split("\n");
  const gameArr = [];
  const callGame = getPuzzle[process.argv[2] - 1];
  for (let i = 0; i < callGame.length; i += 9) {
    gameArr.push(callGame.slice(i, i + 9).split(""));
  }
   return gameArr;
}
g
function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
// .split('')
