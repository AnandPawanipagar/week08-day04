function funOne(a) {
    let call2 = funTwo(a);
    
return call2
}
function funTwo(b) {
  return b*b*b
}
function funThree(a) {
  let call4 = funFour(a);
return call4
}
function funFour(b) {
return b*b
}

let ans=funOne(2);
let ans2=funThree(3);
console.log(ans);
console.log(ans2);
console.log('All the functios are executed');

