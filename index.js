;(function(global, Router, undefined) {
  var $content = document.getElementById('content');

  var router = new Router($content, {
    '': home,
    'page1': page1,
    'page2': page2,
    '404': notfound,
  });

  router.start();

  function home() {
    return 'Welcome home!';
  }

  function page1() {
    return 'You are in page1';
  }

  function page2() {
    return 'You are in page2.';
  }  

  function notfound() {
    return 'Oops! Page could not be found';
  }
})(window, window.Router);