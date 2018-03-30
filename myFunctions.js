/* Global $  */

function ShowCommunication() {
  document.getElementById("Communication").style.display="inline-block";
  document.getElementById("Communicate").style.display="none";
  document.getElementById("spaceFill").style.display="none";
  document.getElementById("Computer").style.display="none";
  document.getElementById("ShowComp").style.display="inline-block";
  document.getElementById("Organisation").style.display="none";
  document.getElementById("ShowOrganise").style.display="inline-block"; 
}

function ShowComputer() {
  document.getElementById("Computer").style.display="inline-block";
  document.getElementById("ShowComp").style.display="none";
  document.getElementById("spaceFill").style.display="none";
  document.getElementById("Communication").style.display="none";
  document.getElementById("Communicate").style.display="inline-block";
  document.getElementById("Organisation").style.display="none";
  document.getElementById("ShowOrganise").style.display="inline-block"; 
}

function ShowOrganisation(){
  document.getElementById("Organisation").style.display="inline-block";
  document.getElementById("Communication").style.display="none";
  document.getElementById("Communicate").style.display="inline-block";
  document.getElementById("spaceFill").style.display="none";
  document.getElementById("Computer").style.display="none";
  document.getElementById("ShowComp").style.display="inline-block";
  document.getElementById("ShowOrganise").style.display="none";
  
}