// Ternary Operators Practice
// condition ? truthy : falsy

// Function that will return the statement this is false if
// the number is lower

function isLower(number1,number2){
    return(number1<number2 ? number1 + ' is less than ' +number2 : number1 + ' is greater than ' +number2);
}

test1 = document.getElementById('Test1');
test1.innerHTML = isLower(65,55);

function whatFruit(fruit){
    return fruit=='apple' ? 'Fruit is Apple':
        fruit=='banana' ? 'Fruit is Banana':
        fruit=='kiwi' ? 'Fruit is Kiwi':
        'not a fruit i know'
    
}

test11 = document.getElementById('Test1.1');
test11.innerHTML = whatFruit('adasdasd');

// Learning Object Literals