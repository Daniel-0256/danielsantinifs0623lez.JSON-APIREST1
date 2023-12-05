const salva = document.querySelector('#salva')
const cancella = document.querySelector('#cancella')
const nomeInput = document.querySelector('#name')
const p = document.querySelector('#p')

salva.addEventListener('click', function(e) {
    e.preventDefault();
    const nome = nomeInput.value;
    localStorage.setItem("input", nome);
    p.innerHTML = nome;
})

window.addEventListener("load", function() {
    const recuperaNome = localStorage.getItem("input");
    if (recuperaNome !== null) {
        p.innerHTML = recuperaNome
    }
})

cancella.addEventListener('click', function() {
    localStorage.removeItem("input");
    p.innerHTML = " ";
})