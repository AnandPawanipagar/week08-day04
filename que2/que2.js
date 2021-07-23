function funOne(a) {
    let call2 = funTwo(a);
return a*a
}
function funTwo(b) {
  let call3 = funThree(b);
  return b*b*b
}
function funThree(c) {
  let call4 = funFour(c);
  return c*c*c*c
}
function funFour(d) {
  let call2 = funTwo(d);
  return d*d*d*d*d
}
let ans=funOne(2);
console.log('All the functios are executed');

//Error showing that maximum call stack exceded.