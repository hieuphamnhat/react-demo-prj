function greeter(fn: (a: string) => void){
    fn("hello, world");
}

function printToConsole(s: string){
    console.log(s);
}

greeter(printToConsole);

type GreetFunction = (a: string) => void;
function greet(fn: GreetFunction){
    fn('Hello 2')
}