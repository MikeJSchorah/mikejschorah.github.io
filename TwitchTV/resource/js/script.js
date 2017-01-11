$(document).ready(function() {
  
  // Get Free Code Camp status
  $.ajax({
    type: "GET",
    url: "https://api.twitch.tv/kraken/streams/freecodecamp",
    headers:{
      'Client-ID': 'pmkang3m86k4ctct9xz0h189nxgzua'
    },
    success: function(data1) {
      if(data1.stream === null) {
        $("#connection").html("Free Code Camp is disconnected");
      } else {
        $("#connection").html("Welcome to Free Code Camp's TwitchTV!");
      }
    }
  });
    
  // Get the followers
  $.ajax({
    type: "GET",
    url: "https://api.twitch.tv/kraken/users/freecodecamp/follows/channels",
    headers: {
      'Client-ID': 'pmkang3m86k4ctct9xz0h189nxgzua'
    },
    success: function(data2) {

      // Get online accounts
      for (var i = 0; i < data2.follows.length; i++) {  
        var displayName = data2.follows[i].channel.display_name;
        var logo = data2.follows[i].channel.logo;
        var status = data2.follows[i].channel.status;

        // Get offline accounts
        if (logo == null) {
          logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeF9yiuuOJBNO8VpXsVp2VQIpBSTPdLKW6uB3AI-jmSX9G74bX1g";
        }
        
        $("#profile").prepend("<div class = 'row'>" + "<div class='col-sm-4'>" + "<img src='" + logo + "'>" + "</div>" + "<div class='col-sm-4'>" + displayName + "</div>" + "<div class='col-sm-4'>" + status + "</div></div>");
      }
    }
  });

  // Log out followers that don't exist
  var nonexistingFollowers = ['brunofin', 'comster404'];
  
  for (var i = 0; i < nonexistingFollowers.length; i++) {
    $.ajax({
      type: "GET",
      url: "https://api.twitch.tv/kraken/streams/" + nonexistingFollowers[i],
      headers: {
        'Client-ID': 'pmkang3m86k4ctct9xz0h189nxgzua'
      },
      error: function(data3) {
        var logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeF9yiuuOJBNO8VpXsVp2VQIpBSTPdLKW6uB3AI-jmSX9G74bX1g";
        var displayName = data3.statusText;
        console.log(data3.statusText);
        var status = data3.status;
        $("#profile").prepend("<div class='row'>" + "<div class='col-sm-4'>" + "<img src='" + logo + "'>" + "</div>" + "<div class='col-sm-4'>" + displayName + "</div>" + "<div class='col-sm-4'>" + status + "</div></div>");
      }
    });
  }
  
});
