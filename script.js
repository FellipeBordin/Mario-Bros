const form = document.querySelector(".formulario");
const mascara = document.querySelector(".mascara-formulario");
const faleConosco = document.querySelector(".fale-conosco");

function cliqueiNoBotao() {
  form.style.left = "50%";
  form.style.transform = "translateX(-50%)";
  mascara.style.visibility = "visible";
}

faleConosco.addEventListener("click", (event) => {
  event.preventDefault();
  form.style.left = "50%"; 
  form.style.transform = "translateX(-50%)";
  mascara.style.visibility = "visible";
});

mascara.addEventListener("click", () => {
  form.style.left = "-300px";
  form.style.transform = "translateX(0%)";
  mascara.style.visibility = "hidden";
});