/**
main.js
The main JavaScript functions/controller for the page

Dependencies:
    jQuery
    d3
    list.js

There is a distinction made between a "compound" and "element", as this
visualization may be used for other domains than AquaViz. Where it is an object,
function, etc., that will be used in the more generic sense, "element" is used
to denote it as such, because we are operating on elements of data sets. Where 
it is something that is directly tied to the AquaViz data and domain, "compound"
is used.
**/
$(document).ready(function(){
    var PIXEL_LAYER_WIDTH        = 184;
    var PIXEL_LAYER_HEIGHT       = 184;
    var PIXEL_LAYER_ROW_COUNT    = 15;
    var PIXEL_LAYER_COLUMN_COUNT = 15;
    var COMPOUND_COUNT           = PIXEL_LAYER_ROW_COUNT * PIXEL_LAYER_COLUMN_COUNT;
    
    // Read in the data
    var compounds;
    var samples;
    var compoundList;
    var sampleList;
    
    // We use a jQuery Deferred object to help manage data loading callbacks.
    // For more info, see http://api.jquery.com/jQuery.Deferred/
    var deferred = $.Deferred();
    
    // Get the compounds. Any that do not have a count are filtered out.
    d3.csv("data/aqua/compounds.csv", function(d){
        return {
            name: d['Row Labels'],
            count: parseInt(d['Count of ALL']),
            class: d['HMDB Class'],
        }
    }, function(err, rows){
        if(rows == null){ deferred.reject(err); }
        
        // Pick the top occuring COMPOUND_COUNT compounds
        compounds = rows.sort(function(a,b){ return b.count-a.count; });
        compounds = compounds.slice(0,COMPOUND_COUNT);
        
        if(compounds != undefined && samples != undefined){
            deferred.resolve(compounds, samples);
        }
    });

    // Get the samples.
    d3.text("data/aqua/samples.csv", function(err,txt){
        if(txt == null){ deferred.reject(err); }
        samples = d3.csv.parseRows(txt, function(d){
            return {
                name: d[0],
                values: d.slice(1).filter(function(d){ return d != ""; }),
            }
        }).filter(function(d){ return d.values.length > 0; });
        if(compounds != undefined && samples != undefined){
            deferred.resolve(compounds, samples);
        }
    });
    
    // This function is called if any errors occurred loading the data
    deferred.fail(function(err){
        // TODO Handle errors gracefully
    });
    
    // This function is called when all of the data is loaded
    deferred.done(function(compounds, samples){
        // Populate the lists
        populateCompounds(compounds);
        populateSamples(samples);
        // Hook up the list buttons
        d3.select('#samples-btn').on('click', function(){
            d3.select('#elements').classed('hidden', true);
            d3.select('#samples').classed('hidden', function(){
                return !d3.select(this).classed('hidden');
            });
        });
        d3.select('#elements-btn').on('click', function(){
            d3.select('#samples').classed('hidden', true);
            d3.select('#elements').classed('hidden', function(){
                return !d3.select(this).classed('hidden');
            });
        });
    });
    
    /**
    #### populateCompounds(compounds)
    Populates the list of compounds.
    **/
    function populateCompounds(compounds){
        // Create a searchable, sortable list using list.js and d3
        var options = {
            valueNames: ['name'],
            page: COMPOUND_COUNT,
        };
        d3.select('#elements .list').selectAll('li')
            .data(compounds)
        .enter().append('li')
            .on('mouseover.compound', onPixelMouseover)
            .on('mouseout.compound', onPixelMouseout)
            .each(function(d){
                // Populate the inner elements of the <li>
                d3.select(this).append('span', true)
                    .classed('name', true)
                    .html(d.name);
            });
        compoundList = new List('elements', options);
    }
    
    /**
    #### populateSamples
    Populates the list of samples.
    **/
    function populateSamples(samples){
        // Create a searchable, sortable list using list.js and d3
        var options = {
            valueNames: ['name', 'count', 'class'],
        };
        var scale = d3.scale.linear()
            .domain([0, d3.max(samples, function(d){ return d.values.length; })])
            .range([0, 100]);
        
        // Populate the list of samples
        d3.select('#samples .list').selectAll('li')
            .data(samples)
        .enter().append('li')
            .each(function(d){
                // Create the inner elements of the list item. This is a bit
                // more complicated than using a template, but we need to
                // specify the click functionality for the "Add" button.
                var count = d.values.length;
                var li = d3.select(this);
                li.append('span')
                    .classed('name', true)
                    .html(d.name)
                li.append('span')
                    .classed('count', true)
                    .classed('hidden', true)
                    .html(count);
                li.append('div')
                    .classed('bar', true)
                    .style('width', scale(count) + "%")
                li.append('button')
                    .attr('title', "Add")
                    .html("+")
                    .on('click', drawSample);
            });
            
        // It appears that list.js is storing some things when a List object is
        // created, preventing things from working correctly if you attempt to
        // just re-create a List object where there was an old one. Therefore,
        // we must only create the List object once, but we are free to
        // completely replace the HTML with the original values when the 'Def.'
        // button is clicked
        if(!sampleList){
            sampleList = new List('samples', options);
            d3.select('#samples .clear-sort')
                .on('click', function(d){
                    d3.selectAll('#samples .sort')
                        .classed('asc', false)
                        .classed('desc', false);
                    d3.selectAll('#samples .list li').remove();
                    populateSamples(samples);
                });
        }
    }
    
/************************* PIXELLAYER CONTROLLER CODE *************************/
    var pixelLayers = [];
    var overlap = null;
    var trashOverlap = false;
    
    // In order to get the correct boundaries of the trash icon, we need to 
    // briefly unhide it.
    d3.select('#trash').classed('hidden', false);
    var trashBounds = getTrashBounds();
    d3.select('#trash').classed('hidden', true);
    
    /**
    #### drawSample(sample)
    Draws a sample using a PixelLayer chart.
    **/
    function drawSample(s){
        var pl = createPixelLayer()
            .data(s.values, {name: s.name})
            .render();
    }
    
    /**
    #### createPixelLayer()
    Creates and returns a PixelLayer ready to be populated with data and rendered.
    **/
    function createPixelLayer(){
        
        
        
        var pl = PixelLayer('#canvas')
            .elements(compounds)
            .width(PIXEL_LAYER_WIDTH)
            .height(PIXEL_LAYER_HEIGHT)
            .rows(PIXEL_LAYER_ROW_COUNT)
            .columns(PIXEL_LAYER_COLUMN_COUNT)
            .pixelColor(function(d,i){
                if(pl.preview()){ return d3.rgb(239,72,95); }
                else if(pl.layerCount() == 1){ return d3.rgb(17, 110, 220); }
                else if(pl.operator() == "OR"){ return d3.rgb(255,255,0); }
                else{ return d3.rgb(156,247,71); }
            })
            .labelColor(function(d,i){
                if(pl.layerCount() > 1){ return d3.rgb(156,247,71); }
                else{ return d3.rgb(17, 110, 220); }
            })
            .operator("AND")
            .on('pixelMouseover', onPixelMouseover)
            .on('pixelMouseout', onPixelMouseout)
            .on('mousedown', onMousedown)
            .on('mouseup', onMouseup)
            .on('drag', onDrag)
            .on('dragend', onDragend)
            .on('labelDrag', onLabelDrag);
            
        pixelLayers.push(pl)
        return pl;
    }
    
    /**
    #### onPixelMouseover(data)
    Called when a pixel in a PixelLayer is moused over.
    **/
    function onPixelMouseover(d){
        var name = d.name;
        var empty = d3.select(this).classed('empty');
        // Display the element name in the header
        d3.select('#element-label').html(name);
        if(!empty){
            // Highlight the other corresponding pixels
            d3.selectAll('rect.pl-pixel').classed('hover', function(d){ 
                var pixel = d3.select(this);
                return d.name == name && !pixel.classed('empty');
            });
            // Fade out any PixelLayers that do not have the pixel/element
            var pl = null;
            for(var i in pixelLayers){
                pl = pixelLayers[i];
                if(pl.pixelValue(name) > 0){ pl.fadeIn(); }
                else{ pl.fadeOut(); }
            }
        }
    }
    
    /**
    #### onPixelMouseout(data)
    Called when the mouse leaves a pixel in the PixelLayer.
    **/
    function onPixelMouseout(d){
        d3.select('#element-label').html('');
        d3.selectAll('rect.pl-pixel').classed('hover', false);
        for(var name in pixelLayers){
            pixelLayers[name].fadeIn();
        }
    }
    
    /**
    #### onMousedown()
    Called when the mouse is pressed on a PixelLayer.
    **/
    function onMousedown(){
        // Bring the selected PixelLayer to the top of the SVG
        this.moveToFront();
        // Display the trash icon
        d3.select('#trash').classed("hidden", false);
    }
    
    /**
    #### onMouseup()
    Called when the mouse is released on a PixelLayer.
    **/
    function onMouseup(){
        d3.select('#trash').classed("hidden", true);
    }
    
    /**
    #### onDrag()
    Called when a PixelLayer is dragged about the canvas.
    **/
    function onDrag(){
        var mouse = d3.mouse(d3.select('#canvas').node());
        var mouseBounds = {
            'top': mouse[1],
            'left': mouse[0],
            'bottom': mouse[1],
            'right': mouse[0],
            'width': 1,
            'height': 1,
        }
        var boxBounds = this.boundingRect();
        var found = null;
        // overlap detection with other PixelLayer objects based on mouse
        for(var i = 0; i < pixelLayers.length; i++){
            var pl = pixelLayers[i];
            if(pl === this){ continue; }
            var otherBounds = pl.boundingRect();
            if(checkOverlap(mouseBounds, otherBounds)){
                found = pl;
                break;
            }
        }
        if(!overlap && found){
            onOverlap(this, found);
            overlap = found;
        }
        else if(overlap && !found){
            onOverlapBreak(this, overlap);
            overlap = null;
        }
        else if(overlap && found){
            // We passed from one overlapping item to another without breaking
            if(found != overlap){
                onOverlapBreak(this, overlap);
                onOverlap(this, found);
                overlap = found;
            }
        }
        
        // overlap detection with the trash icon
        found = false;
        if(checkOverlap(boxBounds, trashBounds)){ 
            found = true; 
        }
        if(!trashOverlap && found){
            trashOverlap = true;
            d3.select('#trash').classed('hover', true);
        }
        else if(trashOverlap && !found){
            trashOverlap = false;
            d3.select('#trash').classed('hover', false);
        }
    }
    
    /**
    #### onDragend()
    Called at the end of a Pixel Layer drag.
    ***/
    function onDragend(){
        if(trashOverlap){
            onTrashDrop(this);
        }
        else if(overlap){
            onPixelLayerDrop(this, overlap);
        }
    }
    
    /**
    #### onLabelDrag
    Called when a label is being dragged on a PixelLayer
    **/
    function onLabelDrag(l){
        if(this.layerCount() > 1){
            // Split the PixelLayer
            var data = this.data();
            var children = data.children();
            var removed;
            var remainder;
            for(var i = 0; i < children.length; i++){
                if(children[i].meta('name') == l){
                    removed = children.splice(i,1);
                    break;
                }
            }
            // To maintain the drag, we set the PixelLayer's data as the removed
            // layer and create a new child with the remaining data. Make a copy
            // (shallow) of the remaining children.
            remainder = children.slice(0);
            removed = removed[0];
            
            var newPL = createPixelLayer();
            var newData = newPL.data();
            for(var i = 0; i < remainder.length; i++){
                newData.addChild(remainder[i]);
            }
            newPL.x(this.x())
                .y(this.y())
                .render();
                
            data.clear();
            data.addChild(removed);
            this.redraw();
            this.moveToFront();
        }
    }
    
    /**
    #### onTrashDrop(PixelLayer)
    Called when a PixelLayer is dropped "into" the trash
    **/
    function onTrashDrop(p){
        remove(p);
    }
    
    /**
    #### onPixelLayerDrop(PixelLayer, PixelLayer)
    Called when a PixelLayer is dropped onto another PixelLayer.
    **/
    function onPixelLayerDrop(p,r){
        // Clear the preview on the layers
        p.clearPreview();
        r.clearPreview();
        
        // For now, we just flatten the expression.
        var pData = p.data();
        rData = r.data();
        var pChildren = pData.children();
        for(var i = 0; i < pChildren.length; i++){
            rData.addChild(pChildren[i]);
        }
        r.redraw();
        remove(p);
    }
    
    /**
    #### onoverlap(PixelLayer, PixelLayer)
    Called when two PixelLayer charts overlap with one another.
    **/
    function onOverlap(a,b){
        // Draw a preview
        var aData = a.data();
        var bData = b.data();
        var aChildren = aData.children();
        var bChildren = bData.children();
        var newData = OperatorNode("AND");
        for(var i = 0; i < bChildren.length; i++){
            newData.addChild(bChildren[i]);
        }
        for(var i = 0; i < aChildren.length; i++){
            newData.addChild(aChildren[i]);
        }
        a.preview(newData);
        b.preview(newData);
    }
    
    /**
    #### onoverlapBreak(PixelLayer, PixelLayer)
    Called when two PixelLayer charts are no longer overlapping.
    **/
    function onOverlapBreak(a,b){
        a.clearPreview();
        b.clearPreview();
    }
    
    /**
    #### checkOverlap(bound, bound)
    Given two bounding rectangles, returns true if they overlap or intersect.
    **/
    function checkOverlap(a,b){
        return (a.left < b.right && a.right > b.left &&
                a.top < b.bottom && a.bottom > b.top);
    }
    
    /**
    #### getTrashBounds()
    Returns the bounding rect of the trash area. Requires jQuery.
    **/
    function getTrashBounds(){
        var trash = $('#trash');
        var x = trash.offset().left;
        var y = trash.position().top;
        var width = trash.outerWidth();
        var height = trash.outerHeight();
        return {
            'top': y,
            'left': x,
            'bottom': y + height,
            'right': x + width,
            'width': width,
            'height': height
        };
    }
    
    /**
    #### remove(PixelLayer)
    Removes a PixelLayer object from the viz.
    **/
    function remove(p){
        p.remove();
        for(var i = 0; i < pixelLayers.length; i++){
            if(pixelLayers[i] === p){
                pixelLayers.splice(i,1);
                return;
            }
        }
    }
    
});
