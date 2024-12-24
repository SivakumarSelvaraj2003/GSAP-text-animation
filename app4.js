 gsap.registerPlugin(TextPlugin);
const textAnimation=document.getElementsByClassName("text");
const buttonClick=document.querySelector(".btn");
const timeline=gsap.timeline({paused:true});
timeline.to(textAnimation, {
  duration: 4,
  text: {
    value: "My Name Is Sivakumar &#128526;",
  },
})
.to(textAnimation, {
  duration: 4,
  text: {
    value: "I Am Final Year CSE Student &#127891;",
 
  },
})
.to(textAnimation, {
  duration: 3,
  text: {
    value: "I Like Creating Website &#128525;",          
 
  },
  
})
.to(textAnimation, {
  duration: 4,
  text: {
    value: "So, I Am Learning Frontend Development &#129488;",
    
  },
})
.to(textAnimation, {
  duration: 3,
  text: {
    value: "Thankyou! &#129321;",
   
  },
  
}); 

buttonClick.addEventListener("click",()=>{
  timeline.restart();
});


   /* const colors = ["black", "red","gray","salmon", "white"];
  const bodyElement = document.getElementsByTagName("body")[0];

    let colorIndex = 0;
    function changeBackgroundColor() {
      bodyElement.style.backgroundColor = colors[colorIndex]; 
      colorIndex = (colorIndex + 1) % colors.length; 
    }

    setInterval(changeBackgroundColor, 2000); */



