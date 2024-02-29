fetch('/Files/CV.json')
  .then((response) => response.json())
  .then((data) => {
    generateCV(data);
  })
  .catch((error) => console.error("Error: ", error));

function generateCV(data) {
  const education = data.education;
  const work = data.work;
  const skills = data.skills;

  const educationList = document.createElement("ul");
  education.forEach((education) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${education.name} - ${education.program} (${
      education.graduationyear
    })`;
    educationList.appendChild(listItem);
  });

  const workList = document.createElement("ul");
  work.forEach((work) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${work.company} - ${work.title} - (${work.year})`;
    workList.appendChild(listItem);
  });

  const skillsList = document.createElement("ul");
  skills.forEach((skills) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${skills.name}`;
    skillsList.appendChild(listItem);
  });

  document.getElementById("education").appendChild(educationList);
  document.getElementById("work").appendChild(workList);
  document.getElementById("skills").appendChild(skillsList);
}


//Modal event
let pressedKeys = "";
  window.addEventListener("keydown", function(event) {    
    pressedKeys += event.key;

    if (pressedKeys.includes("1337")) {
      
      let modal = document.getElementById("myModal");
      modal.style.display = "block";

      let youtubeVideo = document.getElementById("youtubeVideo");
      youtubeVideo.src = "https://www.youtube.com/embed/GIhcL8K4shg?si=gGD2ErPVphhk64XL&amp;start=21&autoplay=1";

      pressedKeys = "";
    }
  });

  let closeBtn = document.getElementsByClassName("close")[0];
  closeBtn.onclick = function() {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";

    let youtubeVideo = document.getElementById("youtubeVideo");
    youtubeVideo.src = ""; 
  };


  //ODD-Event

  let isOrignalColor = true;
  let oddPic = document.querySelector('#odd-part');

  let savedColor = localStorage.getItem('savedBackgroundColor');
  if(savedColor){
    document.body.style.backgroundColor = savedColor;
    isOrignalColor = false;
  }

  oddPic.addEventListener('click', function(){
    if(isOrignalColor){
      let randomColor = getRandomColor();
      document.body.style.backgroundColor = randomColor;
      localStorage.setItem('savedBackgroundColor', randomColor);
    }
    else{
      document.body.style.backgroundColor = '';
      localStorage.removeItem('savedBackgroundColor');
    }
    isOrignalColor = !isOrignalColor;
  })

  function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i <6; i++){
      color += letters[Math.floor(Math.random()*16)]
    }

    return color;
  }