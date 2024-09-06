const fs = require("fs");
function read() {
1_createReadFunction
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

  /**
   *Андрей
   */
}

function solve(board) {

    const size = 9;
    const boxSize = 3;

    const findEmpty = (board) => {
        for (let r = 0; r < size; r++) {
            for (let c = 0; c < size; c++) {
                if(board[r][c] === '.') {
                    return [r,c];
                }
            }
        }
        return null;
    }
}   

//3. Проверка правильности числа — validate Дима
const validate = (num, pos, board) => {
    const [r, c] = pos;  // Позиция пустой клетки


    for (let i = 0; i < size; i++) {
        if (board[i][c] === num && i !== r) {
            return false;  // Если число уже есть в строке, вернуть false
        }
    }

    // Проверка столбца
    for (let i = 0; i < size; i++) {
        if (board[r][i] === num && i !== c) {
            return false;  // Если число уже есть в столбце, вернуть false
        }
    }

    // Проверка малого квадрата 3x3
    const boxRow = Math.floor(r / boxSize) * boxSize;
    const boxCol = Math.floor(c / boxSize) * boxSize;

    for (let i = boxRow; i < boxRow + boxSize; i++) {
        for (let j = boxCol; j < boxCol + boxSize; j++) {
            if (board[i][j] === num && i !== r && j !== c) {
                return false;  // Если число уже есть в 3x3 блоке, вернуть false
            }
        }
    }

    return true;  // Если число подходит, вернуть true

}
//4. Рекурсивное решение — solve Анастасия

const solve = () => {
    const currPos = findEmpty(board);  // Поиск пустой клетки

    if (currPos === null) {
        return true;  // Если пустых клеток нет, судоку решён
    }

    for (let i = 1; i < size + 1; i++) {  // Пробуем числа от 1 до 9
        const currNum = i.toString();
        const isValid = validate(currNum, currPos, board);  // Проверяем, можно ли вставить число

        if (isValid) {
            const [x, y] = currPos;
            board[x][y] = currNum;  // Временно вставляем число

            if (solve()) {
                return true;  // Если рекурсивное решение нашло ответ, завершить
            }

            board[x][y] = '.';  // Если не нашлось решение, возвращаем клетку в исходное состояние
        }
    }

    return false;  // Если для текущей пустой клетки не нашлось подходящего числа, возвращаемся назад
}

//5. Вызов решения и вывод результата Андрей


// Функция, которая выводит судоку в консоль ⬇
function prettyBoard(input) {
  console.log('\n -------------------------------------')
  input.forEach(el => {
     console.log( ' | ' + el.join(' | ') + ' | ' + '\n -------------------------------------' )
})
console.log('\n')
 
}

// .split('')

prettyBoard(input)

