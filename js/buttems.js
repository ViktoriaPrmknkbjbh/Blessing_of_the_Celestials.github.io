const button1= document.getElementById('butt1');
const button2= document.getElementById('butt2');
const button3= document.getElementById('butt3');
const button4= document.getElementById('butt4');
const button5= document.getElementById('butt5');
function Description() {
    document.documentElement.style.setProperty("--el", -2000 + "px"); 
    button1.classList.add("red")
    button2.classList.remove("red")
    button3.classList.remove("red")
    button4.classList.remove("red")
    button5.classList.remove("red")
}

const bt1=document.getElementById('butt1');
bt1.addEventListener('click', Description)

function Dictionary() {
    document.documentElement.style.setProperty("--el", -3000 + "px");
    button1.classList.remove("red")
    button2.classList.add("red")
    button3.classList.remove("red")
    button4.classList.remove("red")
    button5.classList.remove("red")
}

const bt2=document.getElementById('butt2');
bt2.addEventListener('click', Dictionary)

function Gallery() {
    document.documentElement.style.setProperty("--el", -4000 + "px");
    button1.classList.remove("red")
    button2.classList.remove("red")
    button3.classList.add("red")
    button4.classList.remove("red")
    button5.classList.remove("red")
}

const bt3=document.getElementById('butt3');
bt3.addEventListener('click', Gallery)

function Test() {
    document.documentElement.style.setProperty("--el", -5000 + "px");
    button1.classList.remove("red")
    button2.classList.remove("red")
    button3.classList.remove("red")
    button4.classList.add("red")
    button5.classList.remove("red")
}

const bt4=document.getElementById('butt4');
bt4.addEventListener('click', Test)

function DPersonalaccount() {
    document.documentElement.style.setProperty("--el", -6000 + "px");
    button1.classList.remove("red")
    button2.classList.remove("red")
    button3.classList.remove("red")
    button4.classList.remove("red")
    button5.classList.add("red")
}

const bt5=document.getElementById('butt5');
bt5.addEventListener('click', DPersonalaccount)

function remove(){
    button1.classList.remove("red")
    button2.classList.remove("red")
    button3.classList.remove("red")
    button4.classList.remove("red")
    button5.classList.remove("red")
}

const poka11=document.getElementById('out2');
poka11.addEventListener('click', remove)
const poka111=document.getElementById('out3');
poka111.addEventListener('click', remove)