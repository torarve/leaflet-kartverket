Eksempel som viser hvordan kartdata fra [Kartverket](https://kartverket.no/) 
kan brukes sammen med [Leaflet](https://leafletjs.com/).

**Oppdatering juli 2024**

Kartverket holder på å fase ut den gamle WMTS cachen (ref [Store endringer i Kartverkets tjenestetilbud for karttjenester](https://www.geonorge.no/aktuelt/Se-siste-nyheter/store-endringer-i-kartverkets-cachetjenester/)).
I juli 2024 ble det registrert at den gamle cache-tjenesten begynte å blir overbelastet (ref [Treghet på karttjenesten opencache.statkart.no](https://www.kartverket.no/om-kartverket/nyheter/alle/2024/juli/treghet-pa-opencache.statkart.no)), og det ble nødvendig å gjøre om på deler av eksemplene.

Dessverre er det kun kartene *topo*, *topograatone* og *toporaster* som er tilgjengelig via den nye tjenesten. Kartverket har publisert en 
oversikt over de ulike cache tjenestene her: https://status.geonorge.no/cache.html.

Jeg har lagt inn alle de nye kartlagene, men beholdt Sjøkart - raster

## Referanser
- https://leafletjs.com/
- https://kartverket.no/api-og-data
- https://github.com/kartverket/LeafletEksempler
- https://kartkatalog.geonorge.no/apier-og-tjenester?Facets%5B0%5D.name=type&Facets%5B1%5D.name=theme&Facets%5B2%5D.name=organization&Facets%5B3%5D.name=nationalinitiative&Facets%5B4%5D.name=DistributionProtocols&Facets%5B5%5D.name=area&Facets%5B6%5D.name=dataaccess&Facets%5B7%5D.name=spatialscope&text=kartverket&Offset=61&orderby=score
- https://www.geonorge.no/aktuelt/om-geonorge/brukerveiledning/
- https://www.geonorge.no/aktuelt/Se-siste-nyheter/store-endringer-i-kartverkets-cachetjenester/
- https://www.geonorge.no/aktuelt/Se-siste-nyheter/store-endringer-i-kartverkets-cachetjenester/ny-tjenestestuktur/


## Kartlag

Følgende kartlag er tilgjengelige for bruk i LeafletJS uten noen ekstra plugins.

Informasjon er hentet fra https://kartkatalog.geonorge.no/ og metadata beskrivelse for de ulike tjenestene. Tips for førstnevnte er å filtrere Distribusjonsform på WMTS.

### Topografisk norgeskart cache (inkluderer gråtone og raster)

Tjenesten inneholder topografiske kart i målestokken 1:500 til 1:10M. Tjenesten inneholder kartdata, FKB og vbase data, men ikke matrikkeldata. Matrikkeldata kan bli funnet i egne wms-tjenester kalt Matrikkel Enkel WMS eller Matrikkekart WMS.

Link: [GeoNorge produkside](https://kartkatalog.geonorge.no/metadata/topografisk-norgeskart-cache/8f381180-1a47-4453-bee7-9a3d64843efa)

### Sjøkart - raster cache WMTS

Tjenesten inneholder sjøkartene (papirkartene) i rasterutgave. Cache WMTS tilbyr i motsetning til WMS, forhåndsdefinerte målestokker. Det muligjør en hurtigere visning av kartet. Finn mer informasjon på produktsiden.

Id: `sjokartraster`

Link: [GeoNorge produktside](https://kartkatalog.geonorge.no/metadata/sjoekart-raster-cache-wmts/72044503-938b-4955-a931-9e5a7eabf28e)


### Fjellskygge cache

Denne tjenesten inneholder fjellskygger. Den er ment for å kombineres med andre tjenester.

Id: `fjellskygge`

Link: [GeoNorge produktside](https://kartkatalog.geonorge.no/metadata/fjellskygge-cache/cca7c129-fe66-4c96-9091-40d92290dd81)
