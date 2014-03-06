// TODO Add some caching of calculated values, similarities, etc.
// TODO Implement intersection() and union()
// FIXME Fix bug(s) w/ arguments of Set constructor

/**
## SetDataSource
The "base" class for a source of set data. The source is responsible for
returning the elements of the "universal" set - all of the compounds
possible in a blood sample or all of the days in a month, for example - and
the individual data cases - sets of elements that are a subset of the
universal set.
**/
function SetDataSource(){
    var _obj = {};
    
    /**
    #### .elements()
    Returns the elements of the universal set. It is a Set object. See plugins.js.
    **/
    _obj.elements = function(){
        throw "NotImplemented";
    };
    
    /**
    #### .cases()
    The data cases - an array of DataCase objects containing a subset of the 
    universal set.
    **/
    _obj.cases = function(){
        throw "NotImplemented";
    };
    
    /**
    #### .load()
    Loads the data and returns a jQuery Deferred object. Callbacks can then be
    registered to be invoked using the deferred.then(), deferred.always(), 
    deferred.done(), and deferred.fail() methods. This is all chainable, too. 
    
    For example:
        source.load()
        .done(function(u,c){ console.log("Loaded data successfully"); })
        .fail(function(e){ console.log("Failed to load data: " + e); })
    
    When the data was loaded successfully, any applicable callbacks will be
    passed the elements and cases as parameters. If there was an error, the
    appropriate callbacks will be passed the error message. The this context is
    set to the SetDataSource object. For more details on the states, uses, etc. 
    of a jQuery Deferred object, see http://api.jquery.com/jQuery.Deferred/.
    **/
    _obj.load = function(callback){
        throw "NotImplemented";
    };
    
    return _obj;
}


/**
## Set([data],[hashFunction])
An implementation of a Set that allows objects to be stored. Both parameters are
optional. The first is data to be stored in the set on initialization. The
second is a hash function - it is passed the objects to be stored in the set and
should return a unique hash that can be used to determine if the object is already
in the set. If the hash function is not specified, the object hash will be its
string value.
**/
function Set(data, hash){
    var _data = {};
    var _hash = hash;
    var _obj  = {};
    
    /**
    #### .add(element)
    Adds an element to the set.
    **/
    _obj.add = function(e){
        _data[_hash(e)] = e;
        return e;
    };
    
    /**
    #### .has(element)
    Returns true if the set contains the given element.
    **/
    _obj.has = function(e){
        return Object.prototype.hasOwnProperty.call(_data, _hash(e));
    };
    
    /**
    #### .remove(element)
    Removes an element from the set. It returns true if the element was contained
    in the set and removed, false otherwise.
    **/
    _obj.remove = function(e){
        var hashed = _hash(e);
        var existed = Object.prototype.hasOwnProperty.call(_data, hashed);
        delete _data[hashed];
        return existed;
    };
    
    /**
    #### .clear()
    Removes all elements from this set.
    **/
    _obj.clear = function(){
        _data = {};
        return true;
    };
    
    /**
    #### .find(hash)
    Finds an element by hash and returns it.
    **/
    _obj.find = function(h){
        return _data[h];
    };
    
    /**
    #### .count()
    Returns the number of elements in this set
    **/
    _obj.count = function(){
        var count = 0;
        _obj.forEach(function(){ count++; })
        return count;
    };
    
    /**
    #### .intersection(Set)
    Produces the intersection of two sets. Returns a new Set object.
    **/
    _obj.intersection = function(other){
        var set = Set({}, _hash);
        other.forEach(function(e){
            if(_obj.has(e)){ set.add(e); }
        });
        return set;
    };
    
    /**
    #### .union(Set)
    Produces the union of two sets. Returns a new Set object.
    **/
    _obj.union = function(other){
        var set = Set(_data, _hash);
        other.forEach(function(e){
            set.add(e);
        })
        return set;
    };
    
    /**
    #### .elements()
    Returns all of the elements in this set. The returned order is arbitrary,
    although it appears that, at least in Chrome, the returned order is the
    same as the insertion order, i.e., Set([a,b,c]) will return [a,b,c].
    **/
    _obj.elements = function(){
        var elements = [];
        _obj.forEach(function(e){ elements.push(e); })
        return elements;
    };
    
    /**
    #### .forEach(function)
    Iterates over all the elements in this set, calling the given function. The
    order of iteration is arbitrary.
    **/
    _obj.forEach = function(f){
        for(var hash in _data){
            if(_data.hasOwnProperty(hash)){
                f.call(_obj, _data[hash]);
            }
        }
    };
    
    // Create the initial set
    if(!arguments.length || hash == undefined || hash == null){
        _hash = function(e){ return "\x00" + e; };
    }
    else if(arguments.length == 1 && isFunction(data)){
        _hash = data;
    }
    if(isArray(data)){
        data.forEach(function(e){ _obj.add(e); });
    }
    
    return _obj;
}


/**
## DataCase(label,data[,metadata])
A data case. Represents a subset of the universal element set with optional
metadata. The data passed in should be either an array or a Set. If it is an
array, the default set hash function will be used.
**/
function DataCase(label, data, meta){
    var _label = label;
    var _set   = isArray(data) ? Set(data) : data;
    var _meta  = meta ? meta : {};
    var _obj   = {};

    /**
    #### .label([string])
    Gets or sets the label for this data case.
    **/
    _obj.label = function(l){
        if(!arguments.length){ return _label; }
        _label = l;
        return _obj;
    };
    
    /**
    #### .set([elements])
    Gets or sets the elements associated with this case.
    **/
    _obj.set = function(d){
        if(!arguments.length){ return _set; }
        _set = isArray(d) ? Set(d) : d;
        return _obj;
    };
    
    /**
    #### .meta([key],[value])
    Gets or sets metadata associated with this data case.
    **/
    _obj.meta = function(key,val){
        if(!arguments.length){ return _meta; }
        if(arguments.length == 1){
            if(isObject(key)){ _meta = key; return; } 
            return _meta[key]; 
        }
        _meta[key] = val;
        return _obj;
    };
    
    return _obj;
}


/**
## SetExpression(root)
An expression tree that represents operations applied to the sets of elements
associated with data cases. For example, we can take two sets of elements, 
union them together, and then ask "Is x in the unioned set?"

There are two data structures used to construct the expression tree: operator 
nodes and data nodes.

Operator nodes represent one of the set operators: AND (intersection) or OR
(union). They may have other nodes as children. Data nodes represent a set of 
items and compose the leaves of the tree.

The membership of an element (e.g. compound) in the data set represented by an
expression tree can be calculated by calling the value() function and passing
in the element. The value returned is in the range [0,1]. The OR operator can 
produce a non-integer number - rather than calculating a binary 0 or 1 if an 
element is in the unioned set, a fraction is returned representing how many of 
the subsets out of the total contain the element.
**/
function SetExpression(root){
    var _root = root;
    var _obj = {};
    
    /**
    #### .root()
    Returns the root of the expression. It is a DataNode.
    **/
    _obj.root = function(){
        return _root;
    };
    
    /**
    #### .value(element)
    Returns the calculated value of an element in the set after the operations
    have been performed. It is a value in the range [0,1].
    **/
    _obj.value = function(e){
        var visitor = ValueCalculator(e);
        _root.accept(visitor);
        return visitor.value();
    };
    
    /**
    #### .count()
    Returns the number of data sets in this expression.
    **/
    _obj.count = function(){
        var visitor = SetCountCalculator();
        _root.accept(visitor);
        return visitor.count();
    };
    
    /**
    #### .similarity(expression, elements)
    Calculates the similarity between this expression and another one, based
    on the given element set.
    
    For each element, e, in the element set:
        If the value of e is 1 in one expression, and 0 in the other, the
        element is found in one expression, but not the other. The similarity
        metric is not increased.
    
        If the value of e is 1 in one expression and > 0 in the other, the
        element is found in one expression and at least partially found in the 
        other. If one expression has a fractional value for e, then we are 
        looking at an "OR" with a certain number of data sets containing the
        element and a certain number without. The similarity metric increases 
        by the lesser of the two numbers; a value in the range (0,1].
    
        If the value of e is 0 in one expression and < 1 in the other, the
        element is completely absent from one and at least partially absent from
        the other. The simliarity score increases by 1 - the greater value of e;
        a value in the range (0,1].
    
        If the value of e is between 0 and 1 in both expressions, things get a
        little more complicated. This represents a composite of multiple data
        sets. Each value is a fraction, such as 2/3 and 3/4, indicating how many
        sets contain the element. To calculate similarity, we normalize the 
        fractional values to a common denominator, then look at how many sets
        contain the element and how many do not. For example,

            2/3 = 8/12
            3/4 = 9/12
            No. of pairs of expressions with element:    8
            No. of pairs of expressions without element: 3
            ----------------------------------------------
            Total No. of matching pairs                 11
            ==============================================
            Similarity:                              11/12
    **/
    _obj.similarity = function(o,e){
        var metric = 0;
        e.forEach(function(e){
            var visitor = ValueCalculator(e);
            var myValue, myPresence, myAbsence, myTotal;
            var otherValue, otherPresence, otherAbsence, otherTotal;
            
            // Gather the statistics about the value and presence/absence of the
            // element in the two expressions.
            _root.accept(visitor);
            myValue = visitor.value();
            myPresence = visitor.presenceCount();
            myAbsence = visitor.absenceCount();
            myTotal = myPresence + myAbsence;
            
            visitor.reset();
            
            o.accept(visitor);
            otherValue = visitor.value();
            otherPresence = visitor.presenceCount();
            otherAbsence = visitor.absenceCount();
            otherTotal = otherPresence + otherAbsence;
            
            // The element is found in one expression but not the other; the
            // similarity does not increase
            if((myValue == 1 && otherValue == 0) || (myValue == 0 && otherValue == 1)){ return; }
            // The element is found in both expressions; the similarity
            // increases.
            if(myValue == 1 || otherValue == 1){ 
                metric += Math.min(myValue, otherValue); 
                return; 
            }
            // The element is absent in both expressions; the similarity
            // increases.
            if(myValue == 0 || otherValue == 0){ 
                metric += 1 - Math.max(myValue, otherValue);
                return;
            }
            // Special case: comparing two fractional values.
            if((myValue < 1 && myValue > 0) && (otherValue < 1 && otherValue > 0)){
                // Convert to the least common denominator
                var denominator = lcm(myTotal, otherTotal);
                var myFactor = (denominator / myTotal);
                var otherFactor = (denominator / otherTotal);
                myPresence = myFactor * myPresence;
                myAbsence = myFactor * myAbsence;
                otherPresence = otherFactor * otherPresence;
                otherAbsence = otherFactor * otherAbsence;
                
                metric += (Math.min(myPresence, otherPresence) + Math.min(myAbsence, otherAbsence)) / parseFloat(denominator);
                return;
            }
        });
        return metric;
    };
    
    /**
    #### .merge(expression, flatten)
    Merges another SetExpression with this one.
    **/
    _obj.merge = function(e){
        var otherRoot = e.root();
        var composite = e.count() > 1;
        
        if(composite){
            // The other expression is a composite expression. Create a new
            // level in the expression tree.
            var newRoot = OperatorNode('AND');
            newRoot.addChild(_root);
            newRoot.addChild(otherRoot);
            _root = newRoot;
            _obj.flatten();
        }
        else{
            // The other expression is a single set.
            _root.addChild(otherRoot.children()[0]);
        }
        return _obj;
    };
    
    /**
    #### .flatten()
    Flattens this expression by moving any single layers up the tree.
    **/
    _obj.flatten = function(){
        var rChildren = _root.children();
        var nChildren = [];
        
        if(rChildren.length == 1 && isOperatorNode(rChildren[0])){
            _root = rChildren[0];
            return;
        }
        rChildren.forEach(function(n){
            if(isOperatorNode(n) && n.children().length == 1){
                var child = n.children()[0];
                n.removeChild(child);
                nChildren.push(child);
                return;
            }
            nChildren.push(n);
        });
        _root.clear();
        nChildren.forEach(function(n){ _root.addChild(n); });
    }
    
    /**
    #### .preview(expression)
    Returns a copy of this expression merged with another.
    **/
    _obj.preview = function(e){
        // Clone the root and its children.
        var newRoot = OperatorNode(_root.operator())
        _root.children().forEach(function(n){
            newRoot.addChild(n);
        });
        var newExpr = SetExpression(newRoot);
        newExpr.merge(e);
        return newExpr;
    };
    
    /**
    #### .accept(visitor)
    Implements the visitor pattern to allow various operations on this expression.
    This performs a depth-first search.
    **/
    _obj.accept = function(v){
        _root.accept(v);
    };
    
    return _obj;
}


/**
## OperatorNode(operator)
Creates an operator node with the given operator. The current operators
supported are: "AND" and "OR". Default is "AND". Each operator node may have
other nodes as children to form an expression tree.
**/
function OperatorNode(operator){
    var _operator = operator;
    var _children = [];
    var _obj      = {};

    /**
    #### .addChild(node)
    Adds a child node to this operator.
    **/
    _obj.addChild = function(n){
        _children.push(n);
        return _obj;
    };
    
    /**
    #### .removeChild(node)
    Removes a child node from this operator.
    **/
    _obj.removeChild = function(n){
        for(var i = 0; i < _children.length; i++){
            if(_children[i] === n){ _children.splice(i, 1); return; }
        }
        return _obj;
    };
    
    /**
    #### .children()
    Returns the children of this node.
    **/
    _obj.children = function(){
        return _children.slice(0);
    };
    
    /**
    #### .clear()
    Removes the children from this operator.
    **/
    _obj.clear = function(){
        _children = [];
        return _obj;
    };
    
    /**
    #### .operator()
    Gets or sets the operator for this node.
    **/
    _obj.operator = function(o){
        if(!arguments.length){ return _operator; }
        _operator = o;
        return _obj;
    };
    
    /**
    #### .accept(visitor)
    Implements the visitor pattern to allow various operations on this node.
    This performs a depth-first search.
    **/
    _obj.accept = function(v){
        v.visitPre(_obj);
        _children.forEach(function(c){ c.accept(v); });
        v.visitPost(_obj);
    };
    
    return _obj;
}


/**
## DataNode(dataCase)
This node represents a data case/data set in the boolean expression tree. These 
nodes are found at the leaves of the tree.
**/
function DataNode(dataCase){
    var _obj = {};
    var _data = dataCase;
    
    /**
    #### .data()
    Returns the DataCase object associated with this node.
    **/
    _obj.data = function(){
        return _data;
    };
    
    /**
    #### .value(element)
    Returns 0 or 1 to indicate if the element exists in the data case.
    **/
    _obj.value = function(e){
        return _data.set().has(e) ? 1 : 0;
    };
    
    /**
    #### .accept(visitor)
    Implements the visitor pattern to allow various operations on this node.
    **/
    _obj.accept = function(v){
        v.visitPre(_obj);
        v.visitPost(_obj);
    };
    
    return _obj;
}


/**
#### isOperatorNode(node)
Returns true if the node is an Operator node using duck-typing.
**/
function isOperatorNode(n){
    return Object.prototype.toString.call(n.operator) === "[object Function]";
}


/**
## ValueCalculator(expression)
An object that uses the visitor pattern to calculate the value of an element
in the data sets of an expression tree. If you are going to re-use the same
object, call reset() before passing it to accept().

After the visitor is done, call value() to retrieve the calculated value. For
additional details, the presenceCount() and absenceCount() give the number of
sets at the TOP level that contain or do not contain the element, respectively.
**/
function ValueCalculator(element){
    var _element = element;
    var _obj = {};
    var _operatorStack = [];
    var _dataStack = [[],];
    var _presenceCount = 0;
    var _absenceCount = 0;
    
    _obj.visitPre = function(n){
        if(isOperatorNode(n)){
            _operatorStack.push(n.operator());
            _dataStack.push([]);
        }
    };
    
    _obj.visitPost = function(n){
        if(isOperatorNode(n)){
            var operator = _operatorStack.pop();
            var parentOp = _operatorStack.pop();
            var data = _dataStack.pop();
            var ret  = _dataStack.pop();
            
            // We apply a simplification rule here: X && (Y && Z) = X && Y && Z
            // and X || (Y || Z) = X || Y || Z.
            if(operator === parentOp){
                ret = ret.concat(data);
            }
            else{
                // The operators are very similar in nature, so we can reduce
                // share a good chunk of code
                var sum = 0;
                _presenceCount = 0;
                data.forEach(function(d){
                    if(d){ _presenceCount++ };
                    sum += d;
                });
                _absenceCount = data.length - _presenceCount;
                
                if(operator === "AND"){ ret.push(_absenceCount >= 1 ? 0 : 1); }
                else if(operator === "OR"){ ret.push(parseFloat(sum) / data.length); }
            }
            _dataStack.push(ret);
            _operatorStack.push(parentOp);
            return;
        }
        else{
            var data = _dataStack.pop();
            data.push(n.value(_element));
            _dataStack.push(data);
            return;
        }
    };
    
    _obj.value = function(){
        return _dataStack[0][0];
    };
    
    _obj.presenceCount = function(){
        return _presenceCount;
    };
    
    _obj.absenceCount = function(){
        return _absenceCount;
    };
    
    _obj.reset = function(){
        _presenceCount = 0;
        _absenceCount = 0;
        _dataStack = [[],];
    };
    
    return _obj;
}


/**
## SetCountCalculator
Counts the number of data sets in an expression tree.
**/
function SetCountCalculator(){
    var _obj = {};
    var _count = 0;
    
    _obj.visitPre = function(n){
        if(!isOperatorNode(n)){ _count++; }
    };
    
    _obj.visitPost = function(n){};
    
    _obj.count = function(){
        return _count;
    };
    
    _obj.reset = function(){
        _count = 0;
    };
    
    return _obj;
}
