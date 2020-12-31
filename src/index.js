import L from 'leaflet';

const map = L.map('map').setView([51.505, -0.09], 1).setView([65.505, 12], 5);;

// Layers:
// - norgeskart_bakgrunn
// - norgeskart_bakgrunn2
// - topo4
// - topo4graatone
// - europa
// - europa_forenklet
// - kartdata3
// - norges_grunnkart
// - norges_grunnkart_graatone
// - terreng_norgeskart
// - vegnett ?
// - sjokartraster
// - toporaster4
// - fjellskygge

L.tileLayer(
    'http://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=topo4&zoom={z}&x={x}&y={y}', {
    attribution: '<a href="https://www.kartverket.no/">Kartverket</a>'
    }).addTo(map);