function greet(name) {
    return `Hello ${name}`
}

console.log(greet('John'))

// =============================================

let numbers = [5, 11, 2, 16, 7]

function printNumbersGreaterThanTen(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            console.log(array[i])
        }
    }
}

printNumbersGreaterThanTen(numbers)   // 11 и 16


// ==============================================

function calculator(num1, num2, operator) {
    let result
    switch (operator) {
        case 'plus':
            result = num1 + num2
            break
        case 'minus':
            result = num1 - num2
            break
        case 'multiply':
            result = num1 * num2
            break
        case 'divide':
            result = num1 / num2
            break
    }
    console.log(result)
}


calculator(3, 1, 'plus') // 4
calculator(2, 3, 'minus') // -1
calculator(5, 2, 'multiply') // 10
calculator(10, 2, 'divide') // 5




