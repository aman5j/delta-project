
mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    //Choose from mapbox's core styles, or make your own style with mapbox Studio
    style: "mapbox://styles/mapbox/streets-v12", //Style URL
    center: listing.geometry.coordinates, // 78.1772, 26.2124 Gwalior coordinates // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom
});

const marker = new mapboxgl.Marker({ color: 'red'})
.setLngLat(listing.geometry.coordinates)   //Listing.geometry.coordinates
.setPopup(new mapboxgl.Popup({offset: 25}).setHTML(
    `<h4>${listing.title}</h4><p>Exact location will be provided after booking</>`
    )
)
.addTo(map);

