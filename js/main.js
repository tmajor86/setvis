/*******************************************************************************
main.js
*******************************************************************************/
// TODO Increment pixel layer placement on creation
// TODO Change drop composition behavior
// TODO Refine mask for bands (currently just a rectangle over the pixel area)?

$(document).ready(function(){
    // Global functions used to customize PixelLayer display and behavior
    var valueAccessor = function(d){ return d.value; };
    var groupAccessor = function(d){ return d.class; };
    var pixelColor    = function(){
        // 'this' is the PixelLayer
        var count = this.expression().count();
        if(this.__old__){ return d3.rgb(239,72,95); }
        else if(count == 1){ return d3.rgb(17, 110, 220); }
        else if(this.operator() === "OR"){ return d3.rgb(255,255,0); }
        else{ return d3.rgb(156,247,71); }
    };
    var labelColor    = function(){
        // 'this' is the PixelLayer
        if(isComposite(this)){ return d3.rgb(156,247,71); }
        else{ return d3.rgb(17, 110, 220); }
    };
    var bandColor     = function(d){
        var baseColor = d3.rgb(255,255,255);
        if(d.a.faded() || d.b.faded()){
            return d3.interpolateRgb(d3.rgb(0,0,0), baseColor)(0.3);
        }
        return baseColor;
    }
    var bandScale     = d3.scale.linear()
        .domain([60,225])
        .range([2,30]);
    
    
    /**
    #### isComposite(PixelLayer)
    Returns true if this PixelLayer contains more than one data set
    **/
    function isComposite(p){
        return p.expression().count() > 1;
    }
    
    
    /**
    ## ListController(elementBtn, elementList, caseBtn, caseList, dataSource)
    The controller for the lists on the page. Populates the lists from the data
    source.
    **/
    var ListController = function(eb, el, cb, cl, ds){
        var _elementBtn  = d3.select(eb);
        var _elementList = d3.select(el);
        var _caseBtn     = d3.select(cb);
        var _caseList    = d3.select(cl);
        var _caseListObj = null;
        var _dataSource  = ds;
        var _obj         = {};
        
        var _listeners = {
            'mouseenter.element': [],
            'mouseenter.case': [],
            'mouseleave.element': [],
            'mouseleave.case': [],
            'click.element': [],
            'click.case': [],
            'add.case': [],
            'populated.elements': [],
            'populated.cases': [],
        };

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
        #### applyListeners(event, this, [arg, ...])
        Calls the listeners of an event, except it takes an array of arguments
        instead of positional arguments, like function.apply()
        **/
        function applyListeners(evt, thisObj, args){
            for(var i = 0; i < _listeners[evt].length; i++){
                _listeners[evt][i].apply(thisObj, args);
            }
        }
        
        /**
        #### populateElements(elements)
        Populates the list of elements.
        **/
        function populateElements(elements){
            var options = {
                valueNames: ['name'],
                page: elements.length,
            };
            var items = _elementList.select('.list').selectAll('li')
                .data(elements);
                
            var newItems = items.enter()
              .append('li')
                .on('mouseenter.el', function(d){ callListeners('mouseenter.element', this, d); })
                .on('mouseleave.el', function(d){ callListeners('mouseleave.element', this, d); })
                .on('click.el', function(d){ callListeners('click.element', this, d); })
                
            newItems
              .append('span')
                .classed('name', true)
                .html(function(d){ return d.value; });
                
            elementList = new List('elements', options);
            elementList.sort('name');
            callListeners('populated.elements', _obj, elementList);
        };
        
        /**
        #### populateCases
        Populates the list of cases.
        **/
        function populateCases(cases){
            // Create a searchable, sortable list using list.js and d3
            var options = {
                valueNames: ['name', 'count', 'class'],
            };
            var scale = d3.scale.linear()
                .domain([0, d3.max(cases, function(d){ return d.set().count(); })])
                .range([0, 100]);
                
            // Populate the list of samples
            var items = _caseList.select('.list').selectAll('li')
                .data(cases);
            var newItems = items.enter()
              .append('li');
            
            newItems.append('span')
                .classed('name', true)
                .html(function(d){ return d.label(); });
            newItems.append('span')
                .classed('count', true)
                .classed('hidden', true)
                .html(function(d){ return d.set().count(); });
            newItems.append('div')
                .classed('bar', true)
                .style('width', function(d){ return scale(d.set().count()) + "%"; });
            newItems.append('button')
                .attr('title', "Add")
                .html("+")
                .on('click', function(d){ callListeners('add.case', _obj, d); });
           
            
            // It appears that list.js is storing some things when a List
            // object is created, preventing things from working correctly if
            // you attempt to just re-create a List object where there was an
            // old one. Therefore, we must only create the List object once,
            // but we are free to completely replace the HTML with the original
            // values when the 'Def.' button is clicked
            if(!_caseListObj){
                _caseListObj = new List('samples', options);
                _caseList.select('.clear-sort')
                    .on('click', function(d){
                        d3.selectAll('#samples .sort')
                            .classed('asc', false)
                            .classed('desc', false);
                        d3.selectAll('#samples .list li').remove();
                        populateCases(cases);
                    });
            }
        }
        
        /**
        #### .init()
        Initializes the controller and lists
        **/
        _obj.init = function(){
            var elements = _dataSource.elements().elements();
            populateElements(elements);
            populateCases(_dataSource.cases());
            
            // Hook up the list buttons
            _caseBtn.on('click', function(){
                _elementList.classed('hidden', true);
                _caseList.classed('hidden', function(){
                    return !d3.select(this).classed('hidden');
                });
            });
            _elementBtn.on('click', function(){
                _caseList.classed('hidden', true);
                _elementList.classed('hidden', function(){
                    return !d3.select(this).classed('hidden');
                });
            });
            return _obj;
        };
        
        /**
        #### .on(event,function)
        Attaches an event listener for events from this controller.
        **/
        _obj.on = function(e,f){
            _listeners[e].push(f);
            return _obj;
        };
        
        return _obj;
    };
    
    
    /**
    ## Controller()
    The main controller for the page.
    **/
    var Controller = function(canvas, trash, dataSource){
        var _canvas = canvas;
        var _trash = trash;
        var _data = dataSource;
        var _obj = {};
        
        var _pixelLayers = [];
        var _similarityBands = [];
        var _masks = [];
        
        var _trashBounds = null;
        var _overlap = null;
        var _trashOverlap = false;
        
        /**
        #### .onMousedown()
        Handles the mousedown event from a PixelLayer.
        **/
        _obj.onMousedown = function(){

        };
        
        /**
        #### .onMouseup()
        Handles the mouseup event from a PixelLayer.
        **/
        _obj.onMouseup = function(){
            
        };
        
        /**
        #### .onElementMouseenter(element)
        Handles the mouseenter event for an element/pixel.
        **/
        _obj.onElementMouseenter = function(element){
            var value = valueAccessor(element);
            var empty = d3.select(this).classed('empty');
            
            d3.select('#element-label').html(value);
            if(!empty){
                // Highlight any other instances of that element
                d3.selectAll('rect.pixel').classed('hover', function(d){
                    return valueAccessor(d) === value;
                });
                
                // Fade any pixel layers that do not contain the element
                _pixelLayers.forEach(function(p){
                    if(!p.faded() && !p.expression().value(element)){ p.fadeOut(0.4); }
                });
                
                // Update the band colorings, fading out if the band is
                // connected to a faded PixelLayer.
                d3.selectAll('path.band')
                    .each(function(d){
                        // Bring the non-faded bands to the front
                        if(!d.a.faded() && !d.b.faded()){ d3.select(this).moveToFront(); }
                    })
                  .transition()
                    .duration(500)
                    .style('stroke', function(d){ return bandColor(d); });
            }
        };
        
        /**
        #### .onElementMouseleave(element)
        Handles the mouseleave event for an element/pixel.
        **/
        _obj.onElementMouseleave = function(element){
            d3.select('#element-label').html("");
            d3.selectAll('rect.pixel').classed('hover', false);
            
            _pixelLayers.forEach(function(p){
                if(p.faded()){ p.fadeIn(); }
            });
            
            // Update the band colorings, fading in if applicable
            d3.selectAll('path.band')
              .transition()
                .duration(500)
                .style('stroke', function(d){ return bandColor(d); });
        };
        
        /**
        #### .onGroupMouseenter(element)
        Handles the mouseenter event for a group of elements/pixels.
        **/
        _obj.onGroupMouseenter = function(group){
            d3.select('#class-label').html(group);
        };
        
        /**
        #### .onGroupMouseleave(element)
        Handles the mouseleave event for a group of elements/pixels.
        **/
        _obj.onGroupMouseleave = function(group){
            d3.select('#class-label').html("");
        };
        
        /**
        #### .onDragstart()
        Called when the dragging operation on a PixelLayer object starts.
        **/
        _obj.onDragstart = function(){
            // Bring the dragged PixelLayer object to the front of the layers
            // externally and internally
            moveToFront(this);
            // Display the trash icon
            d3.select('#trash').classed("hidden", false);
        };
        
        /**
        #### .onDrag()
        Called whenever a PixelLayer is dragged about the canvas.
        **/
        _obj.onDrag = function(){
            checkLayerOverlap(this);
            checkTrashOverlap(this);
            drawBands();
            setMasks();
        };
        
        /**
        #### checkLayerOverlap(PixelLayer)
        Performs checks to determine if a PixelLayer has been dragged on top
        of another one. The onLayerOverlapEnter and onLayerOverlapLeave
        functions are called when the state changes.
        **/
        function checkLayerOverlap(pl){
            var mouse = d3.mouse(d3.select(_canvas).node());
            var mouseX = mouse[0];
            var mouseY = mouse[1];
            var bounds = {
                'top': mouse[1],
                'left': mouse[0],
                'bottom': mouse[1],
                'right': mouse[0],
            };
            var uuid = pl.uuid();
            var overlap = null;
            // Find the first layer that is overlapped
            for(var i = 0; i < _pixelLayers.length; i++){
                var p = _pixelLayers[i];
                if(p.uuid() === uuid){ continue; }
                if(rectOverlap(bounds, p.boundingRect())){ 
                    overlap = p; 
                    break;
                }
            }
            if(_overlap == null && overlap != null){
                _overlap = p;
                _obj.onLayerOverlapEnter(pl, _overlap);
            }
            else if(_overlap != null && overlap == null){
                _obj.onLayerOverlapLeave(pl, _overlap);
                _overlap = null;
            }
            else if(_overlap != null && overlap != null){
                // We passed from one overlapping item to another without
                // breaking
                if(p.uuid() != _overlap.uuid()){
                    _obj.onLayerOverlapLeave(pl, _overlap);
                    _overlap = p;
                    _obj.onLayerOverlapEnter(pl, _overlap);
                }
            }
        }
        
        /**
        #### checkTrashOverlap(PixelLayer)
        Checks for overlap between the given PixelLayer and the trash icon.
        The onTrashOverlapEnter and onTrashOverlapLeave functions are called
        when the state changes.
        **/
        function checkTrashOverlap(pl){
            var overlap = rectOverlap(pl.boundingRect(), _trashBounds);
            if(!_trashOverlap && overlap){
                _trashOverlap = true;
                _obj.onTrashOverlapEnter(pl);
            }
            else if(_trashOverlap && !overlap){
                _trashOverlap = false;
                _obj.onTrashOverlapLeave(pl);
            }
        }
        
        /**
        #### getTrashBounds()
        Returns the bounding rectangle for the trash icon. Requires jQuery
        **/
        function getTrashBounds(){
            // By far, the easiest way to do this is with jQuery. They handle a
            // lot of cross-browser and calculation junk for you.
            var trash = $('#trash');
            var x = trash.offset().left;
            var y = trash.position().top;
            var width = trash.outerWidth();
            var height = trash.outerHeight();
            return {
                top: y,
                left: x,
                bottom: y + height,
                right: x + width,
                width: width,
                height: height,
            };
        }
        
        /**
        #### .onDragend()
        Called when the dragging of a PixelLayer ends. Calls the onLayerDrop
        function if the PixelLayer is dropped onto another one.
        **/
        _obj.onDragend = function(){
            if(_trashOverlap){ 
                _obj.onTrashDrop(this);
                _trashOverlap = false;
            }
            else if(_overlap != null){ 
                _obj.onLayerDrop(this, _overlap); 
                _overlap = null;
            }
            
            // Hide the trash icon
            d3.select('#trash').classed("hidden", true);
        };
        
        /**
        #### .onLayerOverlapEnter(dragged,overlapped)
        Called when a PixelLayer beings overlapping another.
        **/
        _obj.onLayerOverlapEnter = function(a,b){
            // Preview the merge that would occur if the layer is dropped onto
            // the other.
            a.__old__ = a.expression();
            b.__old__ = b.expression();
            
            var previewExpr = b.__old__.preview(a.__old__);
            // Force the preview to display an "AND"
            previewExpr.root().operator('AND'); 
            a.expression(previewExpr).preview();
            b.expression(previewExpr).preview();
        };
        
        /**
        #### .onLayerOverlapLeave(dragged,overlapped)
        Called when a PixelLayer is no longer overlapping another.
        **/
        _obj.onLayerOverlapLeave = function(a,b){
            // Restore the layers to their "non-preview" state
            a.expression(a.__old__);
            b.expression(b.__old__);
            delete a.__old__;
            delete b.__old__;
            a.redraw();
            b.redraw();
        };
        
        /**
        #### .onLayerDrop(dragged,target)
        Called when a PixelLayer is dragged and dropped upon another.
        **/
        _obj.onLayerDrop = function(a,b){
            // Restore the non-preview layers
            _obj.onLayerOverlapLeave(a,b);
            
            // Merge the layers to create a "composite" layer
            b.expression().merge(a.expression());
            b.redraw();
            removeLayer(a);
            
            // Update the similarity bands
            updateBands();
        };
        
        /**
        #### .onTrashOverlapEnter(PixelLayer)
        Called when a PixelLayer is dragged over the trash icon.
        **/
        _obj.onTrashOverlapEnter = function(p){
            d3.select('#trash').classed('hover', true);
        };
        
        /**
        #### .onTrashOverlapLeave(PixelLayer)
        Called when a PixelLayer no longer overlaps the trash icon.
        **/
        _obj.onTrashOverlapLeave = function(p){
            d3.select('#trash').classed('hover', false);
        };
        
        /**
        #### .onTrashDrop(PixelLayer)
        Called when a PixelLayer is dragged and dropped onto the trash icon.
        **/
        _obj.onTrashDrop = function(p){
            // Call some of the event handlers to reset the state of things
            _obj.onTrashOverlapLeave(p);
            if(_overlap != null){ _obj.onLayerOverlapLeave(p,_overlap); }
            _obj.onElementMouseleave();
            _obj.onGroupMouseleave();
            _overlap = null;
            
            removeLayer(p);
            updateBands();
        };
        
        /**
        #### removeLayer(PixelLayer)
        Removes a PixelLayer from the canvas.
        **/
        function removeLayer(p){
            var uuid = p.uuid();
            for(var i = 0; i < _pixelLayers.length; i++){
                if(_pixelLayers[i].uuid() === uuid){
                    _pixelLayers.splice(i,1);
                    break;
                }
            }
            p.remove();
        }
        
        /**
        #### moveToFront(PixelLayer)
        Moves a PixelLayer to the front of the canvas
        **/
        function moveToFront(p){
            p.moveToFront();
            var uuid = p.uuid();
            for(var i = 0; i < _pixelLayers.length; i++){
                if(_pixelLayers[i].uuid() === uuid){
                    _pixelLayers.splice(i,1);
                    _pixelLayers.unshift(p);
                    break;
                }
            }
        }
        
        /**
        #### .onLabelDrag(label)
        Called when a label belonging to a PixelLayer is dragged.
        **/
        _obj.onLabelDrag = function(l){
            // We only split when a label with depth 0 is dragged
            if(!isComposite(this) || l.depth > 0){ return; }
            
            // Split the composite layer
            var node = l.node;
            var newExpr;
            if(isOperatorNode(node)){
                newExpr = SetExpression(node);
            }
            else{
                var newOp = OperatorNode('AND');
                newOp.addChild(node);
                newExpr = SetExpression(newOp);
            }
            
            l.parent.removeChild(node);
            var oldExpr = this.expression();
            
            // Create a new PixelLayer in the position of this one.
            createPixelLayer(oldExpr)
                .x(this.x())
                .y(this.y())
                .render();
            // Change the expression of this PixelLayer to be the expression
            // split off from the old. This keeps the dragging intact.
            moveToFront(this);
            this.expression(newExpr).redraw();
            
            // Update the similarity bands
            updateBands();
        };
        
        /**
        #### .onOperatorChange(PixelLayer)
        Called when the operator of a pixel layer changes
        **/
        _obj.onOperatorChange = function(d){
            updateBands();
        };
        
        /**
        #### clipPoint(point, point, rect)
        Uses a simplified Lian-Barsky algorithm to determine the clip point of a
        line (specified by two points) within a rectangle.
        **/
        function clipPoint(p1, p2, rect){
            var p = [p1.x - p2.x, p2.x - p1.x, p1.y - p2.y, p2.y - p1.y];
            var q = [p1.x - rect.left, rect.right - p1.x, p1.y - rect.top, rect.bottom - p1.y];
            
            var u1 = 0;
            var u2 = 1;
            d3.range(4).forEach(function(k){
                // Completely outside the rectangle
                if(p[k] == 0){
                    if(q[k] < 0){ return null; }
                }
                else{
                    var u = q[k] / p[k];
                    // Outside -> inside
                    if(p[k] < 0 && u1 < u){ u1 = u; }
                    // Inside -> outside
                    else if(p[k] > 0 && u2 > u){ u2 = u; }
                }
            });
            
            // Completely outside the rectangle
            if (u1 > u2){ return null; }
            
            // Return the clipping point of the line where it passes from inside
            // of the rectangle to the outside
            return {
                x: p1.x + (p[1] * u2), 
                y: p1.y + (p[3] * u2),
            };
        }
        
        /** updateBands()
        Helper function that updates the similarity bands on the page
        **/
        function updateBands(){
            _similarityBands = createBands();
            drawBands();
            setMasks();
        }
        
        /**
        #### .drawBands()
        Draws the similarity bands on the chart
        **/
        function drawBands(){
            var path = d3.svg.diagonal()
            .source(function(d){
                return {
                    x: d.a.x() + (d.a.width() / 2),
                    y: d.a.y() + (d.a.height() / 2),
                };
            })
            .target(function(d){
                return {
                    x: d.b.x() + (d.b.width() / 2),
                    y: d.b.y() + (d.b.height() / 2),
                };
            });
            
            var bandG = d3.select(_canvas).select('g.bands');
            var bands = bandG.selectAll('path.band')
                .data(_similarityBands);
                
            // ENTER
            bands.enter()
              .append('path')
                .classed('band', true);
                
            // ENTER + UPDATE
            bands
                .attr('d', path)
                .style('stroke-width', function(d){ return bandScale(d.similarity); })
                .style('stroke', function(d){ return bandColor(d); })
                .style('fill', "none")
            
            // EXIT
            bands.exit().remove();
        }
        
        /**
        #### setMasks()
        Sets the masks for masking the bands to the PixelLayers
        **/
        function setMasks(){
            var maskG = d3.select(_canvas).select('g.masks');
            var masks = maskG.selectAll('rect.mask')
                .data(_pixelLayers, function(p){ return p.uuid(); });
                
            // ENTER
            masks.enter()
              .append('svg:rect')
                .attr('id', function(p){ return "mask-" + p.uuid(); })
                .classed('mask', true);
              
            // UPDATE + ENTER
            masks
                .attr('x', function(p){ return p.x(); })
                .attr('y', function(p){ return p.y(); })
                .attr('width', function(p){ return p.width(); })
                .attr('height', function(p){ return p.height(); })
                .attr('fill', "black");
            
            masks.exit().remove();
        }
        
        /**
        #### createBands()
        Calculates the similarity metric for all PixelLayers on the canvas and
        creates the corresponding data structures for drawing them.
        **/
        function createBands(){
            // Create all pairs of pixelLayers
            var combos = combinations(_pixelLayers, 2);
            var bands = [];
            var elements = _data.elements();
            combos.forEach(function(p){
                bands.push({
                    a: p[0],
                    b: p[1],
                    similarity: p[0].expression().similarity(p[1].expression(), elements),
                });
            });
            return bands;
        }
        
        /**
        #### createPixelLayer(expression)
        Creates a new pixellayer object from the given set expression.
        **/
        function createPixelLayer(expression){
            var pl = PixelLayer(_canvas + " g.layers")
                .elements(_data.elements().elements())
                .expression(expression)
                .pixelColor(pixelColor)
                .labelColor(labelColor)
                .on('mousedown', _obj.onMousedown)
                .on('mouseup', _obj.onMouseup)
                .on('mouseenter.pixel', _obj.onElementMouseenter)
                .on('mouseleave.pixel', _obj.onElementMouseleave)
                .on('mouseenter.group', _obj.onGroupMouseenter)
                .on('mouseleave.group', _obj.onGroupMouseleave)
                .on('dragstart', _obj.onDragstart)
                .on('drag', _obj.onDrag)
                .on('dragend', _obj.onDragend)
                .on('drag.label', _obj.onLabelDrag)
                .on('change.operator', _obj.onOperatorChange);
            _pixelLayers.unshift(pl);
            return pl;
        }
        
        /**
        #### .drawPixelLayer(dataCase)
        Draws a new PixelLayer.
        **/
        _obj.drawPixelLayer = function(dataCase){
            // Construct the SetExpression
            var node = DataNode(dataCase);
            var operator = OperatorNode('AND');
            var expression = SetExpression(operator);
            operator.addChild(node);
            
            // Create and render the pixel layer
            createPixelLayer(expression).render();
            
            // Update the similarity bands
            updateBands();
        };
        
        /**
        #### .init()
        Initializes the contoller.
        **/
        _obj.init = function(){
            // In order to get the correct boundaries of the trash icon, we
            // need to briefly unhide it.
            d3.select(_trash).classed('hidden', false);
            _trashBounds = getTrashBounds();
            d3.select(_trash).classed('hidden', true);
            
            // Create the groups for the bands and the pixelLayers
            var bandG = d3.select(_canvas).append('svg:g');
            bandG.append('svg:g')
                .classed('bands', true);
            bandG.append('svg:g')
                .classed('masks', true);
            
            d3.select(_canvas).append('svg:g')
                .classed('layers', true);
            
            return _obj;
        };
        
        return _obj;
    };


    // Load the data
    var dataSource = AquaDataSource('data/aqua/order.csv', 'data/aqua/samples.csv')
    .on('success', function(elements, cases){
        // Initialize the main controller
        var controller = Controller("#canvas", "#trash", this).init();
        
        // Initialize the lists
        var listController = ListController(
            '#elements-btn',
            '#elements',
            '#samples-btn',
            '#samples',
            this
        )
        // Set up cross-controller communication
        .on('add.case', controller.drawPixelLayer)
        .on('mouseenter.element', controller.onElementMouseenter)
        .on('mouseenter.element', function(d){ controller.onGroupMouseenter(groupAccessor(d)); })
        .on('mouseleave.element', controller.onElementMouseleave)
        .on('mouseleave.element', function(d){ controller.onGroupMouseleave(groupAccessor(d)); })
        .init();
    });
    
    dataSource.load();
});
