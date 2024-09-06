function read() {
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

//4. Рекурсивное решение — solve Анастасия

//5. Вызов решения и вывод результата Андрей
// Функция, которая выводит судоку в консоль ⬇
function prettyBoard(input) {
  console.log('\n -------------------------------------')
  input.forEach(el => {
     console.log( ' | ' + el.join(' | ') + ' | ' + '\n -------------------------------------' )
})
console.log('\n')
 
}
prettyBoard(input)