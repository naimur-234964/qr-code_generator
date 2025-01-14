const qrInput = document.getElementById("inputBox");
const qrImg = document.getElementById("qrImage");
const qrButton = document.getElementById("submitInput");

console.log(qrButton, qrImg, qrInput);

qrButton.addEventListener('click', () => {
    const inputValue = qrInput.value;
    console.log(inputValue);

    if (inputValue === '') {
        alert("Please enter an url or text");
    } else {
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${inputValue}`;
        qrImg.alt = `QR Code for ${inputValue}`;
    }

})