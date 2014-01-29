// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/**
#### .moveToFront()
Moves a D3 selection to the front of its parent. Taken from
http://stackoverflow.com/questions/14167863/how-can-i-bring-a-circle-to-the-front-with-d3
**/
d3.selection.prototype.moveToFront = function() {
  return this.each(function(){
    this.parentNode.appendChild(this);
  });
};

/**
#### .moveToBack()
Moves a D3 selection to the back of its parent. Taken from
http://stackoverflow.com/questions/14167863/how-can-i-bring-a-circle-to-the-front-with-d3
**/
d3.selection.prototype.moveToBack = function() { 
    return this.each(function() { 
        var firstChild = this.parentNode.firstChild; 
        if (firstChild) { 
            this.parentNode.insertBefore(this, firstChild); 
        } 
    }); 
};

