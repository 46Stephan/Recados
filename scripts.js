document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Capturar os valores dos campos de e-mail e senha
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Imprimir os valores dos campos de e-mail e senha
    console.log("E-mail:", email);
    console.log("Senha:", password);

    // Verificar se os campos de e-mail e senha estão preenchidos
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  });
});
