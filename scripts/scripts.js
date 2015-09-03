$(function(){
    //getWeatherData('ua', dataReceived, showError);
    getWeatherByCoords(dataReceived);

    function dataReceived(response) {
		var html = '<tr><th>' + 'Location' + '</th>';
		
		response.list.slice(0, 4).forEach(function(day){
			var date = new Date(day.dt * 1000).toLocaleDateString();
			html += '<th>' + date + '</th>'
			});
		html += '</tr>';
		
        console.log(response);
		html += '<tr><td>' + response.city.name + '</td>';
        response.list.slice(0, 4).forEach (function(day){
			html += '<td><img src="images/'+ day.weather[0].icon + '.png" class = "icon"/><h4>' + day.weather[0].main + '</h4><p>' + Math.round(day.temp.max) + '&deg;C/'+ Math.round(day.temp.min) + '&deg;C</p>' + '</td>'
						
			});
	
		$('#weatherTableLocations').html(html);
		console.log(html);
	}
});
