import L from 'leaflet';

const map = L.map('map').setView([65.505, 12], 5);

// Layers from Kartverket that shows in LeafletJS without extra plugins
const availableLayers = [
    { id: 'norgeskart_bakgrunn', title: 'Norgeskart bakgrunn' },
    { id: 'topo4', title: 'Topografisk norgeskart' },
    { id: 'topo4graatone', title: 'Topografisk norgeskart (gråtone)' },
    { id: 'europa', title: 'Europakart' },
    { id: 'kartdata3', title: 'Kartdata 3' },
    { id: 'norges_grunnkart', title: 'Norges Grunnkart' },
    { id: 'norges_grunnkart_graatone', title: 'Norges Grunnkart (gråtone)' },
    { id: 'egk', title: 'Europeiske grunnkart' },
    { id: 'havbunn_grunnkart', title: 'Havbunn grunnkart' },
    { id: 'terreng_norgeskart', title: 'Terreng norgeskart' },
    { id: 'sjokartraster', title: 'Sjøkart - raster' },
    { id: 'toporaster4', title: 'Topografisk raster' },
    { id: 'fjellskygge', title: 'Fjellskygge' },
    { id: 'bakgrunnskart_forenklet', title: 'Forenklet bakgrunnskart' },
];


let layer = null;
function setLayer(id) {
    if (layer!==null) {
        map.removeLayer(layer);
        layer = null;
    }
    layer = L.tileLayer(
        `https://opencache{s}.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=${id}&zoom={z}&x={x}&y={y}`,
        {
            maxZoom: 20,
            attribution: '<a href="https://www.kartverket.no/">Kartverket</a>',
            subdomains: ['', '2', '3']
        });    
    layer.addTo(map);
}

document.addEventListener("DOMContentLoaded", () => {
    const selectedMapElement = document.getElementById('selected-map');
    selectedMapElement.addEventListener("change", evt => {
        setLayer(selectedMapElement.value);
    });

    function setOptions(data) {
        data.forEach(item => {
            const option = document.createElement("option");
            option.textContent = item.title;
            option.setAttribute("value", item.id);
            selectedMapElement.appendChild(option);
        })
    }

    setOptions(availableLayers);
})
