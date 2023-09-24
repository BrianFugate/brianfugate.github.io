//*******************************************************************************************
// 
// $Workfile: main.js $
// $Author: Brian Fugate $ 
// 
// Codecademy Full-Stack Engineer Course
// Building Interactive Websites Portfolio Project: Personal Portfolio Website
//
//*******************************************************************************************

// function to play animation to move element
function move(arg) {
    if (screen.width > 700) {
        document.querySelector(arg).className = "";  //remove animation class
        
        // repaint document twice to get animation effects to play when animation
        // class is re-added
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                document.querySelector(arg).className = "animation";
            });
        })
    }
}  

// adding event listeners to detect clicks in nav bar
document.getElementById("aboutLink").addEventListener("click", () => move("#about h2"));
document.getElementById("projectsLink").addEventListener("click", () => move("#projects h2"));
document.getElementById("skillsLink").addEventListener("click", () => move("#skills h2"));