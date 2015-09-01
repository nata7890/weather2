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
		locSuccess(latitude, longitude);
        document.getElementById('lat').innerHTML = latitude;
        document.getElementById('long').innerHTML = longitude;
        });
  }

google.maps.event.addDomListener(window, 'load', initialize);

function locSuccess(latitude, longitude) {
		var lang = "ua";
        $.getJSON(
                'http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + latitude + '&lon=' + longitude + '&cnt=4&units=metric',
                function (response) {
					var html = '<table><tr><th>' + 'Location' + '</th>';
					response.list.forEach (function(day){
						var date = new Date(day.dt * 1000).toLocaleDateString();
						html += '<th>' + date + '</th>'
					});
					html += '</tr>';
                    console.log(response);
					html += '<tr><td>' + response.city.name + '</td>';
                    response.list.forEach (function(day){
						html += '<td><img src="images/'+ day.weather[0].icon + '.png" class = "icon"/><h4>' + day.weather[0].main + '</h4><p>' + Math.round(day.temp.max) + '&deg;C/'+ Math.round(day.temp.min) + '&deg;C<p>' + '</td>'
						
					});
					html += '</table>'
					$('#speed').html(html);
					console.log(html);
                }
            );
        
    }