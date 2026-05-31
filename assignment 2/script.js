// ==========================
// Question 1
// Even Numbers 1 to 100
// ==========================

for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}

// ==========================
// Question 2
// Calculator using Switch
// ==========================

function calculate(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                return "Error: Division by zero is not allowed.";
            }
            result = num1 / num2;
            break;
        default:
            return "Error: Invalid operator.";
    }

    return result;
}

console.log(calculate(10, 5, '*'));

// ==========================
// Question 3
// Tax Calculator
// ==========================

function findTax(salary) {
    let taxRate = 0;

    switch (true) {
        case (salary > 0 && salary <= 500000):
            taxRate = 0;
            break;

        case (salary > 500000 && salary <= 1000000):
            taxRate = 0.10;
            break;

        case (salary > 1000000 && salary <= 1500000):
            taxRate = 0.20;
            break;

        case (salary > 1500000):
            taxRate = 0.30;
            break;

        default:
            return "Invalid salary amount.";
    }

    return salary * taxRate;
}

console.log(findTax(750000));

// ==========================
// Question 4
// Sum of Product of Digits
// ==========================

function sumOfProductOfDigits(n1, n2) {

    let str1 = n1.toString();
    let str2 = n2.toString();

    let sum = 0;

    let maxLength = Math.max(str1.length, str2.length);

    for (let i = 1; i <= maxLength; i++) {

        let digit1 = str1[str1.length - i]
            ? parseInt(str1[str1.length - i])
            : 0;

        let digit2 = str2[str2.length - i]
            ? parseInt(str2[str2.length - i])
            : 0;

        sum += digit1 * digit2;
    }

    return sum;
}

console.log(sumOfProductOfDigits(6, 34));