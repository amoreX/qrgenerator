var qr = require('qr-image');

document.getElementById('submit').addEventListener('click', function () {
    const inputText = document.getElementById('test').value;
    generateQRCode(inputText);
});

function generateQRCode(text) {
   
    const qr_svg = qr.imageSync(text, { type: 'png' }); // Use imageSync for synchronous generation
    document.getElementById('qrpic').src = 'data:image/png;base64,' + qr_svg.toString('base64');

}