$(document).ready(function() {
    $("#basic-form").validate();
  });



  // Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 55.75540131108318, lng: 37.558455831613614 }; 
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: moscow,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: moscow,
      map: map,
    });
  }