var arraySort = require('..');

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
