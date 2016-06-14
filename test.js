function stringCalculator(string){
  if (string == '') {
    return 0;
  }

  var noDelimiters = string.replace(/\D/g, ",");

  var numbersArr = noDelimiters.split(",").map(function(el) {
    if (el === "" || el >= 1000) {
      return 0;
    }
    return parseInt(el);
  });

  return numbersArr.reduce(function(a,b){
    return a + b;
  });
}
