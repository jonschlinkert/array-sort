var arraySort = require('..');

var arr = [
  {one: 'w', two: 'b'},
  {one: 'z', two: 'a'},
  {one: 'x', two: 'c'},
  {one: 'y', two: 'd'},
];

function compare(prop) {
  return function (a, b) {
    return a[prop].localeCompare(b[prop]);
  };
}

var result = arraySort(arr, function (a, b) {
  return a.two.localeCompare(b.two);
});

console.log(result);
// Results in:
// [ { one: 'z', two: 'a' },
//   { one: 'w', two: 'b' },
//   { one: 'x', two: 'c' },
//   { one: 'y', two: 'd' } ]
