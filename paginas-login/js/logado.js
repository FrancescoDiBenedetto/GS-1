
let usuario = JSON.parse(localStorage.getItem("usuario-validado"));

if (usuario) {
  const msgWelcome = document.querySelector("#nome-usuario");
  msgWelcome.innerText = usuario.nomeCompleto;

  const userLogout = document.querySelector("#logout");
  userLogout.addEventListener("click", () => {
    localStorage.removeItem("usuario-validado");
    window.location.href = "../index.html";
  });
}else{
    window.location.href = "#";
}
