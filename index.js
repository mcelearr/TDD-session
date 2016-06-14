QUnit.test('check testing environment is functioning', function(assert){
  assert.equal(1, '1', 'string 1 and number 1 have the same value');
});

QUnit.test('check if function exists', function(assert){
  assert.equal(stringCalculator('1'), 1, 'stringCaclulator exists');
});

QUnit.test('if string is empty, return 0', function(assert){
  assert.equal(stringCalculator(''), 0, 'returns 0 for empty string');
});

QUnit.test('stringCalculator should add two numbers together', function(assert){
  assert.equal(stringCalculator('1,1'), 2, 'adds two numbers together');
});

QUnit.test('stringCalculator should add two numbers together', function(assert){
  assert.equal(stringCalculator('1,2,3'), 6, 'adds three numbers together');
});

QUnit.test('stringCalculator should add many numbers together', function(assert){
  assert.equal(stringCalculator('5, 10, 5, 10, 5, 10'), 45, 'adds many numbers together');
});

QUnit.test('ignore values which are over 1000', function(assert){
  assert.equal(stringCalculator('1,2,1001,3'), 6, 'removes elements with value greater than 1000');
});

QUnit.test('stringCalculator should take new line as delimiter', function(assert){
  assert.equal(stringCalculator('1\n2\n3'), 6, 'allows new line delimiter');
});

QUnit.test('stringCalculator should take new line and question mark as delimiters', function(assert){
  assert.equal(stringCalculator(''), 10, 'allows new line and question mark as delimeters');
});

QUnit.test('stringCalculator should take multiple delimiters', function(assert){
  assert.equal(stringCalculator(''), 10, 'allows multiple delimiters');
});

QUnit.test('stringCalculator should take delimeters of any length', function(assert){
  assert.equal(stringCalculator(''), 6, 'allows delimeters of any length');
});

QUnit.test('Allow multiple delimeters in any combination', function(assert){
  assert.equal(stringCalculator(''), 6, 'account for all delimeter variations');
});
