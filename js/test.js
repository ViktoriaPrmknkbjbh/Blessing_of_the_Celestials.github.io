//Подсчитывает баллы за тест 
const form2 = document.forms.h;
const out=document.getElementById("jj");
const dvop1=document.getElementById("divvop1");
const dvop2=document.getElementById("divvop2");
const dvop3=document.getElementById("divvop3");
const dvop4=document.getElementById("divvop4");
const dvop5=document.getElementById("divvop5");
const dvop6=document.getElementById("divvop6");
const dvop7=document.getElementById("divvop7");
const dvop8=document.getElementById("divvop8");

form2.addEventListener("submit", (event) =>{
    event.preventDefault();
    let result2=0;
  if(form2.v1.validity.valid){
    result2+=1
    dvop1.innerText="Правильный ответ"
    dvop1.classList.add("plus")
    dvop1.style.color ="green";
  }else{
    dvop1.style.color = "red";
    dvop1.innerText = "Вы не правильно ответили, верный ответ - Эмин"; 
  }
  if(form2.v4.validity.valid){
    result2+=1
    dvop4.innerText="Правильный ответ"
    dvop4.classList.add("plus")
    dvop4.style.color ="green";
  }else{
    dvop4.style.color = "red";
    dvop4.innerText = "Вы не правильно ответили, верный ответ - Поветрие ликов"; 
  }
  if(form2.v8.validity.valid){
    result2+=1
    dvop8.innerText="Правильный ответ"
    dvop8.classList.add("plus")
    dvop8.style.color ="green";
  }else{
    dvop8.style.color = "red";
    dvop8.innerText = "Вы не правильно ответили, верный ответ - Баньюэ"; 
  }
  if(Number(h.v2.value)==1){
    result2+=1
    dvop2.innerText="Правильный ответ"
    dvop2.classList.add("plus")
    dvop2.style.color ="green";
  }else{
    dvop2.style.color ="red";
    dvop2.innerText = "Вы не правильно ответили, верный ответ - Фансинь"; 
}
if(Number(h.v3.value)==1){
    result2+=1
    dvop3.innerText="Правильный ответ"
    dvop3.classList.add("plus")
    dvop3.style.color ="green";
  }else{
    dvop3.style.color ="red";
    dvop3.innerText = "Вы не правильно ответили, верный ответ - Прах"; 
}
if(Number(h.v5.value)==1){
    result2+=1
    dvop5.innerText="Правильный ответ"
    dvop5.classList.add("plus")
    dvop5.style.color ="green";
  }else{
    dvop5.style.color ="red";
    dvop5.innerText = "Вы не правильно ответили, верный ответ - Призрачный город"; 
}
if(Number(h.v6.value)==1){
    result2+=1
    dvop6.innerText="Правильный ответ"
    dvop6.classList.add("plus")
    dvop6.style.color ="green";
  }else{
    dvop6.style.color ="red";
    dvop6.innerText = "Вы не правильно ответили, верный ответ - 18"; 
}
if(Number(h.v7.value)==1){
    result2+=1
    dvop7.innerText="Правильный ответ"
    dvop7.classList.add("plus")
    dvop7.style.color ="green";
  }else{
    dvop7.style.color ="red";
    dvop7.innerText = "Вы не правильно ответили, верный ответ - Лан Ин"; 
}
document.getElementById("i").classList.remove("no");
out.innerText= "Вы набрали: "+result2+" из 8"
document.getElementById("out4").innerText="В последнем тесте вы набрали: "+ result2;

}
)
function del(){
    h.reset()
    dvop1.innerText=""
    dvop2.innerText=""
    dvop3.innerText=""
    dvop4.innerText=""
    dvop5.innerText=""
    dvop6.innerText=""
    dvop7.innerText=""
    dvop8.innerText=""
    out.innerText=""
    document.getElementById("out4").innerText=""
    document.getElementById("i").classList.add("no");
}
const del1=document.getElementById("i");
del1.addEventListener("click", del)
function del2(){
    h.reset()
    dvop1.innerText=""
    dvop2.innerText=""
    dvop3.innerText=""
    dvop4.innerText=""
    dvop5.innerText=""
    dvop6.innerText=""
    dvop7.innerText=""
    dvop8.innerText=""
    out.innerText=""
    document.getElementById("out4").innerText="Вы не прошли ни одного теста"
    document.getElementById("i").classList.add("no");
}

const poka1=document.getElementById('out2');
poka1.addEventListener('click', del2)
const poc=document.getElementById('out3');
poc.addEventListener('click', del2)