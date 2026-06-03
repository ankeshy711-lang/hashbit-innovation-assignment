// Q1

function scopeDemo() {

    var a = 10;
    let b = 20;
    const c = 30;

    console.log("Q1:", a, b, c);
}

scopeDemo();


// Q2

const fruits = [
    "Apple",
    "Mango",
    "Banana",
    "Orange",
    "Grapes"
];

function secondFruit() {

    return fruits[1];
}

console.log("Q2:", secondFruit());


// Q3

function modifyArray(arr) {

    arr.push("New");

    arr.pop();

    return arr;
}

console.log(
    "Q3:",
    modifyArray([1, 2, 3])
);


// Q4

const numbers1 = [1, 2, 3, 4, 5];

const squared =
numbers1.map(num => num * num);

console.log("Q4:", squared);


// Q5

const numbers2 =
[1, 2, 3, 4, 5, 6];

const oddNumbers =
numbers2.filter(
    num => num % 2 !== 0
);

console.log("Q5:", oddNumbers);


// Q6

const person = {

    name: "Ankesh",

    age: 20,

    occupation: "Student"
};

function greet(obj) {

    console.log(
        `Q6: Hello I am ${obj.name}, a ${obj.occupation}`
    );
}

greet(person);


// Q7

function rectangleArea(rect) {

    return rect.width *
           rect.height;
}

console.log(
    "Q7:",
    rectangleArea({
        width: 10,
        height: 5
    })
);


// Q8

const person2 = {

    name: "Ankesh",

    age: 20,

    city: "Lucknow"
};

function getKeys(obj) {

    return Object.keys(obj);
}

console.log(
    "Q8:",
    getKeys(person2)
);


// Q9

function mergeObjects(
    obj1,
    obj2
) {

    return Object.assign(
        {},
        obj1,
        obj2
    );
}

console.log(
    "Q9:",
    mergeObjects(
        { a: 1 },
        { b: 2 }
    )
);


// Q10

const numbers3 =
[10, 20, 30, 40];

const sum =
numbers3.reduce(
    (acc, num) => acc + num,
    0
);

console.log(
    "Q10:",
    sum
);