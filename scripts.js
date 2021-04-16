// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){
  const takeOff = document.getElementById("takeoff");
  const land = document.getElementById("landing");
  const abortMission = document.getElementById("missionAbort");
  const status = document.getElementById("flightStatus");
  const shuttleDisplay = document.getElementById("shuttleBackground");
  const shuttleHeight = document.getElementById("spaceShuttleHeight");
    
  const rocketImage = document.getElementById("rocket");
  const buttonUp = document.getElementById("positionUp");
  const buttonDown = document.getElementById("positionDown");
  const buttonRight = document.getElementById("positionRight");
  const buttonLeft = document.getElementById("positionLeft");
    
  rocketImage.style.position = "absolute";
  rocketImage.style.bottom = "0px";
  rocketImage.style.left = "0px";

  
  takeOff.addEventListener("click", function(){
    window.confirm("Confirm that the shuttle is ready for takeoff.")
    if(window.confirm){
      status.innerHTML = "Shuttle in flight.";
      shuttleDisplay.style.backgroundColor = "blue";
      shuttleHeight.innerHTML= "10000";
    }
    return false;
  })
      
  land.addEventListener("click", function(){
    if(window.confirm){
      window.alert("The shuttle is landing. Landing gear engaged.")
      status.innerHTML = "The shuttle has landed.";
      shuttleDisplay.style.backgroundColor = "green";
      shuttleHeight.innerHTML = "0";
    }
    return false;
  })

  abortMission.addEventListener("click", function(){
    window.confirm("Confirm that you want to abort the mission.")
    if(window.confirm){
      status.innerHTML = "Mission aborted.";
      shuttleDisplay.style.backgroundColor = "green";
      shuttleHeight.innerHTML = "0";
    }
    return false;
  })

  buttonUp.addEventListener("click", function(){
    rocketImage.style.bottom = parseInt(rocketImage.style.bottom )+ 10 + "px";
    shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
  })
  buttonDown.addEventListener("click", function(){
    rocketImage.style.bottom = parseInt(rocketImage.style.bottom ) - 10 + "px";
    shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
  })
  buttonRight.addEventListener("click", function(){
    rocketImage.style.left = parseInt(rocketImage.style.left ) - 10 + "px";
  })
  buttonLeft.addEventListener("click", function(){
    rocketImage.style.left = parseInt(rocketImage.style.left ) + 10 + "px";
  })
    
 


}

window.addEventListener("load", init);
  

  