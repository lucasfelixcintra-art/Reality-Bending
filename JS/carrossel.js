let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();
}, 6000);

function nextImage() {
    count++;
    if (count > 3) {
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
}

// Criação da variável "conhecer" (código para procurar a classe e receber o elemento)
const conhecer = document.querySelector('.conhecer');

const myobserver = new IntersectionObserver((entries) => {
    console.log(entries);
})

myobserver.observe(conhecer);
