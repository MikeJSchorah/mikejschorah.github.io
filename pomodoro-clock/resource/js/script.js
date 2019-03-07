$(document).ready(function(){
  var count = parseInt($("#num").html());
  var breakTime = parseInt($("#breakTime").html());
  $("#stop").hide();
  $("#start").click(function(){
  var counter = setInterval(timer, 1000);
  count *= 60;
  breakTime*=60;
  
  // Session time countdown
  function timer(){
    $("#start, #subtract5, #add5, #subtract5Break, #add5Break, #breakTime, #time1, #time2").hide();
    $("#sessionTime").show();
    $("#sessionTime").html("Session Time:");
    count -= 1;
    if(count === 0){
      clearInterval(counter);
      var startBreak= setInterval(breakTimer, 1000);
      $("#num").hide();
    }
    if(count % 60 >= 10){
      $("#num").html(Math.floor(count/60)+":"+count%60);
    }
    else {
      $("#num").html(Math.floor(count/60)+":"+"0"+count%60);
    }
    
    // Break time countdown    
    function breakTimer(){
      $("#sessionTime").html("Break Time: ");
      $("#breakTime").show();
     
      $("#sessionTime").show();
      breakTime -= 1;
      if(breakTime=== 0){
        clearInterval(startBreak);
        $("#stop").show();
        $("#breakTime, #sessionTime").hide();
      }
      if(breakTime%60>=10) {
        $("#breakTime").html(Math.floor(breakTime/60)+":"+breakTime%60);
      } else {
        $("#breakTime").html(Math.floor(breakTime/60)+":"+"0"+breakTime%60);
      }
    }
  }
});
  
  // Decrease session time
  $("#subtract5").click(function(){
    if(count>5){
      count -= 5;
      $("#num").html(count);
    }
  });

  // Increase session time
  $("#add5").click(function(){
    count += 5;
    $("#num").html(count);
  });

  // Decrease break time
  $("#subtract5Break").click(function(){
    if(breakTime>5){
      breakTime -= 5;
      $("#breakTime").html(breakTime);
    }
  });

  // Increase break time
  $("#add5Break").click(function(){
    breakTime += 5;
    $("#breakTime").html(breakTime);
  });

  // Stop button
  $("#stop").click(function(){
    count=25;
    breakTime=25;
    $("#num").html(count);
    $("#breakTime").html(breakTime);
    $("#start, #subtract5, #add5, #subtract5Break, #add5Break, #breakTime, #num, #time1, #time2").show();
    $("#stop, #sessionTime").hide();
  });
   
});
