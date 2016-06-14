QUnit.test('a test', function(assert){
  assert.equal(1, '1', 'string 1 and number 1 have the same value');
});

QUnit.test('a test to make sure function exists', function(assert){
  assert.equal(stringCalculator('1'), 1, 'string caclulator exists');
});

QUnit.test('test to see if stringCalculator can add two numbers together', function(assert){
  assert.equal(stringCalculator('1,1'), 2, 'adds two numbers together');
});

QUnit.test('test to see if string is empty', function(assert){
  assert.equal(stringCalculator(''), 0, 'returns 0 for empty string');
});

QUnit.test('check to see if function can take 3 numbers', function(assert){
  assert.equal(stringCalculator('1,2,3'), 6, 'adds 3 numbers together');
});

QUnit.test('check to see if it can add a large amount of numbers', function(assert){
  assert.equal(stringCalculator('5, 10, 5, 10, 5, 10'), 45, 'adds large numbers');
});

QUnit.test('check to see if function can take new line delimiter', function(assert){
  assert.equal(stringCalculator('1\n2\n3'), 6, 'allows new line delimiter');
});

QUnit.test('check to see if function can take three delimiters which are ?, ;, \n', function(assert){
  assert.equal(stringCalculator('//[?][;][\n]\n1?2;3\n4'), 10, 'allows different delimeters');
});

QUnit.test('ignore values which are over 1000', function(assert){
  assert.equal(stringCalculator('1,2,1001,3'), 6, 'removes elements with value greater than 1000');
});

QUnit.test('account for delimeters of any length', function(assert){
  assert.equal(stringCalculator('//[???]\n1???2??3'), 6, 'account for delimeters of any length');
});

QUnit.test('Allow multiple delimeters in any combination', function(assert){
  assert.equal(stringCalculator('//[???]\n1???2??\n  \n[???]   \n [;;;]3'), 6, 'account for all delimeter variations');
});
