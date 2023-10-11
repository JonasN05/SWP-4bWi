let myName = 'Kyle';

function printName() {
    console.log(myName);
}

myName = 'Joey';

printName();


myName = 'Kate';
printName();




function outerFunction(outerVariable) {
    const outer2 = 'Hi';
    return function innerFunction (innerVariable) {
        console.log(outerVariable);
        console.log(innerVariable);
        console.log(outer2);
    }
}

const newFunction = outerFunction('outside');
newFunction('inner');