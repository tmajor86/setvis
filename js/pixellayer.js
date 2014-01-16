/**
pixellayer.js
Dependencies:
- d3.js
**/
/*
    TODO Border calculation: inside or outside "boundaries"?
    TODO Complex boolean expressions
*/

/**
## PixelLayerData(data, [name])
Creates a new PixelLayerData object, which represents a boolean expression tree
of data to be rendered by the PixelLayer chart.
Parameters:
    data - An array of data points to be displayed in the PixelLayer grid
    name - The name for the data set. Optional.
**/
function PixelLayerData(data, name){
    var _obj = {};
    var _root = {
        'name': name || "Layer 0",
        'data': data,
        'operator': null,
        'children': [],
    };
    
    /**
    #### .layer(data, operator)
    Adds a layer to the pixel layer data, using the given boolean operator
    Parameters:
        data     - Another PixelLayerData object
        operator - The boolean operator to apply: "AND" or "OR"
    **/
    _obj.layer = function(d, o){
        d.operator = o;
        _root.children.push(d);
    };
    
    /**
    #### .flatten()
    Returns the flattened data, calculating the boolean expression for each
    pixel in the PixelLayer.
    **/
    _obj.flatten = function(){
        
    };
    
    return _obj;
}


function PixelLayer(svg){
    var _svg = svg;
    var _root = d3.select(_svg);
    var _g = null;
    var _chart = {};
    var _layers = [{'name': "Layer 0", 'data':[]}];
    var _x = 0;
    var _y = 0;
    var _width = 184;
    var _height = 184;
    var _columns = 15;
    var _rows = 15;
    var _pixelGap = 3;
    var _operator = 'AND';
    var _operators = {
        'AND': function(data){
            for(var i = 0; i < data.length; i++){
                if(!data[i]){ return 0; }
            }
            return 1;
        },
        'OR': function(data){
            var failCount = 0.0;
            for(var i = 0; i < data.length; i++){
                if(!data[i]){ failCount += 1.0; }
            }
            return failCount / data.length;
        },
    }
    
    var _listeners = {
        'preRender': [],
        'postRender': [],
        'preRedraw': [],
        'postRedraw': [],
    };
    
    function reset(){
        if(_g){ _g.remove(); }
        
        _g = _root.append('svg:g')
        .classed("pl", true)
        
        _g.append('svg:rect')
        .classed("pl-box", true);
    }
    
    function render(){
        reset();
        // Draw the chart
        drawChart();
    }
    
    function redraw(){
        drawChart();
    }
    
    function drawChart(){
        var data = getPixelData();
        var labels = getLabels();
        var width = _chart.width();
        var height = _chart.height();
        var columns = _chart.columns();
        var rows = _chart.rows();
        var colGapCount = columns + 2;
        var rowGapCount = rows + 2;
        var pixelWidth = (width - (_chart.pixelGap() * colGapCount)) / columns;
        var pixelHeight = (height - (_chart.pixelGap() * rowGapCount)) / rows;
        var pixelGap = _chart.pixelGap();
        var operation = _operators[_chart.operator()];
        
        // Position the chart
        _g.attr('transform', "translate(" + _chart.x() + "," + _chart.y() + ")");
        
        // Draw the border
        _g.select('rect.pl-box')
        .attr('width', width)
        .attr('height', height);
        
        // Draw the labels
        var labels = _g.selectAll('g.pl-label').data(labels);
        
        // Draw the data
        var pixels = _g.selectAll('rect.pl-pixel').data(data);
        
        // PIXELS ENTER
        pixels.enter().append('rect')
        .classed('pl-pixel', true)
        .attr('width', pixelWidth)
        .attr('height', pixelHeight)
        .attr('transform', function(d, i){
            var col = parseInt(i / rows);
            var row = i - col * rows;
            return "translate(" + (col * (pixelWidth + pixelGap) + pixelGap + 1) + "," + (row * (pixelHeight + pixelGap) + pixelGap + 1) + ")";
        })
        .style('opacity', function(d){
            return operation(d);
        })
    }
    
    function getPixelData(){
        var data = _chart.data().map(function(d){ return d.data; })
        var pixels = [];
        for(var i = 0; i < _chart.rows() * _chart.columns(); i++){
            pixels.push(data.map(function(d){ return d[i]; }));
        }
        return pixels;
    }
    
    function getLabels(){
        return _layers.map(function(d){ return d.name; });
    }
    
    
    function callListener(name){
        for(var i = 0; i < _listeners[name].length; i++){
            _listeners[name][i].call(_chart, arguments.slice(1));
        }
    }
    
    function applyListener(name, args){
        for(var i = 0; i < _listeners[name].length; i++){
            _listeners[name][i].apply(_chart, args);
        }
    }
    
    function drag(){
        
    }
    
    /**
    #### .render()
    Renders the chart from scratch, replacing any existing rendering
    **/
    _chart.render = function(){
        callListener('preRender');
        render();
        callListener('postRender');
        return _chart;
    }
    
    /**
    #### .redraw()
    Redraws the chart, updating the elements in place
    **/
    _chart.redraw = function(){
        callListener('preRedraw');
        redraw();
        callListener('postRedraw');
        return _chart;
    }
    
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
    #### .data([value])
    Gets or sets the data associated with this PixelLayer.
    **/
    _chart.data = function(d){
        if(!arguments.length){ return _layers[0].data; }
        _layers[0].data = d;
        return _chart;
    };
    
    /**
    #### .operator([string])
    Gets or sets the operator used for layering. Default is "AND"
    **/
    _chart.operator = function(d){
        if(!arguments.length){ return _operator; }
        _operator = operator;
        return _chart;
    }
    
    /**
    #### .name([name])
    Gets or sets the name of this PixelLayer. If other PixelLayers have been
    layered with this one, it is the name of the original (bottom) layer.
    **/
    _chart.name = function(n){
        if(!arguments.length){ return _layers[0].name; }
        _layers[0].name = n;
        return _chart;
    };
    
    /**
    #### .layer(pixelLayer, [name])
    Layers another PixelLayer graph onto this one, merging the sets of data. The
    name parameter can be given to rename the layer.
    **/
    _chart.layer = function(p, n){
        if(n != null && n != undefined){ p.name(n); }
        _layers.push(p);
    };
    
    /**
    #### .removeLayer(index)
    Removes a layer from this PixelLayer. The removed data is returned.
    **/
    _chart.removeLayer = function(i){
        if(i == 0){ throw "Cannot remove base layer"; }
        if(i < 0 || i > _layers.length){ throw "No such layer"; }
        var data = _layers[i];
        _layers.splice(i, 1);
        return data;
    };
    
    /**
    #### .x([value])
    Gets or sets the x position of the top-left corner of the chart
    **/
    _chart.x = function(x){
        if(!arguments.length){ return _x; }
        _x = x;
        return _chart;
    };
    
    /**
    #### .y([value])
    Gets or sets the y position of the top-left corner of the chart
    **/
    _chart.y = function(y){
        if(!arguments.length){ return _y; }
        _y = y;
        return _chart;
    };
    
    /**
    #### .width([value])
    Gets or sets the width of the chart, not including labels. Default is 184px
    **/
    _chart.width = function(w){
        if(!arguments.length){ return _width; }
        _width = w;
        return _chart;
    };
    
    /**
    #### .height([value])
    Gets or sets the height of the chart, not including labels. Default is 184px
    **/
    _chart.height = function(h){
        if(!arguments.length){ return _height; }
        _height = height;
        return _chart;
    };

    /**
    #### .rows([value])
    Gets or sets the number of rows in the chart. Default is 15
    **/
    _chart.rows = function(n){
        if(!arguments.length){ return _rows; }
        _rows = n;
        return _chart;
    };
    
    /**
    #### .columns([value])
    Gets or sets the number of columns in the chart. Default is 15
    **/
    _chart.columns = function(n){
        if(!arguments.length){ return _columns; }
        _columns = n;
        return _chart;
    };
    
    /**
    #### .pixelGap([value])
    Gets or sets the width of the gap between pixels in the pixel layer. Default is 2px
    **/
    _chart.pixelGap = function(v){
        if(!arguments.length){ return _pixelGap; }
        _pixelGap = v;
        return _chart;
    };
        
    return _chart;
}


function runTests(){
    
}
