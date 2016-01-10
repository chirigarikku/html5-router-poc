;(function(global, trim, undefined) {
  function Router(el, routes) {
    this.el = el;
    this.routes = routes;
  }

  Router.prototype.start = function start() {
    var _this = this;

    global.addEventListener('hashchange', function() {
      _this.dispatch(window.location.hash);
    });

    global.addEventListener('load', function() {
      _this.dispatch(window.location.hash);
    });
  }

  Router.prototype.dispatch = function dispatch(path) {
    var sanitized = this.sanitize(path);
    var index = Object.keys(this.routes).indexOf(sanitized);

    if ( index === -1 ) {
      if ( this.routes['404'] == null ) {
        throw new Error('Page does not exist!');
      }

      return this.routes['404'];
    }

    this.push(sanitized);
    var route = this.routes[sanitized]();
    this.el.innerHTML = route;
  }

  Router.prototype.sanitize = function sanitize(path) {
    return trim(path.replace('#!', ''), '/');
  }

  Router.prototype.push = function(route) {
    global.history.pushState(null, null, 
      !route.length ? '/' : route
    );
  }

  Router.prototype.replace = function(route) {
    global.history.replaceState(null, null, 
      !route.length ? '/' : route
    );
  }

  global.Router = Router;
})(window, window.trim);