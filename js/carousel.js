document.getElementById("nomber");
function fun() {
    document.getElementById("nomber").innerText=x+1 + " слайд из 5";
    if (x < car.length-1) {
      x += 1;}
    document.documentElement.style.setProperty("--yl", x*(-700)+"px");
    document.getElementById("nomber").innerText=x+1 + " слайд из 5";
  }
  function funx() {
    if (x > 0) {
      x -= 1;
    }
    document.documentElement.style.setProperty("--yl", x*(-700)+"px");
    document.getElementById("nomber").innerText=x+1 + " слайд из 5";
  }
  
  
  
  let car = document.getElementsByClassName("def");
  
  let x = 0;
  
  const btnT = document.getElementById("butT");
  btnT.addEventListener("click", funx);
  
  const btnP = document.getElementById("butP");
  btnP.addEventListener("click", fun);

function carta(){
  document.documentElement.style.setProperty("--yl", 0+"px");
  document.getElementById("nomber").innerText=1 + " слайд из 5";
}
const poka32=document.getElementById('out2');
poka32.addEventListener('click', carta)
const po=document.getElementById('out3');
po.addEventListener('click', carta)
  
  