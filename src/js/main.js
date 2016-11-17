function fizz (a) {
  // TODO
  return a;
};

function fizzBuzz (start, end) {
  // Write fizzBuzz here once fizz is finished.
  let fizzBuzzArray=[];
  let i;
  for (i=start; i<=end; i++){
  	fizzBuzzArray.push(i);
  }

  return fizzBuzzArray;
};

export { fizz, fizzBuzz};
