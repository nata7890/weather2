function getWeatherByCoords(fnOK) {
	function initialize() {
			var address = (document.getElementById('pac-input'));
			var autocomplete = new google.maps.places.Autocomplete(address);
			
			autocomplete.setTypes(['geocode']);
			google.maps.event.addListener(autocomplete, 'place_changed', function() {
				var place = autocomplete.getPlace();
				if (!place.geometry) {
					return;
				}

			var address = '';
			if (place.address_components) {
				address = [
					(place.address_components[0] && place.address_components[0].short_name || ''),
					(place.address_components[1] && place.address_components[1].short_name || ''),
					(place.address_components[2] && place.address_components[2].short_name || '')
					].join(' ');
			}
			
			var latitude = place.geometry.location.lat();
			var longitude = place.geometry.location.lng();
			
			$.getJSON(
					'http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + latitude + '&lon=' + longitude + '&cnt=7&units=metric',
					function (response) {
							fnOK.call(this, response);
					}
				);
			
			//getWeatherByCoords(latitude, longitude);
			//document.getElementById('lat').innerHTML = latitude;
			//document.getElementById('long').innerHTML = longitude;
			});
	  }

google.maps.event.addDomListener(window, 'load', initialize);


		
        
    }
	
	/*<table id = "locations_table">
                <tr id = "date">
                    <th>Location</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <td id = "location"></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
                </tr>
                <tr>
                    <td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
                </tr>
                <tr>
                    <td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
                </tr>
                <tr>
                    <td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
                </tr>
            </table>*/