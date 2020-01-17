const result = 0
let currentResult = result

function add() {
  let result = 0

  for(let i = 0; i < arguments.length; i++) {
    result += arguments[i]
  }
  return result
}

let calculationDescription = '( ' + currentResult + ' + 10 ) * 3 / 2 - 1'
currentResult = add(10, 20, 40, 50, 60)

outputResult(currentResult, calculationDescription)
