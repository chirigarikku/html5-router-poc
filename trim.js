;(function(global, undefined) {
  function trim(str, delim) {
    delim = delim || ' ';

    var start = new RegExp('^' + delim + '+');
    var end = new RegExp(delim + '+$');

    return str
      .replace(start, '')
      .replace(end, '');
  }

  global.trim = trim;
})(window);