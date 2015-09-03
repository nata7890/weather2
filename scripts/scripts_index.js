$(function(){
    //getWeatherData('ua', dataReceived, showError);
    getWeatherByCoords(dataReceived);

    function dataReceived(response) {
		console.log(response.list[0]);
		var today = response.list[0];
		var tomorrow = response.list[1];
		var nextDays = response.list.slice(2, 8);
		var dateToday = new Date(today.dt * 1000).toLocaleDateString();
		var dateTomorrow = new Date(tomorrow.dt * 1000).toLocaleDateString();
		//var dateNextDays = new Date(nextDays.dt * 1000).toLocaleDateString();
		
		var html = '<tr><td id = "first-td" rowspan = "6"><h2>' + response.city.name + '</h2><h2>' + dateToday + '</h2>' + '<img id = "first-picture" src="images/'+ today.weather[0].icon + '_cr.jpg" /><h3 id = "today-t">' + Math.round(today.temp.day) + '&deg;C' +'</h3><span class="column"><h3>'+ today.weather[0].description +'</h3><p>' + Math.round(today.temp.max) + '&deg;C/'+ Math.round(today.temp.min) + '&deg;C</p>Humidity: ' + today.humidity + '%</p><p>Pressure: ' + today.pressure + ' hPa</p></span>' + '<span class="column" id="second-column"><h3>Wind</h3><p>Speed: ' + today.speed + '</p><p>Direction: ' + today.deg + '&deg;</p></span></td class = "asside"><td><h3>' + dateTomorrow + '</h3><img class = "icon" src="images/'+ tomorrow.weather[0].icon + '.png" class = "icon"/><h4>' + tomorrow.weather[0].main + '</h4><p>' + Math.round(tomorrow.temp.max) + '&deg;C/'+ Math.round(tomorrow.temp.min) + '&deg;C</p></td>';
		
		html += '</tr>';
		/*response.list.forEach(function(day){
			var date = new Date(day.dt * 1000).toLocaleDateString();
			});*/
		
		
        console.log(response);
		nextDays.forEach (function(day){
			html += '<td><h3 class = "asside">' + new Date(day.dt * 1000).toLocaleDateString() + '</h3><img class = "icon" src="images/'+ day.weather[0].icon + '.png" class = "icon" /><h4>' + day.weather[0].main + '</h4><p>' + Math.round(day.temp.max) + '&deg;C/'+ Math.round(day.temp.min) + '&deg;C<p>' + '</td></tr>'
						
			});
	
		$('#weatherTableIndex').html(html);
		console.log(html);
	}
});

/*
<tr>
					<td id = "first-td" class = "first-top first-bottom" rowspan = "6">
						<h2 class = "location"></h2>
						<h2>Today</h2>
						<img src = "" id = "main_image">
						<p id = "C_at_the_moment">C</p>
						<p id = "F_at_the_moment">F</p>
						<section>
							<p id = "condition"></p>
							<p id = "C_high_low">C</p>
							<p id = "F_high_low">F</p>
							<ul class = "descriptions">
							</ul>
						</section>
						<section>
							<h3 id = "wind">Wind</h3>
							<ul class = "descriptions">
							</ul>
						</section>
					</td>
					<td class = "last-top">
						<p>Tomorrow</p>
						<img src = "" class = "weather_icon">
					</td>
				</tr>
				<tr>
					<td>
						<p></p>
						<img src = "" class = "weather_icon">
					</td>
				</tr>
				<tr>
					<td>
						<p></p>
						<img src = "" class = "weather_icon">
					</td>
				</tr>
				<tr>
					<td>
						<p></p>
						<img src = "" class = "weather_icon">
					</td>
				</tr>
				<tr>
					<td>
						<p></p>
						<img src = "" class = "weather_icon">
					</td>
				</tr>
				<tr>
					<td class = "last-bottom">
						<p></p>
						<img src = "" class = "weather_icon">
					</td>
				</tr>*/