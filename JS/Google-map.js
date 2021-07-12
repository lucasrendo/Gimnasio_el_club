// Initialize and add the map
      function initMap() {
        // The location of Uluru
        const ElClub = { lat: -31.651585, lng: -64.43343 };
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 18,
          center: ElClub,
        });
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          position: ElClub,
          map: map,
        });
      }
