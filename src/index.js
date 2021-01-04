import L from 'leaflet';

const capabilitiesUrl = "https://opencache.statkart.no/gatekeeper/gk/gk.open_wmts?request=GetCapabilities&service=WMS";
const map = L.map('map').setView([65.505, 12], 5);
let layer = null;

function setLayer(id) {
    if (layer!==null) {
        map.removeLayer(layer);
        layer = null;
    }
    layer = L.tileLayer(
        `http://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=${id}&zoom={z}&x={x}&y={y}`,
        {
            maxZoom: 20,
            attribution: '<a href="https://www.kartverket.no/">Kartverket</a>'
        });    
    layer.addTo(map);
}

document.addEventListener("DOMContentLoaded", () => {
    fetch(capabilitiesUrl)
        .then(response => response.text())
        .then(str => new DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            return Array.from(data.querySelectorAll("Layer")).map(layer => {
                return {
                    title: layer.querySelector("Title")?.textContent,
                    id: layer.querySelector("Identifier")?.textContent,
                    format: layer.querySelector("Format")?.textContent,
                };
            })}
        )
        .then(data => {
            const elem = document.getElementById('selected-map');
            console.log(elem);
            data.forEach(item => {
                const option = document.createElement("option");
                option.textContent = item.title;
                option.setAttribute("value", item.id);
                elem.appendChild(option);
            })

            elem.addEventListener("change", evt => {
                setLayer(elem.value);
            });
        })
        ;
})
