const tom1= document.getElementById('card1');
const tom2= document.getElementById('card2');
const tom3= document.getElementById('card3');
const tom4= document.getElementById('card4');
const tom5= document.getElementById('card5');
const tom6= document.getElementById('card6');
function Tom1() {
    document.documentElement.style.setProperty("--ol", 0 + "px"); 
    tom1.classList.add("red1")
    tom2.classList.remove("red1")
    tom3.classList.remove("red1")
    tom4.classList.remove("red1")
    tom5.classList.remove("red1")
    tom6.classList.remove("red1")
}

const but1=document.getElementById('card1');
but1.addEventListener('click', Tom1)

function Tom2() {
    document.documentElement.style.setProperty("--ol", -900 + "px"); 
    tom1.classList.remove("red1")
    tom2.classList.add("red1")
    tom3.classList.remove("red1")
    tom4.classList.remove("red1")
    tom5.classList.remove("red1")
    tom6.classList.remove("red1")
}

const but2=document.getElementById('card2');
but2.addEventListener('click', Tom2)

function Tom3() {
    document.documentElement.style.setProperty("--ol", -1800 + "px"); 
    tom1.classList.remove("red1")
    tom2.classList.remove("red1")
    tom3.classList.add("red1")
    tom4.classList.remove("red1")
    tom5.classList.remove("red1")
    tom6.classList.remove("red1")
}

const but3=document.getElementById('card3');
but3.addEventListener('click', Tom3)

function Tom4() {
    document.documentElement.style.setProperty("--ol", -2700 + "px"); 
    tom1.classList.remove("red1")
    tom2.classList.remove("red1")
    tom3.classList.remove("red1")
    tom4.classList.add("red1")
    tom5.classList.remove("red1")
    tom6.classList.remove("red1")
}

const but4=document.getElementById('card4');
but4.addEventListener('click', Tom4)

function Tom5() {
    document.documentElement.style.setProperty("--ol", -3600 + "px"); 
    tom1.classList.remove("red1")
    tom2.classList.remove("red1")
    tom3.classList.remove("red1")
    tom4.classList.remove("red1")
    tom5.classList.add("red1")
    tom6.classList.remove("re1d")
}

const but5=document.getElementById('card5');
but5.addEventListener('click', Tom5)

function Tom6() {
    document.documentElement.style.setProperty("--ol", -4500 + "px"); 
    tom1.classList.remove("red1")
    tom2.classList.remove("red1")
    tom3.classList.remove("red1")
    tom4.classList.remove("red1")
    tom5.classList.remove("red1")
    tom6.classList.add("red1")
}

const but6=document.getElementById('card6');
but6.addEventListener('click', Tom6)

const poka2=document.getElementById('out2');
poka2.addEventListener('click', Tom1)
const poka24=document.getElementById('out3');
poka24.addEventListener('click', Tom1)