const API_KEY = 'AIzaSyCajvWLTFA3xUKmuMatx55F-hfzPnm9MfA';

function initMap(){
    
    var options = {
      zoom:14,
      center:{lat:41.260245,lng:27.936798}
    }

    var map = new google.maps.Map(document.getElementById('map'), options);
    
    var marker = new google.maps.Marker({
      position:{lat:41.260245,lng:27.936798},
      map:map
      });
}