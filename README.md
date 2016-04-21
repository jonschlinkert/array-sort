# array-sort [![NPM version](https://img.shields.io/npm/v/array-sort.svg?style=flat)](https://www.npmjs.com/package/array-sort) [![NPM downloads](https://img.shields.io/npm/dm/array-sort.svg?style=flat)](https://npmjs.org/package/array-sort) [![Build Status](https://img.shields.io/travis/jonschlinkert/array-sort.svg?style=flat)](https://travis-ci.org/jonschlinkert/array-sort)

> Fast and powerful array sorting. Sort an array of objects by one or more properties. Any number of nested properties or custom comparison functions may be used.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install array-sort --save
```

## Usage

Sort an array by the given object property:

```js
var arraySort = require('array-sort');

arraySort([{foo: 'y'}, {foo: 'z'}, {foo: 'x'}], 'foo');
//=> [{foo: 'x'}, {foo: 'y'}, {foo: 'z'}]
```

**Reverse order**

```js
arraySort([{foo: 'y'}, {foo: 'z'}, {foo: 'x'}], 'foo', {reverse: true});
//=> [{foo: 'z'}, {foo: 'y'}, {foo: 'x'}]
```

## Params

```js
arraySort(array, comparisonArgs);
```

* `array`: **{Array}** The array to sort
* `comparisonArgs`: **{Function|String|Array}**: One or more functions or object paths to use for sorting.

## Examples

**[Sort blog posts](examples/blog-posts.js)**

```js
var arraySort = require('array-sort');

var posts = [
  { path: 'c.md', locals: { date: '2014-01-09' } },
  { path: 'a.md', locals: { date: '2014-01-02' } },
  { path: 'b.md', locals: { date: '2013-05-06' } },
];

// sort by `locals.date`
console.log(arraySort(posts, 'locals.date'));

// sort by `path`
console.log(arraySort(posts, 'path'));
```

**[Sort by multiple properties](examples/multiple-props.js)**

```js
var arraySort = require('array-sort');

var posts = [
  { locals: { foo: 'bbb', date: '2013-05-06' }},
  { locals: { foo: 'aaa', date: '2012-01-02' }},
  { locals: { foo: 'ccc', date: '2014-01-02' }},
  { locals: { foo: 'ccc', date: '2015-01-02' }},
  { locals: { foo: 'bbb', date: '2014-06-01' }},
  { locals: { foo: 'aaa', date: '2014-02-02' }},
];

// sort by `locals.foo`, then `locals.date`
var result = arraySort(posts, ['locals.foo', 'locals.date']);

console.log(result);
// [ { locals: { foo: 'aaa', date: '2012-01-02' } },
//   { locals: { foo: 'aaa', date: '2014-02-02' } },
//   { locals: { foo: 'bbb', date: '2013-05-06' } },
//   { locals: { foo: 'bbb', date: '2014-06-01' } },
//   { locals: { foo: 'ccc', date: '2014-01-02' } },
//   { locals: { foo: 'ccc', date: '2015-01-02' } } ]
```

**[Custom function](examples/custom-function.js)**

If custom functions are supplied, array elements are sorted according to the return value of the compare function. See the [docs for ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)`Array.sort()` for more details.

```js
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
// [ { one: 'z', two: 'a' },
//   { one: 'w', two: 'b' },
//   { one: 'x', two: 'c' },
//   { one: 'y', two: 'd' } ]
```

**[Multiple custom functions](examples/custom-functions.js)**

```js
var arr = [
  {foo: 'w', bar: 'y', baz: 'w'},
  {foo: 'x', bar: 'y', baz: 'w'},
  {foo: 'x', bar: 'y', baz: 'z'},
  {foo: 'x', bar: 'x', baz: 'w'},
];

// reusable compare function
function compare(prop) {
  return function (a, b) {
    return a[prop].localeCompare(b[prop]);
  };
}

// the `compare` functions can be a list or array
var result = arraySort(arr, compare('foo'), compare('bar'), compare('baz'));

console.log(result);
// [ { foo: 'w', bar: 'y', baz: 'w' },
//   { foo: 'x', bar: 'x', baz: 'w' },
//   { foo: 'x', bar: 'y', baz: 'w' },
//   { foo: 'x', bar: 'y', baz: 'z' } ]
```

## Related projects

You might also be interested in these projects:

* [get-value](https://www.npmjs.com/package/get-value): Use property paths (`a.b.c`) to get a nested value from an object. | [homepage](https://github.com/jonschlinkert/get-value)
* [set-value](https://www.npmjs.com/package/set-value): Create nested values and any intermediaries using dot notation (`'a.b.c'`) paths. | [homepage](https://github.com/jonschlinkert/set-value)
* [sort-asc](https://www.npmjs.com/package/sort-asc): Sort array elements in ascending order. | [homepage](https://github.com/jonschlinkert/sort-asc)
* [sort-desc](https://www.npmjs.com/package/sort-desc): Sort array elements in descending order. | [homepage](https://github.com/jonschlinkert/sort-desc)
* [sort-object](https://www.npmjs.com/package/sort-object): Sort the keys in an object. | [homepage](https://github.com/doowb/sort-object)

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/array-sort/issues/new).

## Building docs

Generate readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install verb && npm run docs
```

Or, if [verb](https://github.com/verbose/verb) is installed globally:

```sh
$ verb
```

## Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/jonschlinkert/array-sort/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on April 21, 2016._