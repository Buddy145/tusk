//setTimeOut:
// setTimeout(()=>{
//     console.log("runs 2 seconds")
// },2000)

//setInterval:
// setInterval(() => {
//     console.log("runs every 2 seconds")
// }, 3000);

//using clearinterval we can stop executing the inerval
// let timerId=setInterval(() => {
//     console.log("runs every 2 seconds")
// }, 3000);
// clearInterval(timerId)
//if we want to stop the intervals after some time here we can use both settimeout and setinterval together
// const timerId=setInterval(() => {
//     console.log("runs every 2 seconds")
// }, 2000);

// setTimeout(() => {
//     clearInterval(timerId)
// }, 5000);
//here we are stopping timeinterval after 5 seconds means we get output:runs every 2 seconds 2 times and then cleat the time interval
const timerId=setTimeout(function() {
    console.log("Hello after 2 seconds");
}, 2000); // Will print "Hello after 2 seconds" after 2 seconds.
clearTimeout(timerId);