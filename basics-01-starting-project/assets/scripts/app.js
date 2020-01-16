const defaultResult = 0

let currentResult = defaultResult
let calculationDescription

calculationDescription = '( ' + currentResult + ' + 10 ) * 3 / 2 - 1'
currentResult = (currentResult + 10) * 3 / 2 -1

outputResult(currentResult, calculationDescription)