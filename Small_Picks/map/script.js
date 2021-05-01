mapboxgl.accessToken = 'pk.eyJ1Ijoic2Fpc3JpbmkiLCJhIjoiY2tvNWdoczdpMXNzaDJxcGcyY2I0cDk1dSJ9.j8SzAE88fBrMVljFBAtJUw';

navigator.geolocation.getCurrentPosition(Accsuccces,Accfailed,{ 
  enableHighAccuracy:true 
})

function Accsuccces(position){
  createMap([position.coords.longitude,position.coords.latitude])
}
function Accfailed(){
  createMap([ -5.6173, 5.755826])
}

function createMap(pos){
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: pos,
    zoom:13
  });

  map.addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    })
  );
  map.addControl(new mapboxgl.NavigationControl());

  
  map.addControl(
    new MapboxDirections({
    accessToken: mapboxgl.accessToken
    }),
    'top-left'
    );
}
