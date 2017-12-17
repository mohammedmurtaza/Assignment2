function myMap() {
  var mapCanvas = document.getElementById("map");
  var myCenter = new google.maps.LatLng(52.581895, -0.273904); 
  var mapOptions = {center: myCenter, zoom: 18};
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var marker = new google.maps.Marker({
    position: myCenter,
    animation: google.maps.Animation.BOUNCE
  });
  marker.setMap(map);
}

/* This javascript function uses api to bring google maps of my home address to make it visible on my CV. 
This piece of coding includes an animation of a red marker which shows where my house is located on the maps. 
In order to get this functionality to work, I had to register and get my own API key from Google Developers.*/