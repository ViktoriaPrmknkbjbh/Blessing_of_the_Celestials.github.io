// Функция для отображения описания термина с картинкой
function showDescription(term, description, imageUrl) {
  document.getElementById("description").innerHTML = 
      "<h2>" + term + "</h2>" + 
      "<p>" + description + "</p>" + 
      "<img src='" + imageUrl + "' alt='" + term + "' />";
}

// Функция для фильтрации терминов по поисковому запросу
function filterTerms() {
  const searchInput = document.getElementById("search").value.toLowerCase();
  const termItems = document.getElementsByClassName("term-item");

  for (let i = 0; i < termItems.length; i++) {
      const termText = termItems[i].textContent.toLowerCase();
      if (termText.includes(searchInput)) {
          termItems[i].style.display = "block";
      } else {
          termItems[i].style.display = "none";
      }
  }
}
function resetPage() {
    document.getElementById("search").value = ""; // Очищаем поле поиска
    const termItems = document.getElementsByClassName("term-item");
    
    // Показываем все термины
    for (let i = 0; i < termItems.length; i++) {
        termItems[i].style.display = "block";
    }

    // Очищаем описание
    document.getElementById("description").innerHTML = "";
}

const poka3=document.getElementById('out2');
poka3.addEventListener('click', resetPage)
const poka34=document.getElementById('out3');
poka34.addEventListener('click', resetPage)
