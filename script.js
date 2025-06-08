const nuotraukos = [
  "img/1.jpeg",
  "img/2.jpeg",
  "img/3.jpeg",
  "img/4.jpeg",
"img/5.jpeg",
"img/6.jpeg",
"img/7.jpeg",
"img/8.jpeg",
"img/9.jpeg",
"img/10.jpeg",
"img/11.jpeg",
"img/12.jpeg",
"img/13.jpeg",];

let indeksas = 0;
const imgElement = document.getElementById("nuotrauka");
const mygtukas = document.getElementById("mygtukas");

mygtukas.addEventListener("click", () => {
  indeksas++;
  if (indeksas < nuotraukos.length) {
    imgElement.src = nuotraukos[indeksas];
    mygtukas.textContent = `Kita nuotrauka (${indeksas + 1}/${nuotraukos.length})`;
  } else {
    mygtukas.disabled = true;
    mygtukas.textContent = "Daugiau nuotraukų nėra";
  }
});