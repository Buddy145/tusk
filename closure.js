// function outer(){
//     let outervar="Hello Buddy"

// function inner(){
//     console.log(outervar)
// }
// return inner;
// }
// const closurefunction=outer();
// closurefunction();
function outer() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

// const counter = outer();
// counter();
// counter();
// counter();
const counter1 = outer();
const counter2 = outer();

counter1();
counter1();
counter2();
counter2();
