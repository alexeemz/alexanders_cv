/* Global $  */

function ShowCommunication() {
  document.getElementById("Communication").style.display="inline-block";
  document.getElementById("Communicate").style.display="none";
  document.getElementById("spaceFill").style.display="none";
  document.getElementById("Computer").style.display="none";
  document.getElementById("ShowComp").style.display="inline-block";
  document.getElementById("Organisation").style.display="none";
  document.getElementById("ShowOrganise").style.display="inline-block";
  document.getElementById("skillsIntro").style.display="none";
}

function ShowComputer() {
  document.getElementById("Computer").style.display="inline-block";
  document.getElementById("ShowComp").style.display="none";
  document.getElementById("spaceFill").style.display="none";
  document.getElementById("Communication").style.display="none";
  document.getElementById("Communicate").style.display="inline-block";
  document.getElementById("Organisation").style.display="none";
  document.getElementById("ShowOrganise").style.display="inline-block";
  document.getElementById("skillsIntro").style.display="none";
}

function ShowOrganisation(){
  document.getElementById("Organisation").style.display="inline-block";
  document.getElementById("Communication").style.display="none";
  document.getElementById("Communicate").style.display="inline-block";
  document.getElementById("spaceFill").style.display="none";
  document.getElementById("Computer").style.display="none";
  document.getElementById("ShowComp").style.display="inline-block";
  document.getElementById("ShowOrganise").style.display="none";
  document.getElementById("skillsIntro").style.display="none";
}

function ScrollToSkills(){
document.querySelector('.KeySkills').scrollIntoView({
  behavior: 'smooth',
  block: 'start'
}
);
}

function ScrollToIntro(){
  document.querySelector('.pagetitle').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  }
  );
}

function ScrollToExperience(){
  document.querySelector('.Experience').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

function ScrollToEducation(){
  document.querySelector('.Education').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

function ShowVolunteerExperience(){
  document.getElementById("workExperience1").style.display="none";
  document.getElementById("workExperience2").style.display="none";
  document.getElementById("workExperience3").style.display="none";
  document.getElementById('moreExp').style.display = "none";
  document.getElementById("workExperience4").style.display="none";
  document.getElementById("VolunteerExperience1").style.display="inline-block";
    document.getElementById("VolunteerExperience2").style.display="inline-block";
      document.getElementById("VolunteerExperience3").style.display="inline-block";
      document.getElementById("WorkExperience").style.color="white";
      document.getElementById("Volunteering").style.color="#e8e176";
      document.getElementById("backExp").style.display="none";
}

function ShowWorkExperience(){
  document.getElementById("workExperience1").style.display="inline-block";
  document.getElementById("workExperience2").style.display="inline-block";
  document.getElementById("workExperience3").style.display="inline-block";
  document.getElementById("moreExp").style.display="inline-block";
  document.getElementById("VolunteerExperience1").style.display="none";
    document.getElementById("VolunteerExperience2").style.display="none";
      document.getElementById("VolunteerExperience3").style.display="none";
      document.getElementById("WorkExperience").style.color="#e8e176";
      document.getElementById("Volunteering").style.color="white";
      document.getElementById("backExp").style.display="none";
}

function showMoreExp(){
  document.getElementById("workExperience1").style.display="none";
  document.getElementById("workExperience2").style.display="none";
  document.getElementById("workExperience3").style.display="none";
  document.getElementById("moreExp").style.display="none";
  document.getElementById("backExp").style.display="inline-block";
  document.getElementById("workExperience4").style.display="inline-block"
  document.getElementById("VolunteerExperience1").style.display="none";
  document.getElementById("VolunteerExperience2").style.display="none";
  document.getElementById("VolunteerExperience3").style.display="none";
}

function showLessExp(){
  document.getElementById("workExperience1").style.display="inline-block";
  document.getElementById("workExperience2").style.display="inline-block";
  document.getElementById("workExperience3").style.display="inline-block";
  document.getElementById("moreExp").style.display="inline-block";
  document.getElementById("backExp").style.display="none";
  document.getElementById("workExperience4").style.display="none";
  document.getElementById("VolunteerExperience1").style.display="none";
  document.getElementById("VolunteerExperience2").style.display="none";
  document.getElementById("VolunteerExperience3").style.display="none";
}
