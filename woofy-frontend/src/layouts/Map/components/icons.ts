import L from 'leaflet';

export const icons: { [key: string]: L.Icon } = {
    'Home': new L.Icon({
        iconUrl: 'https://img.icons8.com/pulsar-color/48/home-page.png',
        iconSize: [35, 40],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    }),
    'Dog Walker': new L.Icon({
        iconUrl: 'https://img.icons8.com/ios-filled/50/dog-walking.png',
        iconSize: [35, 40],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    }),
    'Boarding': new L.Icon({
        iconUrl: 'https://img.icons8.com/external-glyph-geotatah/64/external-pet-pet-lover-society-glyph-glyph-geotatah-25.png',
        iconSize: [35, 40],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    }),
    'Dog Sitter': new L.Icon({
        iconUrl: 'https://img.icons8.com/external-others-pike-picture/50/external-Pet-Sitter-business-others-pike-picture-3.png',
        iconSize: [50, 55],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    }),
    'Day Care': new L.Icon({
        iconUrl: 'https://img.icons8.com/ios-filled/50/dog-park.png',
        iconSize: [35, 40],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    }),
};