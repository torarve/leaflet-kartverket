import L from 'leaflet';
import DefaultIcon from 'leaflet';

const map = L.map('map').setView([65.505, 12], 5);

// Layers from Kartverket that shows in LeafletJS without extra plugins

/** Old layers */
const old_availableLayers = [
    { id: 'norgeskart_bakgrunn', title: 'Norgeskart bakgrunn' }, // replace with topo
    { id: 'topo4', title: 'Topografisk norgeskart' }, // replace with topo
    { id: 'topo4graatone', title: 'Topografisk norgeskart (gråtone)' }, // replace with topograatone
    { id: 'europa', title: 'Europakart' },
    { id: 'kartdata3', title: 'Kartdata 3' },
    { id: 'norges_grunnkart', title: 'Norges Grunnkart' },
    { id: 'norges_grunnkart_graatone', title: 'Norges Grunnkart (gråtone)' },
    { id: 'egk', title: 'Europeiske grunnkart' },
    { id: 'havbunn_grunnkart', title: 'Havbunn grunnkart' },
    { id: 'terreng_norgeskart', title: 'Terreng norgeskart' }, // replace with topo
    { id: 'sjokartraster', title: 'Sjøkart - raster' },
    { id: 'toporaster4', title: 'Topografisk raster' },
    { id: 'fjellskygge', title: 'Fjellskygge' },
    { id: 'bakgrunnskart_forenklet', title: 'Forenklet bakgrunnskart' }, // replace with topograatone
];

const availableLayers = [
    { id: 'topo', title: 'Topografisk norgeskart', openCache: false },
    { id: 'topograatone', title: 'Topografisk gråtonekart', openCache: false },
    { id: 'toporaster', title: 'Topografisk rasterkart', openCache: false },
    { id: 'sjokartraster', title: 'Sjøkart - raster (gammel cahce server)', openCache: true },
    { id: 'fjellskygge', title: 'Fjellskygge (gammel cache server)', openCache: true },
]

let layer = null;
function setLayer(id) {
    if (layer!==null) {
        map.removeLayer(layer);
        layer = null;
    }
    
    const openCache = availableLayers.find(x => x.id === id)?.openCache ?? false;
    layer = L.tileLayer(
        openCache
            ? `https://opencache{s}.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=${id}&zoom={z}&x={x}&y={y}`
            : `https://cache{s}.kartverket.no/v1/wmts/1.0.0/${id}/default/webmercator/{z}/{y}/{x}.png`,
        {
            format: 'image/png',
            minZoom: 5,
            maxZoom: 18,
            detectRetina: true,
            attribution: '<a href="https://www.kartverket.no/">Kartverket</a>',
            subdomains: openCache ? ['', '2', '3'] : ['', '2', '3', '4'],
        });
    layer.addTo(map);
}


let marker = null;
function updatePosition(success) {
    const pos = success.coords;
    const latLng = success.latlng;
    if (layer) {
        if (!marker) {
            marker = L.circle(latLng, {radius: success.accuracy});
            map.setView(latLng, 14);
            marker.addTo(map);
        }
        else {
            marker.setLatLng(latLng);
            marker.setRadius(success.accuracy);
        }
    }
}

function startLocationTracking() {
    map.locate({
        watch: true,
        enableHighAccuracy: true,
    });
    map.on('locationfound', updatePosition);
}

function stopLocationTracking() {
    map.stopLocate();
    if (marker) {
        map.removeLayer(marker);
        marker = null;
    }
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
    const current = availableLayers[0];
    selectedMapElement.value = current.id;
    setLayer(current.id);

    var location = L.control({position: 'bottomleft'});
    location.onAdd = function (map) {
        const container = this._div = L.DomUtil.create('div', 'location');
        this._div.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></svg>';

        this._div.addEventListener('click', function() {
            if(L.DomUtil.hasClass(container, 'selected')) {
                stopLocationTracking();
                L.DomUtil.removeClass(container, 'selected');
            }
            else {
                if (layer) {
                        startLocationTracking();
                        L.DomUtil.addClass(container, 'selected');
                }
            }
        });
        return this._div;
    }

    location.addTo(map);
    // Fix: hide address bar on mobile browsers (https://developers.google.com/web/fundamentals/native-hardware/fullscreen/)
    window.scrollTo(0,1);
})
