function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i == 1) {
      array[i] = "I am 1 strange loop.";
    }
    
    else {
      var x = i;
      array[i] = "I am ${x} strange loop.";
    }
  }
  return array;
}

