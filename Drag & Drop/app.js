const item = document.getElementById("item");
const placeholders = document.getElementsByClassName("placeholder");

for (const element of placeholders) {
  element.addEventListener("dragover", dragOver);
  element.addEventListener("dragenter", dragEnter);
  element.addEventListener("dragleave", dragLeave);
  element.addEventListener("drop", dragDrop);
}

item.addEventListener("dragstart", dragStart);
item.addEventListener("dragend", dragEnd);

function dragStart(event) {
  event.target.classList.add("hold");
  setTimeout(() => event.target.classList.add("hide"), 0);
}

function dragEnd(event) {
  event.target.classList.remove("hold");
  event.target.classList.remove("hide");
}

function dragOver(event) {
  event.preventDefault();
}

function dragEnter(event) {
  event.target.classList.add("hovered");
}

function dragLeave(event) {
  event.target.classList.remove("hovered");
}

function dragDrop(event) {
  event.target.classList.remove("hovered");
  event.target.append(item);
}
