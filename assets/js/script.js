function sendMail() {
    var tempParams = {
        nome:document.getElementById("nome").value,
        oggetto:document.getElementById("oggetto").value,
        email:document.getElementById("email").value,
        numero:document.getElementById("numero").value,
        messaggio:document.getElementById("messaggio").value,
    };

    emailjs.send('service_46ko3bf','template_qijedsl',tempParams)
    .then(function(response) {
        alert('La Mail è stata inviata correttamente!', response.status, response.text);
     }, function(err) {
        alert('Error, qualcosa è andato storto...', err);
     });
}