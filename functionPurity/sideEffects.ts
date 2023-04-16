//In computer science, an operation, function or expression is said to have a side effect if it modifies some state variable value(s) outside its local environment, which is to say if it has any observable effect other than its primary effect of returning a value to the invoker of the operation. Example side effects include modifying a non-local variable, modifying a static local variable, modifying a mutable argument passed by reference, performing I/O or calling other functions with side-effects.[1] In the presence of side effects, a program's behaviour may depend on history; that is, the order of evaluation matters. Understanding and debugging a function with side effects requires knowledge about the context and its possible histories. https://en.wikipedia.org/wiki/Side_effect_(computer_science)

let rate;
let size = 12;
let weight = 4;
let speed = 5;

function impureShippingRate() {
  rate = (size + 1) * weight + speed;
}

impureShippingRate();
console.log(rate);

size = 8;
speed = 6;

impureShippingRate();
console.log(rate);
