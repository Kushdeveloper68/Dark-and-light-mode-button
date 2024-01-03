// element selection
let body = document.querySelector("body");
let btn = document.querySelector(".circle");
let h5 = document.querySelector("h5");

//function of changing theme
let backgroundC = "white";
function change(){
  if (backgroundC == "white") {
    body.style.backgroundColor  = "black";
    btn.style.marginLeft = '90px';
    h5.style.color = "white"
    backgroundC = "black";
    
  } else {
    body.style.backgroundColor = "white";
    btn.style.marginLeft = '5px';
    h5.style.color = "black"
    backgroundC = "white";
  }
}
