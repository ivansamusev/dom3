// 1)створити у index.html кнопку
// на цю кнопку додати прослуховувач дії "click"
// по кліку на цю кнопку має намалюватись один зі списків минулої ДЗ або можете створити новий список.
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const btn = document.getElementById('btn')
const div = document.querySelector('div')


btn.addEventListener('click', onClickBtn)

function onClickBtn(event) {
  const ingredientsList = ingredients.map(item => {
  const newList = document.createElement('li')
    newList.textContent = `${item}`
return newList
  })

  div.append(...ingredientsList)
}
 

// 2) при натисканні на "Escape" має змінюватись фон сторінки на #420042
// при натисканні комбінації клавіш ctrl + alt + S має змінюватись фон сторінки на #303030
// при відпусканні ваших клавіш сторінка має знову ставати білою #ffffff


const escape = document.addEventListener('keydown', onKeyDown)
function onKeyDown({ key, code }) {
  if (code === 'Escape') {
    document.body.style.backgroundColor = "#420042";
  }
}


addEventListener('keydown', keyDown)

function keyDown(elem) {
  if ((elem.altKey || elem.ControlLeft) && elem.code === 'KeyS') {
    document.body.style.backgroundColor = "#303030";
  }
}

addEventListener('keyup', onKeyUp)
function onKeyUp(elem) {
  if ((elem.altKey || elem.ControlLeft) && elem.code === 'KeyS') {
    document.body.style.backgroundColor = "#ffffff";
  }
}