document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".btn");

  if (button) {
    button.addEventListener("click", () => {
      alert("Em breve você poderá acessar mais informações sobre os serviços da AgroCity!");
    });
  }
});