const mensaje = document.getElementById("mensaje");

document.querySelector("#btnValidar").addEventListener("click", () => {
  const num1 = document.querySelector("#numero1").value;
  const num2 = document.querySelector("#numero2").value;
  const num3 = document.querySelector("#numero3").value;
  let password = num1 + num2 + num3;

  if (Number(password) === 911) {
    mensaje.innerHTML = "Password 1 correcto";
  } else if (Number(password) === 714) {
    mensaje.innerHTML = "Password 2 correcto";
  } else {
    mensaje.innerHTML = "Password incorrecto";
  }
});
