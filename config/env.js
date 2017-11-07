export const CLIENT_ID = process.env.CLIENT_ID || 'CLIENT_ID';
export const CLIENT_SECRET = process.env.CLIENT_SECRET || 'CLIENT_SECRET';
export const TOKEN_NAME = process.env.TOKEN_NAME || 'TOKEN_NAME';
export const AUTH_URL = 'https://foursquare.com/oauth2/authenticate';
export const API_URL = 'https://api.foursquare.com/v2';
export const API_VERSION = '20170118';
export const GMAPS_URL = 'https://maps.googleapis.com/maps/api/js';
export const GMAPS_KEY = process.env.GMAPS_KEY || 'GMAPS_KEY';
export const GMAPS_STYLES = [{featureType:'administrative',elementType:'labels.text.fill',stylers:[{color:'#444444'}]},{featureType:'landscape',elementType:'all',stylers:[{color:'#f2f2f2'}]},{featureType:'poi',elementType:'all',stylers:[{visibility:'off'}]},{featureType:'road',elementType:'all',stylers:[{saturation:-100},{lightness:45}]},{featureType:'road.highway',elementType:'all',stylers:[{visibility:'simplified'}]},{featureType:'road.arterial',elementType:'labels.icon',stylers:[{visibility:'off'}]},{featureType:'transit',elementType:'all',stylers:[{visibility:'off'}]},{featureType:'water',elementType:'all',stylers:[{color:'#aaaacb'},{visibility:'on'}]}];
export const GMAPS_MARKER = {
  url: '../../assets/img/marker.png',
  size: [20, 30],
  origin: [0, 0],
  anchor: [0, 0]
}
