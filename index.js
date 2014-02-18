module.exports = function iterate(el, find, results) {
  results = results || [];
  if (!find(el)) return results;
  var children = el.childNodes;
  if (children.length) {
    for (var i = 0; i < children.length; i++) {
      iterate(children[i], find, results);
    }
  } else {
    results.push(el);
  }
  return results;
}