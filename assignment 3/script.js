// ==========================================
// Q1) Remove states starting with vowels
// ==========================================

const states = ["Andhra Pradesh", "Bihar", "Goa", "Gujarat", "Karnataka", "Kerala", "Odisha", "Uttar Pradesh"];

const filteredStates = states.filter(state => {
    let first = state[0].toUpperCase();
    return !['A', 'E', 'I', 'O', 'U'].includes(first);
});

console.log("Q1 Output:", filteredStates);


// ==========================================
// Q2) Reverse words in string
// ==========================================

let str = "I love my India";

let reversedStr = str.split(" ").reverse().join(" ");

console.log("Q2 Output:", reversedStr);


// ==========================================
// Q3) INDIA -> INDONESIA using splice
// ==========================================

let word = "INDIA";

let arr = word.split("");

arr.splice(3, 2, "O", "N", "E", "S", "I", "A");

console.log("Q3 Output:", arr.join(""));


// ==========================================
// Q4) Count vowels and consonants
// ==========================================

let sample = "JavaScript programming is awesome";

let vowels = 0;
let consonants = 0;

for (let char of sample.toLowerCase()) {

    if (char >= 'a' && char <= 'z') {

        if ("aeiou".includes(char))
            vowels++;
        else
            consonants++;
    }
}

console.log("Q4 Output:");
console.log("Vowels =", vowels);
console.log("Consonants =", consonants);


// ==========================================
// Q5) Replace wrong word
// ==========================================

function correctfn(string, wrong, correct) {
    return string.replace(wrong, correct);
}

console.log(
    "Q5 Output:",
    correctfn("I love football", "football", "cricket")
);


// ==========================================
// Q6) Filter numbers > 5
// ==========================================

let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];

let answer = inputArr.filter(num => num > 5);

console.log("Q6 Output:", answer);


// ==========================================
// Q7) Average using map and reduce
// ==========================================

const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] }
];

const averages = students.map(student => {

    const total = student.scores.reduce(
        (sum, score) => sum + score,
        0
    );

    return {
        name: student.name,
        average: total / student.scores.length
    };
});

console.log("Q7 Output:", averages);


// ==========================================
// Q8) Repeated sum until single digit
// ==========================================

function singleDigit(num) {

    while (num >= 10) {

        num = num
            .toString()
            .split("")
            .reduce((sum, digit) =>
                sum + Number(digit), 0);
    }

    return num;
}

console.log("Q8 Output:", singleDigit(456));


// ==========================================
// Q9) Count words in paragraph
// ==========================================

function countWords(paragraph) {

    return paragraph.trim().split(/\s+/).length;
}

console.log(
    "Q9 Output:",
    countWords("JavaScript is an awesome programming language")
);


// ==========================================
// Q10) Reverse string
// ==========================================

function reverseString(text) {

    return text.split("").reverse().join("");
}

console.log(
    "Q10 Output:",
    reverseString("Hello")
);


// ==========================================
// Q11) Average marks from object
// ==========================================

const data = [
    {
        student1: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student2: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student3: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    }
];

const result = data.map(student => {

    const key = Object.keys(student)[0];

    const marks = Object.values(student[key]);

    const total = marks.reduce(
        (sum, mark) => sum + mark,
        0
    );

    return {
        [key]: {
            average: Math.floor(total / marks.length)
        }
    };
});

console.log("Q11 Output:", result);