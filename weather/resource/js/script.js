$(document).ready(function() {
      
var lat;
  var long;
  $.getJSON("http://ip-api.com/json", function(data2) {
    lat = data2.lat;
    long = data2.lon;
    
    // Declare and assign API key   
    var api = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=722e7954b04ed331cd45c1033c51e22b'

        
// JSON call for API
    $.getJSON(api, function(data) {
      var weather = data.weather[0].description;
      var kelvin = data.main.temp;
      var city = data.name;
      console.log(city);
          

// Temperature conversion formulas 
      var fahrenheit = (kelvin * (9 / 5) - 459.67).toFixed(0);
      var celsius = (kelvin - 273).toFixed(0);

          
// Display weather on buttons
      $("#weather").html(weather);
      $("#fahrenheit").html(fahrenheit + " &#8457;");

          
// Toggle between Fahrenheit and Celsius
      var conditionTrade = true;
      $("#fahrenheit").click(function() {
        if (conditionTrade === false) {
          $("#fahrenheit").html(fahrenheit + " &#8457;");
          conditionTrade = true;
        } else {
          $("#fahrenheit").html(celsius + " &#8451;");
          conditionTrade = false;
        }
      })
          
          
// See different background image depending on weather    
      if (fahrenheit > 70) {
        $('body').css('background-image', 'url(http://images.freeimages.com/images/previews/743/boiling-eggs-1559351.jpg');
      } else if (fahrenheit > 60) {
        $('body').css('background-image', 'url(http://images.freeimages.com/images/previews/32e/hot-water-1553622.jpg)');
      } else if (fahrenheit > 40) {
        $('body').css('background-image', 'url(http://images.freeimages.com/images/previews/074/cold-1393397.jpg)');
      } else {
        $('body').css('background-image', 'url(http://images.freeimages.com/images/previews/38d/freeze-1406444.jpg)')
      }
      
    });
  }
    
  );


   
});
