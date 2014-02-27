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


/**
#### createUUID()
Creates a Universally Unique Identifier. Taken from
http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
**/
function createUUID() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
    s[8] = s[13] = s[18] = s[23] = "-";
    var uuid = s.join("");
    return uuid;
}


/**
#### gcd(int,int)
Calculates the greatest common divisor of two integers using Euclidian's 
algorithm.
**/
function gcd(a,b){
    var t;
    while (b != 0){
        t = b;
        b = a % b;
        a = t;
    }
    return a;
}


/**
#### lcm(int,int)
Calculates the least common multiple of two integers.
**/
function lcm(a,b){
    return (a * b / gcd(a, b));
}


/**
Creates all combinations of length m from an array using Chase's "twiddle"
algorithm. Adapted from http://www.netlib.no/netlib/toms/382.
**/
function combinations(arr, m){
    var m = m;
    var n = arr.length;
    var p = [];
    var combinations = [];
    if(n < m){ return combinations; }
    
    // Initialize the p array
    p[0] = n + 1;
    for(var i = 1; i <= n - m; i++){
        p[i] = 0;
    }
    var a = 1;
    for(var i = n - m + 1; i <= n; i++){
        p[i] = a;
        a++; 
    }
    p[n + 1] = -2;
    
    // Initialize the first combo
    var c = [];
    var a = n - m;
    for(var i = 0; i < m; i++){
        c[i] = arr[a];
        a++; 
    }
    combinations.push(c.slice(0));
    
    // Perform the "twiddle"
    var i,j,k;
    var x,y,z;
    function twiddle(){
        j = 1;
        while(p[j] <= 0){ j++; }
        if(p[j - 1] == 0){
            for(i = j -1; i != 1; i--){ p[i] = -1; }
            p[j] = 0;
            x = z = 0;
            p[1] = 1;
            y = j - 1;
        }
        else{
            if(j > 1){ p[j - 1] = 0; }
            do{
                j++;
            }while(p[j] > 0);
            k = j - 1;
            i = j;
            while(p[i] == 0){ p[i++] = -1; }
            if(p[i] == -1){
                p[i] = p[k];
                z = p[k] - 1;
                x = i - 1;
                y = k - 1;
                p[k] = -1;
            }
            else{
                if(i == p[0]){ return true; }
                else{
                    p[j] = p[i];
                    z = p[i] - 1;
                    p[i] = 0;
                    x = j - 1;
                    y = i - 1;
                }
            }
        }
        return false;
    }
    
    while(!twiddle()){
        c[z] = arr[x];
        combinations.push(c.slice(0));
    }
    return combinations;
}


/**
#### checkOverlap(bound, bound)
Given two bounding rectangles, returns true if they overlap or intersect.
**/
function checkOverlap(a, b){
    return (a.left < b.right && a.right > b.left &&
            a.top < b.bottom && a.bottom > b.top);
}


/**
#### pointDistance(p1, p2)
Calculates the distance between two points.
**/
function pointDistance(p1, p2){
  var xs = 0;
  var ys = 0;
  xs = p2.x - p1.x;
  xs = xs * xs;
  ys = p2.y - p1.y;
  ys = ys * ys;
  return Math.sqrt( xs + ys );
}

/**
#### isArray(object)
Returns true if the object is an array
**/
function isArray(item) {
    return Object.prototype.toString.call(item) === "[object Array]";
}


/**
#### isObject(object)
Returns true if the object is an object
**/
function isObject(item){
    return Object.prototype.toString.call(item) === "[object Object]";
}


/**
#### isFunction(object)
Returns true if the object is a function
**/
function isFunction(item){
    return Object.prototype.toString.call(item) === "[object Function]";
}

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