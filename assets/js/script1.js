document.querySelector("#imagen").addEventListener("click", () => {
  if (imagen.style.border === "") {
    imagen.style.border = "2px solid red";
  } else {
    imagen.style.border = "";
  }
});
