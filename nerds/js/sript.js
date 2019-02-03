var contForm = document.querySelector('.contact-form');
var but = document.querySelector('.contacts a');

if (contForm && but) {
    
    var close = contForm.querySelector('.close');
    but.addEventListener('click', function (event) {
        event.preventDefault();
        contForm.classList.add('show');
    });
    close.addEventListener('click', function (event) {
        event.preventDefault();
        contForm.classList.remove('show');
    })
}