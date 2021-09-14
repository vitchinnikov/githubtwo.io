const txt = document.querySelector(".txt");
const place__task = document.querySelector(".place__task");
const btn__NewBlock = document.querySelector(".btn__NewBlock");

const moduleCreation = () => {
  txt.style.height = '34px';
  if (txt.value === "") return;
  let fieldData = txt.value;
  txt.value = "";

  let btn_success = document.createElement("button");
  btn_success.className = "btn_success";
  btn_success.innerHTML = "Выполнено";

  let btn_delite = document.createElement("button");
  btn_delite.className = "btn_delite";
  btn_delite.innerHTML = "Удалить";

  let div = document.createElement("div");
  div.className = "task";

  let box__text = document.createElement("div");
  box__text.className = "box__text";

  let box__btn = document.createElement("div");
  box__btn.className = "box__btn";

  let text__task = document.createElement("p");
  text__task.className = "text__task";

  let fd = document.createTextNode(fieldData);
  text__task.appendChild(fd);
  box__text.appendChild(text__task);
  div.appendChild(box__text);
  box__btn.appendChild(btn_success);
  div.appendChild(box__btn);
  box__btn.appendChild(btn_delite);
  div.appendChild(box__btn);

  place__task.appendChild(div);

  btn_delite.addEventListener("click", (e) => {
    place__task.removeChild(div)
  })
  btn_success.addEventListener("click", (e) => {
    div.classList.toggle("taskAkv")
  })
}

btn__NewBlock.addEventListener("click", moduleCreation);


let tx = document.getElementsByTagName('textarea'); //РАСТЯГИВАЕМ_textarea

for (let i = 0; i < tx.length; i++) {

  tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');

  tx[i].addEventListener("input", OnInput, false);

}

function OnInput() {

  this.style.height = '30px';

  this.style.height = (this.scrollHeight) + 'px';

}