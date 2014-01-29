/*
    TODO Add clipping mask to labels
    TODO Are we interested in negation, i.e. NOT?
    TODO Document the events from PixelLayer
    TODO Non-linear interpolation of colors for OR?
    TODO Better way to set data of a pixel layer
    TODO Zooming
*/

/**
The following two data structures are used to construct an expression tree that
represents the ANDing and ORing (intersection and union) of different data sets.
An arbitrary expression can be created using two types of nodes: operator nodes
and data nodes.

Operator nodes represent one of the set operators: AND or OR. They may have 
other nodes as children. Data nodes represent a set of items. They compose the
leaves of the tree.

The membership of an element (e.g. compound) in the data set represented by an
expression tree can be calculated by calling the pixelValue() function on the
OperatorNode at the root of the tree. The value returned is in the range [0,1].
The OR operator can produce a non-integer number - rather than calculating a
binary 0 or 1 if an element is in the unioned set, a fraction is returned
representing how many of the unioned subsets contained the element (# of
subsets containing the element / # of subsets).
**/

/**
## OperatorNode([operator])
Creates an operator node with the given operator. The current operators
supported are: "AND" and "OR". Default is "AND".
**/
function OperatorNode(operator){
    var _obj = {};
    var _operator = operator || "AND";
    var _children = [];
    
    /**
    #### .operator([value])
    Gets or sets the operator associated with this node.
    **/
    _obj.operator = function(o){
        if(!arguments.length){ return _operator; }
        _operator = o;
        return _obj;
    };
    
    /**
    #### .addChild(node)
    Adds a child to this node. It can be another OperatorNode or a DataNode.
    **/
    _obj.addChild = function(n){
        _children.push(n);
        return _obj;
    };
    
    /**
    #### .children()
    Returns the children of this node
    **/
    _obj.children = function(){
        return _children;
    }
    
    
    /**
    #### .findDescendant(meta)
    Finds a descendant with the given metadata. Returns the node.
    **/
    _obj.findDescendant = function(m){
        
        
    };
    
    /**
    #### .removeDescendant(node)
    Removes a descendant from this operator.
    **/
    _obj.removeDescendant = function(n){
        
    };
    
    /**
    #### .clear()
    Removes any children from this node.
    **/
    _obj.clear = function(){
        _children = [];
        return _obj;
    }

    /**
    #### .pixelValue(element)
    Returns the calculated value for an element based on the subtree of this
    node. It is a value in the range [0,1].
    **/
    _obj.pixelValue = function(element){
        var curChild;
        if(_operator == "AND"){
            for(var i = 0 ; i < _children.length; i++){
                curChild = _children[i];
                if(curChild.data && !curChild.data().has(element)){ return 0; }
                else if(curChild.pixelValue && curChild.pixelValue(element) == 0){ return 0; }
            }
            return 1;
        }
        else if(_operator == "OR"){
            var sum = 0;
            for(var i = 0; i < _children.length; i++){
                curChild = _children[i];
                if(curChild.data && curChild.data().has(element)){ sum += 1; }
                // TODO: What do you do with an OR of an OR? Do you add the
                // decimal or do you round it up?
                // else if(curChild.pixelValue && curChild.pixelValue(element) > 0){ sum += 1; }
                else if(curChild.pixelValue){ sum += curChild.pixelValue(element); }
            }
            return parseFloat(sum) / _children.length;
        }
    };
    
    /**
    #### .metadata()
    Returns the metadata of all children.
    **/
    _obj.metadata = function(){
        var meta = [];
        _obj.accept({
            visitPre: function(){ return; },
            visitPost: function(n){ if(n.meta){ meta.push(n.meta()); }}
        });
        return meta;
    };
    
    /**
    #### .accept(visitor)
    Implements the visitor pattern to allow various operations on this subtree.
    **/
    _obj.accept = function(v){
        v.visitPre(_obj);
        for(var i = 0; i < _children.length; i++){
            _children[i].accept(v);
        }
        v.visitPost(_obj);
    };
    
    return _obj;
}


/**
## DataNode(data, [meta])
This node represents a data set in the boolean expression tree. These nodes
are found at the leaves of the tree.
**/
function DataNode(data, meta){
    var _obj = {};
    var _data = d3.set(data);
    var _meta = meta || {};
    _meta.count = _data.values().length;
    
    /**
    #### .meta([key], [value])
    Gets or sets metadata for this data set. If no arguments are given, the
    entire metadata object is returned. A 'count' metadata value is always
    made available with the number of items in the data set.
    **/
    _obj.meta = function(k,v){
        if(!arguments.length){ return _meta; }
        if(arguments.length == 1){ return _meta[k]; }
        _meta[k] = v;
        return _obj;
    };
    
    /**
    #### .data([array])
    Gets or sets the data associated with this node. It is coerced into a set.
    **/
    _obj.data = function(a){
        if(!arguments.length){ return _data; }
        _data = d3.set(a);
        _meta.count = _data.values().length;
        return _obj;
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


// Produces a scale that can be used to draw a band of items, much like
// d3.scale.ordinal().rangeBands(), but with fixed pixel padding.
function BandScale(){
    var _padding = 0;
    var _outerPadding = 0;
    var _domain = []
    var _range = [0,1];
    var _bandCache = null;
    
    var _scale = function(e){
        var index = _domain.indexOf(e);
        if(index == 0){ return value = _outerPadding; }
        else{ return index * (_scale.rangeBand() + _padding) + _outerPadding; }
    }
    
    /**
    #### .domain([array])
    Gets or sets the domain of the scale. Should be a set of ordinal values.
    **/
    _scale.domain = function(d){
        if(!arguments.length){ return _domain; }
        _domain = d;
        _bandCache = null;
        return _scale;
    }
    
    /**
    #### .rangeBands(interval,[padding],[outerPadding])
    Sets the output range to the specified interval with the given fixed
    padding widths.
    **/
    _scale.rangeBands = function(r,p,o){
       _range = r;
       _padding = p || 0;
       _outerPadding = o || 0;
       _bandCache = null;
       return _scale;
    }
    
    /**
    #### .rangeBand()
    Returns the width of a band.
    **/
    _scale.rangeBand = function(){
        if(_bandCache == null){
            var width = Math.abs(_range[1] - _range[0]);
            var bandCount = _domain.length;
            _bandCache = (width - (2 * _outerPadding) - (_padding * (bandCount - 1))) / bandCount;
        }
        return _bandCache;
    }
    return _scale;
}


/**
## PixelLayer(svg)
Draws a PixelLayer chart in the given SVG element.
**/
function PixelLayer(svg){
    var _svg = svg;
    var _root = d3.select(_svg);
    var _g = null;
    var _innerG = null;
    var _labelG = null;
    var _chart = {};
    var _x = 0;
    var _y = 0;
    var _width = 184;
    var _height = 184;
    var _columns = 15;
    var _rows = 15;
    var _pixelGap = 3;
    var _pixelColor = function(d,i){ return d3.rgb(17, 110, 220); }
    var _labelColor = function(d,i){ return d3.rgb(17, 110, 220); }
    var _labelText = function(d,i){ return d.name; }
    var _borderColor = d3.rgb(255,255,255);
    var _borderWidth = 0.5;
    var _elements = [];
    var _data = OperatorNode("AND");
    var _preview = null;
    var _listeners = {
        'preRender': [],
        'postRender': [],
        'pixelMouseover': [],
        'pixelMouseout': [],
        'pixelClick': [],
        'mousedown': [],
        'mouseup': [],
        'click': [],
        'dragstart': [],
        'drag': [],
        'dragend': [],
        'labelDrag': [],
    };
    
    // The drag behavior.
    var _dragging = false;
    var _dragLabel = null;
    var _drag = d3.behavior.drag()
    .origin(function(){ return {'x': _chart.x(), 'y': _chart.y()}; })
    .on('dragstart', function(){
        _dragging = true;
        callListeners('dragstart', _chart);
    })
    .on('drag', function(){
        _chart.x(d3.event.x);
        _chart.y(d3.event.y);
        _innerG.attr('transform', "translate(" + d3.event.x + "," + d3.event.y + ")");
        _labelG.attr('transform', "translate(" + d3.event.x + "," + d3.event.y + ")");
        callListeners('drag', _chart);
        if(_dragLabel != null){
            callListeners('labelDrag', _chart, _dragLabel);
            _dragLabel = null;
        }
    })
    .on('dragend', function(){
        _dragging = false;
        callListeners('dragend', _chart);
    });
    
    /**
    #### reset()
    Resets the chart, recreating the top-level elements.
    **/
    function reset(){
        if(_g){ _g.remove(); }
        
        // The PixelLayer contains three major svg:g elements. The outer, main
        // g element, an inner g element, and a g element for labels. This is
        // necessary for drag behavior to work correctly (ask Tim for an
        // explaination if you'd like). Dragging occurs on the inner g, removing
        // conflicts with clicks, etc., on the labels.
        _g = _root.append('svg:g')
            .classed("pl", true);
            
        _innerG = _g.append('g')
            .on('mousedown', function(d){ callListeners('mousedown', _chart); })
            .on('mouseup', function(d){ callListeners('mouseup', _chart); })
            .on('click', function(d){ callListeners('click', _chart); })
            .call(_drag);
        
        _innerG.append('svg:rect')
            .classed("pl-box", true)
            .attr('width', _chart.width())
            .attr('height', _chart.height())
            .style('fill-opacity', 0.5)
            .style('stroke', _chart.borderColor())
            .style('stroke-width', _chart.borderWidth());
            
        _labelG = _g.append('g');
    }
    
    /**
    #### render()
    Renders the chart from scratch.
    **/
    function render(){
        reset();
        _innerG.attr('transform', "translate(" + _chart.x() + "," + _chart.y() + ")");
        _labelG.attr('transform', "translate(" + _chart.x() + "," + _chart.y() + ")");
        drawLabels();
        drawPixels();
    }
    
    /**
    #### redraw()
    Redraws the chart without recreating everything.
    **/
    function redraw(){
        _innerG.attr('transform', "translate(" + _chart.x() + "," + _chart.y() + ")");
        _labelG.attr('transform', "translate(" + _chart.x() + "," + _chart.y() + ")");
        drawLabels();
        drawPixels();
    }
    
    /**
    #### preview()
    Redraws the main body of the chart without updating the labels.
    **/
    function preview(){
        _innerG.attr('transform', "translate(" + _chart.x() + "," + _chart.y() + ")");
        _labelG.attr('transform', "translate(" + _chart.x() + "," + _chart.y() + ")");
        drawPixels();
    }
    
    /**
    #### drawLabels(){
    Draws the labels on the PixelLayer
    **/
    function drawLabels(){
        drawMetaLabels();
        drawOperatorLabels();
    }
    
    /**
    #### drawMetaLabels()
    Draws the labels at the bottom of the PixelLayer, displaying any metadata
    specified by chart.labelText().
    **/
    function drawMetaLabels(){
        var metadata = _data.metadata();
        var width = _chart.width();
        var height = _chart.height();
        var borderWidth = _chart.borderWidth();
        var labelCount = metadata.length;
        var labelColor = _chart.labelColor();
        var labelText = _chart.labelText();
        var labelScale = BandScale().domain(d3.range(labelCount))
            .rangeBands([0, width + (2 * borderWidth)], 2);
        
        // JOIN
        var labels = _innerG.selectAll('g.pl-label').data(metadata);
        
        // UPDATE
        // Update the existing labels.
        labels.each(function(d,i){
            var g = d3.select(this);
            g.select('rect')
                .attr('width', labelScale.rangeBand())
                .style('fill', labelColor(d,i));
            if(labelCount <= 1){
                g.select('text.label-text')
                    .attr('text-anchor', "start")
                    .attr('x', 4)
                    .attr('y', 15)
                    .text(labelText(d,i));
                    
                if(g.select('text.label-count').empty()){
                    g.append('text')
                        .classed('no-selection', true)
                        .classed('label-count', true)
                        .attr('text-anchor', "end")
                        .attr('x', labelScale.rangeBand() - 4)
                        .attr('y', 15)
                        .text(d.count);
                }
            }
            else{
                g.select('text.label-text')
                    .attr('text-anchor', "middle")
                    .attr('x', labelScale.rangeBand() / 2)
                    .attr('y', 15)
                    .text(labelText(d,i));
                g.select('text.label-count').remove();
            }
        });
        
        // ENTER
        // Create new labels as needed
        labels.enter().append('g')
            .classed('pl-label', true)
            .each(function(d,i){
                var g = d3.select(this);
                g.append('rect')
                    .attr('width', labelScale.rangeBand())
                    .attr('height', 20)
                    .style('fill', labelColor(d,i));
                
                // If only one layer, justify the text
                if(metadata.length <= 1){
                    g.append('text')
                        .classed('no-selection', true)
                        .classed('label-text', true)
                        .attr('text-anchor', "start")
                        .attr('x', 4)
                        .attr('y', 15)
                        .text(labelText(d,i));
                    g.append('text')
                        .classed('no-selection', true)
                        .classed('label-count', true)
                        .attr('text-anchor', "end")
                        .attr('x', labelScale.rangeBand() - 4)
                        .attr('y', 15)
                        .text(d.count);
                }
                // If multiple layers, center the text
                else{
                    g.append('text')
                        .classed('no-selection', true)
                        .classed('label-text', true)
                        .attr('text-anchor', "middle")
                        .attr('x', labelScale.rangeBand() / 2)
                        .attr('y', 15)
                        .text(labelText(d,i));
                }
            })
            .on('mousedown', function(d,i){
                _dragLabel = labelText(d,i);
            })
            .on('mouseup', function(){
                _dragLabel = null;
            });
            
        // ENTER + UPDATE
        // The update selection now includes new elements.
        labels.attr('transform', function(d,i){
            return "translate(" + (labelScale(i) - borderWidth) + "," + height + ")";
        });
        
        // EXIT
        // Remove any extras
        labels.exit().remove();
    }
    
    function drawOperatorLabels(){
        var count = _chart.layerCount();
        var countData = [count];
        var operator = _chart.operator();
        var operatorData = [operator];
        var labelColor = _chart.labelColor();
        var borderWidth = _chart.borderWidth();
        var width = _chart.width();
        if(count < 2){ 
            countData = [];
            operatorData = []; 
        }
        
        // OPERATOR LABEL
        var opLabel = _labelG.selectAll('g.pl-operator').data(operatorData);
        // ENTER
        opLabel.enter().append('g')
            .classed('pl-operator', true)
            .attr('transform', function(d,i){
                return "translate(" + (0 - borderWidth) + ", -20)";
            })
            .each(function(d,i){
                var g = d3.select(this);
                g.append('rect')
                    .attr('width', 40)
                    .attr('height', 20);
                g.append('text')
                    .classed('no-selection', true)
                    .attr('text-anchor', "middle")
                    .attr('x', 20)
                    .attr('y', 15);
            })
            .on('click', function(d,i){
                _chart.operator(_chart.operator() == "AND" ? "OR" : "AND");
                _chart.render();
            });
        // ENTER + UPDATE
        opLabel.each(function(d,i){
            var g = d3.select(this);
            g.select('rect')
                .style('fill', labelColor)
            g.select('text')
                .text(d);
        });
        // EXIT
        opLabel.exit().remove();
        
        // LAYER COUNT LABEL
        var countLabel = _labelG.selectAll('g.pl-count').data(countData);
        countLabel.enter().append('g')
            .classed('pl-count', true)
            .attr('transform', function(d,i){
                return "translate(" + (width - 19) + ", -20)";
            })
            .each(function(d,i){
                var g = d3.select(this);
                g.append('rect')
                    .attr('width', 20 + borderWidth)
                    .attr('height', 20);
                g.append('text')
                    .classed('no-selection', true)
                    .attr('text-anchor', "middle")
                    .attr('x', (20 - borderWidth) / 2)
                    .attr('y', 15);
            });
        countLabel.each(function(d,i){
            var g = d3.select(this);
            g.select('rect')
                .style('fill', labelColor)
            g.select('text')
                .text(d);
        });
        // EXIT
        countLabel.exit().remove();
        
        // X LABEL
        var xLabel = _labelG.selectAll('g.pl-x').data(countData);
        xLabel.enter().append('g')
            .classed('pl-x', true)
            .attr('transform', function(d,i){
                return "translate(" + width + ", 0)";
            })
            .each(function(d,i){
                var g = d3.select(this);
                g.append('rect')
                    .attr('width', 20 + borderWidth)
                    .attr('height', 20);
                g.append('text')
                    .classed('no-selection', true)
                    .attr('text-anchor', "middle")
                    .attr('x', (20 - borderWidth) / 2)
                    .attr('y', 15);
            });
        xLabel.each(function(d,i){
            var g = d3.select(this);
            g.select('rect')
                .style('fill', labelColor)
            g.select('text')
                .text('X');
        });
        // EXIT
        xLabel.exit().remove();
    }
    
    function drawPixels(){
        var elements = _chart.elements();
        var width = _chart.width();
        var height = _chart.height();
        var rows = _chart.rows();
        var columns = _chart.columns();
        var pixelGap = _chart.pixelGap();
        var pixelColor = _chart.pixelColor();
        var pixelY = BandScale().domain(d3.range(rows))
            .rangeBands([0, height], pixelGap, 4);
        var pixelX = BandScale().domain(d3.range(columns))
            .rangeBands([0, width], pixelGap, 4);
            
        // JOIN
        var pixels = _innerG.selectAll('rect.pl-pixel').data(elements);
        
        // ENTER
        // Create any new pixels
        pixels.enter().append('rect')
            .classed('pl-pixel', true)
            .on('mouseover', function(d, i){
                if(_dragging){ return; }
                callListeners('pixelMouseover', this, d, i);
            })
            .on('mouseout', function(d, i){
                if(_dragging){ return; }
                callListeners('pixelMouseout', this, d, i);
            })
            .on('click', function(d, i){
                if(_dragging){ return; }
                callListeners('pixelClick', this, d, i);
            });
        
        // ENTER + UPDATE
        // The selection now includes both new and updated elements
        pixels
            .attr('width', pixelX.rangeBand())
            .attr('height', pixelY.rangeBand())
            .attr('transform', function(d,i){
                var row = parseInt(i / rows);
                var col = i - row * rows;
                return "translate(" + pixelX(col) + "," + pixelY(row) + ")";
            })
            .each(function(d,i){
                var pixel = d3.select(this);
                var value = _chart.pixelValue(d.name);
                var color = pixelColor(d,i);
                var fill = d3.interpolateRgb(d3.rgb(0,0,0), color)(value);
            
                pixel.classed('empty', function(){ return value == 0; });
                pixel.style('fill-opacity', function(){ return value ? 1 : 0 });
                pixel.style('fill', fill);
            });
        
        // EXIT
        pixels.exit().remove();
    }
    
    /**
    #### callListeners(event, this, [arg], ...)
    Calls the listeners of an event. Follows the same format as function.call().
    **/
    function callListeners(evt, thisObj){
        var args = Array.prototype.slice.call(arguments, 2);
        for(var i = 0; i < _listeners[evt].length; i++){
            _listeners[evt][i].apply(thisObj, args);
        }
    }
    
    /**
    #### applyListeners(event, this, [args])
    Calls the listeners of an event, except it takes an array of arguments
    instead of positional arguments, like function.apply()
    **/
    function applyListeners(name, thisObj, args){
        for(var i = 0; i < _listeners[evt].length; i++){
            _listeners[evt][i].apply(thisObj, args);
        }
    }
    
/*********************** PUBLIC METHODS ***************************************/
    /**
    #### .render()
    Renders the chart from scratch, replacing any existing rendering.
    **/
    _chart.render = function(){
        callListeners('preRender', _chart);
        render();
        callListeners('postRender', _chart);
        return _chart;
    };
    
    /**
    #### .redraw()
    Updates the chart without recreating everything from scratch.
    **/
    _chart.redraw = function(){
        redraw();
        return _chart;
    };
    
    /**
    #### .preview(OperatorNode)
    Previews a set of data.
    **/
    _chart.preview = function(d){
        if(!arguments.length){ return _preview != null; }
        _preview = _data;
        _data = d;
        preview();
        return _chart;
    };
    
    /**
    #### .clearPreview()
    Clears the preview.
    **/
    _chart.clearPreview = function(o){
        if(_preview){
            _data = _preview;
            _preview = null;
            preview();
        }
        return _chart;
    };
    
    /**
    #### .remove()
    Removes the chart from the parent SVG.
    **/
    _chart.remove = function(){
        if(_g){ _g.remove(); }
    };
    
    /**
    #### .moveToFront()
    Moves the chart to the front of the parent SVG
    **/
    _chart.moveToFront = function(){
        if(_g){ _g.moveToFront(); }
    };
    
    /**
    #### .moveToBack()
    Moves the chart to the back of the parent SVG
    **/
    _chart.moveToBack = function(){
        if(_g){ _g.moveToBack(); }
    };
    
    
    /**
    #### .fadeOut([duration])
    Fades this chart. Default duration is 500 msec.
    **/
    _chart.fadeOut = function(d){
        var dur = d || 500;
        if(_g){
            _g.transition()
                .duration(dur)
                .style('opacity', 0.5);
        }
    };
    
    /**
    #### .fadeIn([duration])
    Fades in this chart. Default duratin is 500 msec.
    **/
    _chart.fadeIn = function(d){
        var dur = d || 500;
        if(_g){
            _g.transition()
                .duration(dur)
                .style('opacity', 1);
        }
    };
    
    /**
    #### .select([value])
    Executes a d3.select statement scoped to this chart
    **/
    _chart.select = function(v){
        return _g ? _g.select(v) : null;
    };
    
    /**
    #### .selectAll([value])
    Executes a d3.selectAll statment scoped to this chart
    **/
    _chart.selectAll = function(v){
        return _g ? _g.selectAll(v) : null;
    };

    /**
    #### .elements([array])
    Gets or sets the elements (e.g. compounds) to draw in this PixelLayer chart.
    They will be drawn in left-to-right, top-to-bottom order.
    **/
    _chart.elements = function(c){
        if(!arguments.length){ return _elements; }
        _elements = c;
        return _chart;
    };
    
    /**
    #### .data(data, [metadata])
    Sets the data for this PixelLayer. Any metadata, like name, should be
    passed in as an object.
    **/
    _chart.data = function(d,m){
        if(!arguments.length){ return _data; }
        _data.clear();
        _data.addChild(DataNode(d,m));
        return _chart;
    };
    
    /**
    #### .operator([string])
    Gets or sets the operator used for layering. Default is "AND"
    **/
    _chart.operator = function(o){
        if(!arguments.length){ return _data.operator(); }
        _data.operator(o);
        return _chart;
    };
    
    /**
    #### .layerCount()
    Returns the number of layers in this PixelLayer chart.
    **/
    _chart.layerCount = function(){
        return _data.metadata().length;
    }
    
    /**
    #### .pixelValue(element)
    Returns the pixel value for a given element in this PixelLayer. It is a
    value between [0,1].
    **/
    _chart.pixelValue = function(e){
        return _data.pixelValue(e);
    };

    /**
    #### .x([value])
    Gets or sets the x position of the top-left corner of the chart.
    **/
    _chart.x = function(x){
        if(!arguments.length){ return _x; }
        _x = x;
        return _chart;
    };
    
    /**
    #### .y([value])
    Gets or sets the y position of the top-left corner of the chart.
    **/
    _chart.y = function(y){
        if(!arguments.length){ return _y; }
        _y = y;
        return _chart;
    };
    
    /**
    #### .width([value])
    Gets or sets the width of the chart, not including labels. Default is 184px.
    **/
    _chart.width = function(w){
        if(!arguments.length){ return _width; }
        _width = w;
        return _chart;
    };
    
    /**
    #### .height([value])
    Gets or sets the height of the chart, not including labels. Default is 184px.
    **/
    _chart.height = function(h){
        if(!arguments.length){ return _height; }
        _height = h;
        return _chart;
    };
    
    /**
    #### .boundingRect()
    Returns the bounding rectangle for this PixelLayer chart.
    **/
    _chart.boundingRect = function(){
        var x = _chart.x();
        var y = _chart.y();
        var width = _chart.width();
        var height = _chart.height();
        return {
            'top': y,
            'left': x,
            'bottom': y + height,
            'right': x + width,
            'height': height,
            'width': width,
        }
    };

    /**
    #### .rows([value])
    Gets or sets the number of rows in the chart. Default is 15.
    **/
    _chart.rows = function(n){
        if(!arguments.length){ return _rows; }
        _rows = n;
        return _chart;
    };
    
    /**
    #### .columns([value])
    Gets or sets the number of columns in the chart. Default is 15.
    **/
    _chart.columns = function(n){
        if(!arguments.length){ return _columns; }
        _columns = n;
        return _chart;
    };
    
    /**
    #### .pixelGap([value])
    Gets or sets the width of the gap between pixels in the pixel layer. Default
    is 2px.
    **/
    _chart.pixelGap = function(v){
        if(!arguments.length){ return _pixelGap; }
        _pixelGap = v;
        return _chart;
    };
    
    /**
    #### .pixelColor([function])
    Gets or sets function used to color pixels in the PixelLayer. The function
    will be passed the data and index of the pixel, i.e., compound, being
    colored and should return a color - either a d3.color object, like d3.rgb(),
    or a hex string.
    **/
    _chart.pixelColor = function(f){
        if(!arguments.length){ return _pixelColor; }
        _pixelColor = f;
        return _chart;
    };
    
    /**
    #### .labelColor([function])
    Gets or sets the function used to color the labels of the PixelLayer. The
    function will be passed the label metadata and index and should return a
    color - either a d3.color object, like d3.rgb(), or a hex string.
    **/
    _chart.labelColor = function(f){
        if(!arguments.length){ return _labelColor; }
        _labelColor = f;
        return _chart;
    };
    
    /**
    #### .labelText([function])
    Gets or sets the function used to get the value for a label in the 
    PixelLayer. The function will be passed the label metadata and index and
    should return the text to use. The default function returns the 'name'
    property of the metadata object.
    **/
    _chart.labelText = function(f){
        if(!arguments.length){ return _labelText; }
        _labelText = f;
        return _chart;
    };
    
    /**
    #### .borderColor([color])
    Gets or sets the border color. It can be a d3.color object (like d3.rgb())
    or a hex string
    **/
    _chart.borderColor = function(c){
        if(!arguments.length){ return _borderColor; }
        _borderColor = c;
        return _chart;
    };
    
    /**
    #### .borderWidth([value])
    Gets or sets the border thickness.
    **/
    _chart.borderWidth = function(v){
        if(!arguments.length){ return _borderWidth; }
        _borderWidth = v;
        return _chart;
    };
    
    /**
    #### .on(event,function)
    Attaches an event listener for events from this PixelLayer chart.
    **/
    _chart.on = function(e,_){
        _listeners[e].push(_);
        return _chart;
    };

    return _chart;
}
