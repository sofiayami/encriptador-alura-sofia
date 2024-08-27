// script.js
document.getElementById('encrypt-btn').addEventListener('click', function() {
    let inputText = document.getElementById('input-text').value;
    let encryptedText = encryptText(inputText);
    document.getElementById('output-message').innerText = encryptedText;
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
    let inputText = document.getElementById('input-text').value;
    let decryptedText = decryptText(inputText);
    document.getElementById('output-message').innerText = decryptedText;
});

function encryptText(text) {
    // Ejemplo simple de encriptación: invertir el texto
    return text.split('').reverse().join('');
}

function decryptText(text) {
    // Desencriptar el texto invirtiendo de nuevo
    return text.split('').reverse().join('');
}