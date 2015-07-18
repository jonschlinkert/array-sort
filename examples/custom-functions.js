var arraySort = require('..');

var arr = [
  {foo: 'w', bar: 'y', baz: 'w'},
  {foo: 'x', bar: 'y', baz: 'w'},
  {foo: 'x', bar: 'y', baz: 'z'},
  {foo: 'x', bar: 'x', baz: 'w'},
];

function compare(prop) {
  return function (a, b) {
    return a[prop].localeCompare(b[prop]);
  };
}

console.log(arraySort(arr, compare('foo'), compare('bar'), compare('baz')));

// Results in:
// [ { foo: 'w', bar: 'y', baz: 'w' },
//   { foo: 'x', bar: 'x', baz: 'w' },
//   { foo: 'x', bar: 'y', baz: 'w' },
//   { foo: 'x', bar: 'y', baz: 'z' } ]
