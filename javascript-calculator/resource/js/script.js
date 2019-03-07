$(document).ready(function() {
  //Array for validation
  var inputs = [""];
  //String that is being outputted
  var totalString;
  //Variables used for validation
  var operators1 = ["+", "-", "/", "*"]; 
  var operators2 = ["."];
  //Makes sure that everything is a number
  var nums = [0,1,2,3,4,5,6,7,8,9];
  
  //Updates everything
  function getValue(input){
    if(operators2.includes(inputs[inputs.length-1]===true && input===".")){
      console.log("Duplicat '.' ");
    }
      //Validation so it doesn't start with an operator
    else if(inputs.length===1 && operators1.includes(input)===false){
      inputs.push(input);
    }
      //If last character was not an operator, add operator to the array
    else if(operators1.includes(inputs[inputs.length-1])===false){
      inputs.push(input);
    }
    else if(nums.includes(Number(input))){
      inputs.push(input);
    }
    update();
  }

  //Updates output to the current value
  function update(){
    totalString = inputs.join("");
    $("#steps").html(totalString);
  }

  //Evaluates update
  function getTotal(){
    totalString = inputs.join("");
    $("#steps").html(eval(totalString));
  }
  //Determines the computation
  $("a").on("click", function(){
    if(this.id === "clear"){
      inputs = [""];
      update();
    }
    else if(this.id === "backspace"){
      inputs.pop();
      update();
    }
    else if(this.id==="equals"){
      getTotal();
    }
    else{
      if(inputs[inputs.length-1].indexOf("+", "-", "/", "*")===-1){
        getValue(this.id);
      }
      else {
        getValue(this.id);
      }
    }
  });
});
