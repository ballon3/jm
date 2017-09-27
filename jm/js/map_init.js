element.append("<div id=\"{{uuid}}\" style=\"width: auto; height: 650px; overflow: visible;\"></div>");

requirejs(["mapboxgl"], function(mapboxgl) {
    var map = new mapboxgl.Map({
        container: "{{uuid}}",
        style: "{{style}}",
        {{#zoom}}
        zoom: {{zoom}},
        {{/zoom}}
        {{#center}}
        center: {{center.value}},
        {{/center}}
    });

    window.__jm_maps["{{uuid}}"] = map;
});