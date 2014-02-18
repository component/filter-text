var find = require('filter-text');
var assert = require('assert');

function finder(el) {
  // FIND THE D
  return ~el.textContent.indexOf('8=D');
}

function create(string) {
  var div = document.createElement('div');
  div.innerHTML = string;
  return div;
}

describe('DOM Find', function () {
  it('hello', function () {
    var string = 'hello';
    var results = find(create(string), finder);
    assert(results.length === 0);
  })

  it('found the D', function () {
    var string = '<p>8=D</p>';
    var results = find(create(string), finder);
    assert(results.length, 1);
    assert(results[0].nodeType === 3);
  })
})