function greeter(fn) {
    fn("hello, world");
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
function greet(fn) {
    fn('Hello 2');
}
