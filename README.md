Eksempel som viser hvordan kartdata fra [Kartverket](https://kartverket.no/) 
kan brukes sammen med [Leaflet](https://leafletjs.com/).

## Referanser
- https://leafletjs.com/
- https://kartverket.no/api-og-data
- https://github.com/kartverket/LeafletEksempler
- https://kartkatalog.geonorge.no/apier-og-tjenester?Facets%5B0%5D.name=type&Facets%5B1%5D.name=theme&Facets%5B2%5D.name=organization&Facets%5B3%5D.name=nationalinitiative&Facets%5B4%5D.name=DistributionProtocols&Facets%5B5%5D.name=area&Facets%5B6%5D.name=dataaccess&Facets%5B7%5D.name=spatialscope&text=kartverket&Offset=61&orderby=score
- https://www.geonorge.no/aktuelt/om-geonorge/brukerveiledning/

## Kartlag

Følgende kartlag er tilgjengelige for bruk i LeafletJS uten noen ekstra plugins.

Informasjon er hentet fra https://opencache.statkart.no/gatekeeper/gk/gk.open_wmts?request=GetCapabilities&service=WMS og https://kartkatalog.geonorge.no/. Tips for sistnevnte er å filtrere Distribusjonsform på WMTS.

### Norgeskart bakgrunn cache

Tjenesten ble laget primært for Norgeskart kartklient. Det inneholder data fra Topografisk norgeskart WMS, Dybdedata WMS og Svalvard data fra Polar Instituttet.

Id: `norgeskart_bakgrunn`

Link: [GeoNorge produktside](https://kartkatalog.geonorge.no/metadata/norgeskart-bakgrunn-cache/c0d063aa-59fc-42db-bc5d-a1c88f2bf256)

### Topografisk norgeskart 4 cache

Tjenesten inneholder topografiske kart i målestokken 1:500 til 1:10M. Tjenesten inneholder kartdata, FKB og vbase data, men ikke matrikkeldata. Matrikkeldata kan bli funnet i egne wms-tjenester kalt Matrikkel Enkel WMS eller Matrikkekart WMS. Example kall: http://opencache.statkart.no/gatekeeper/gk/gk.open_wmts?&layer=topo4&style=default&tilematrixset=EPSG%3A25833&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image%2Fpng&TileMatrix=EPSG%3A25833%3A4&TileCol=7&TileRow=6

Id: `topo4`

Link: [GeoNorge produktside](https://kartkatalog.geonorge.no/metadata/topografisk-norgeskart-4-cache/8f381180-1a47-4453-bee7-9a3d64843efa)

### Topografisk norgeskart gråtone 4 cache

Tjenesten inneholder topografiske kart i målestokken 1:500 til 1:10M. Tjenesten inneholder kartdata, fbk og vbase data, men ikke matrikkel data. Matrikkel data kan bli funnet i en egen wms-tjeneste kalt Matrikkel Enkel WMS Example kall: http://opencache.statkart.no/gatekeeper/gk/gk.open_wmts?&layer=topo4graatone&style=default&tilematrixset=EPSG%3A25833&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image%2Fpng&TileMatrix=EPSG%3A25833%3A4&TileCol=7&TileRow=6

Id: `topo4graatone`

Link: [GeoNorge produktside](https://kartkatalog.geonorge.no/metadata/topografisk-norgeskart-graatone-4-cache/6e41f528-3684-4b0c-9d72-b6bf2c7b075d)

### Europakart cache

Basis topologi, arealbruk, infrastruktur og byer i Europa. Tjenesten inneholder Vmap0-data for Europa. Layers: Vmap0Hav, Vmap0Havis, Land, Vmap0Land, Vmap0Bebyggelse, Vmap0Skog, Vmap0Dyrketmark, Vmap0Sletteland, Vmap0Innsjo, Vmap0MyrSump, Vmap0Isbre, Vmap0Hoydekontur, Vmap0Kystkontur, Vmap0Elver, Vmap0Jernbane, Hovedveger, Veger, Vmap0AdministrativeGrenser, Vmap0Kraftspenn, StoreSteder, Vmap0Hoydepunkt, Vmap0Lufthavn, Bynavn, Vmap0Stedsnavn, Landsnavn.

Id: `europa`

Link: [GeoNorge produktside](https://kartkatalog.geonorge.no/metadata/europakart-cache/525650f8-1eb7-488c-8b6f-259f8f71f1e5)

### Kartdata 3 cache

Topografisk kart basert på N10000, N5000, N2000, N1000, N500, N250 og N50 data.

Id: `kartdata3`

Link: [GeoNorge produktside](https://kartkatalog.geonorge.no/metadata/kartdata-3-cache/be121fe0-671f-4717-a628-296e91be29d0)

### Norges Grunnkart Cache

Tjenesten inneholder topografiske kart i målestokken 1:500 til 1:10M.

Id: `norges_grunnkart`

Link: [GeoNorge produktside](https://kartkatalog.geonorge.no/metadata/norges-grunnkart-cache/860f8b53-1dcf-4a39-87a4-71b3e9125dcb)

### Norges grunnkart gråtone cache

Tjenesten inneholder topografiske kart i målestokken 1:500 til 1:10M i gråtone.

Id: `norges_grunnkart_graatone`

Link: [GeoNorge produktside](https://kartkatalog.geonorge.no/metadata/norges-grunnkart-graatone-cache/dd4a230e-0d02-4514-bab4-c7c279040c8c)

### Europeiske grunnkart cache

Europeiske grunnkart

Id: `egk`

Link: [GeoNorge produktside](https://kartkatalog.geonorge.no/metadata/europeiske-grunnkart-cache/b1038fbd-cd9c-41a2-a44d-1901726c0ee5)

### Havbunn grunnkart cache

Havbunnraster 50m 25m og 5m C-Celler.

Id: `havbunn_grunnkart`

Link: [GeoNorge produktside](https://kartkatalog.geonorge.no/metadata/havbunn-grunnkart-cache/a0a8faa1-dfda-4cd3-8bda-269dd3ffdafc)

### Terreng norgeskart cache

Denne tjeneste er opprettet som en backend for en cache for Norgeskart slik at folk kan vise Kartverket's terreng og høyde tjenester med god hastighet.

Id: `terreng_norgeskart`

Link: [GeoNorge produktside](https://kartkatalog.geonorge.no/metadata/terreng-norgeskart-cache/db2280ab-1f55-4596-b1fc-26ff147a2bc5)

### Sjøkart - raster cache WMTS

Tjenesten inneholder sjøkartene (papirkartene) i rasterutgave. Cache WMTS tilbyr i motsetning til WMS, forhåndsdefinerte målestokker. Det muligjør en hurtigere visning av kartet. Finn mer informasjon på produktsiden.

Id: `sjokartraster`

Link: [GeoNorge produktside](https://kartkatalog.geonorge.no/metadata/sjoekart-raster-cache-wmts/72044503-938b-4955-a931-9e5a7eabf28e)

### Toporaster 4 cache

Tjenesten inneholder topografiske raster i målestokken 1:50000 til 1:10M, og N5 raster.

Id: `toporaster4`

Link: [GeoNorge produktside](https://kartkatalog.geonorge.no/metadata/toporaster-4-cache/99de348d-fdc1-4b04-a79e-31feeeba030a)

### Fjellskygge cache

Denne tjenesten inneholder fjellskygger. Den er ment for å kombineres med andre tjenester.

Id: `fjellskygge`

Link: [GeoNorge produktside](https://kartkatalog.geonorge.no/metadata/fjellskygge-cache/cca7c129-fe66-4c96-9091-40d92290dd81)

### Bakgrunnskart forenklet cache

Denne tjeneste er et forenklet bakgrunnskart av Norge. Tjenesten er opprettet etter ønske fra flere brukere om et enkelt og raskt bakgrunnskart. Konstruktiv tilbakemelding er velkommen.

Id: `bakgrunnskart_forenklet`

Link: [GeoNorge produktside](https://kartkatalog.geonorge.no/metadata/bakgrunnskart-forenklet-cache/17e6fec4-7d45-4835-9809-7dd6ef18a757)

