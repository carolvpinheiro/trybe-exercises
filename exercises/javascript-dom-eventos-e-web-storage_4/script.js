function changeBackground() {
    let color = window.prompt("Qual cor de fundo você gostaria de ter na página?", "");
    localStorage.setItem("color", color);
    let colorStorage = localStorage.getItem("color");
    let colorBody = document.getElementById("color-body");
    colorBody.style.backgroundColor = 'pink';
}
changeBackground();
