const mensaje = document.getElementById("verificar");

document.getElementById("btnVerificar").addEventListener("click", () => {
  const sticker1 = document.getElementById("sticker1").value;
  const sticker2 = document.getElementById("sticker2").value;
  const sticker3 = document.getElementById("sticker3").value;
  let totalSticker = Number(sticker1) + Number(sticker2) + Number(sticker3);

  if (totalSticker > 10) {
    mensaje.innerText = "Llevas demasiados stickers";
  } else {
    mensaje.innerText = `Llevas ${totalSticker} stickers`;
  }
});
