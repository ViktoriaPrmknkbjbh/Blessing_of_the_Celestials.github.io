const form1=document.forms.formOne;
//По нажатию кнопки если все данные верны , сохраняет их.
const div = document.getElementById('myDiv');
form1.addEventListener("submit", (event) =>{
    event.preventDefault();
    let result= "";
    let test=true;
    if(form1.log.validity.valid){
        form1.log.labels[0].innerText="";
        result +="Имя: "+ form1.log.value+`\n`;
    }else {
        form1.log.labels[0].innerText = "Неверный ввод, логин должен состоять из русских букв и цифр.";
        test = false;
      }
    if(form1.date.validity.valid){
        form1.date.labels[0].innerText="";
        result +="Дата рожденя: "+ form1.date.value+`\n`;
    }
    else {
        form1.date.labels[0].innerText = "Неверный ввод.";
        test = false;
      }
      result+="Пол: "+ form1.pol.value
      if(test){
        document.documentElement.style.setProperty("--el", -1000 + "px");
        document.getElementById("logpol").innerText=form1.log.value
        document.getElementById("out1").innerText=result


    }

})

function removeClass() {
    
    div.classList.remove('no');
    document.documentElement.style.setProperty("--el", -2000 + "px");
    const button= document.getElementById('butt1');
    button.classList.add("red")
}

const but=document.getElementById('but');
but.addEventListener('click', removeClass)

function pokapoka(){
form1.reset()
document.documentElement.style.setProperty("--el", 0 + "px");
div.classList.add('no');

}


const poka=document.getElementById('out2');
poka.addEventListener('click', pokapoka)
const pok=document.getElementById('out3');
pok.addEventListener('click', pokapoka)