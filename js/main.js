/**
main.js
The main JavaScript functions. Loads data, populates the page, etc.
Dependencies:
    jQuery
    d3
    list.js
**/
$(document).ready(function(){
    // Read in the data
    var compounds;
    var samples;
    var compoundList;
    var sampleList;
    
    // We use a jQuery Deferred object to help manage data loading callbacks.
    // For more info, see http://api.jquery.com/jQuery.Deferred/
    var deferred = $.Deferred();
    
    // Get the compound labels. Any that do not have a count are filtered out.
    d3.csv("data/aqua/compounds.csv", function(d){
        return {
            name: d['Row Labels'],
            count: parseInt(d['Count of ALL']),
            class: d['HMDB Class'],
        }
    }, function(err, rows){
        if(rows == null){ deferred.reject(err); }
        compounds = rows.filter(function(d){ return d.count > 0; });
        
        // TODO We need to restrict to only compounds that will be displayed in
        // the grid
        
        if(compounds != undefined && samples != undefined){
            deferred.resolve(compounds, samples);
        }
    });

    // Get the samples. (It doesn't have a header, so it requires a little
    // extra work)
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
            d3.select('#compounds').classed('hidden', true);
            d3.select('#samples').classed('hidden', function(){
                return !d3.select(this).classed('hidden');
            });
        });
        d3.select('#compounds-btn').on('click', function(){
            d3.select('#samples').classed('hidden', true);
            d3.select('#compounds').classed('hidden', function(){
                return !d3.select(this).classed('hidden');
            });
        });
    });
    
    function populateCompounds(compounds){
        // Create a searchable, sortable list using list.js and d3
        var options = {
            valueNames: ['name'],
            item: 'compound-item'
        };
        
        d3.select('#compounds .list').selectAll('li')
            .data(compounds)
        .enter().append('li')
            .on('mouseover.header', function(d){
                d3.select('#compound-label').html(d.name);
            })
            .on('mouseout.header', function(d){
                d3.select('#compound-label').html('');
            })
            .each(function(d){
                var name = d.name;
                // Populate the inner elements of the <li>
                d3.select(this).append('span', true)
                    .classed('name', true)
                    .html(d.name);
            });
        compoundList = new List('compounds', options);
    }
    
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
                    .on('click', function(){});
            });
            
        // It appears that list.js is storing some things when a List object is
        // created, preventing things from working correctly if you attempt to
        // just re-create a List object where there was an old one. Therefore,
        // we must only create the List object once, but we are free to
        // completely replace the HTML with the original values.
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
    
    
    
});
