"use strict";

let listaUsuarios = [
    {
      nomeCompleto: "Vanessa Yukari Iwamoto",
      emailUsuario: "rm558092@fiap.com.br",
      senhaUsuario: "123456",
    },
    {
      nomeCompleto: "Francesco Di Benedetto",
      emailUsuario: "rm557313@fiap.com.br",
      senhaUsuario: "123456",
    }
  ];
  
  function validacao(input1, input2) {

    const msgStatus = document.querySelector(".validacao");
  
    for (let x = 0; x < listaUsuarios.length; x++) {

      localStorage.setItem("usuario-validado", JSON.stringify(listaUsuarios[x]));
      
      if (listaUsuarios[x].emailUsuario == input1.value && listaUsuarios[x].senhaUsuario == input2.value) {
          msgStatus.setAttribute("class","sucesso");
          msgStatus.innerText = "Entrando...";
  
          setTimeout(()=>{
            msgStatus.setAttribute("class","valida");
            msgStatus.innerText = "";
            window.location.href = "../paginas-login/login.html";
          },3000);
  
          return false;
      }
    }
    msgStatus.setAttribute("class","erro");
    msgStatus.innerText = "E-mail ou senha incorretos!";
  
    setTimeout(()=>{
      msgStatus.setAttribute("class","valida");
      msgStatus.innerText = "";
    },10000);
  
    return false;
  }