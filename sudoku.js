function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
}

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


// Функция, которая выводит судоку в консоль ⬇
function prettyBoard(input) {
  console.log('\n -------------------------------------')
  input.forEach(el => {
     console.log( ' | ' + el.join(' | ') + ' | ' + '\n -------------------------------------' )
})
console.log('\n')
}
prettyBoard(input)