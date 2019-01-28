var link = document.querySelector('.login');
var overlay = document.querySelector('.modal-overlay');
var popup = document.querySelector('.modal-content');
var close = popup.querySelector('.modal-content-close');
var login = popup.querySelector('[name=login]');
var password = popup.querySelector('[name=password]');
var form = popup.querySelector('form');
var storage = localStorage.getItem('login');
link.addEventListener('click', function (event) {
    event.preventDefault();
    popup.classList.add('modal-content-show');
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
    overlay.classList.add('modal-content-show-overley');
});

close.addEventListener('click', function (event) {
    event.preventDefault();
    popup.classList.remove('modal-content-show');
    overlay.classList.remove('modal-content-show-overley');
    form.classList.remove('modal-error');
});
form.addEventListener('submit', function (event) {
    if (!login.value || !password.value) {
        event.preventDefault();	
        form.classList.add('modal-error');
    } else {
        localStorage.setItem('login', login.value);
    }
});

var popupMap = document.querySelector('.modal-content-map');
if (popupMap) {
    var closeMap = popupMap.querySelector('.modal-content-close');
    var linkMap = document.querySelector('.js-open-map');
    linkMap.addEventListener('click', function (event) {
        event.preventDefault();
        popupMap.classList.add('modal-content-show');
        overlay.classList.add('modal-content-show-overley');
    });
    closeMap.addEventListener('click', function (event) {
        event.preventDefault();
        popupMap.classList.remove('modal-content-show');
        overlay.classList.remove('modal-content-show-overley');
    });
}

window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains('modal-content-show')) {
            popup.classList.remove('modal-content-show');
            overlay.classList.remove('modal-content-show-overley');	
            form.classList.remove('modal-error');
        }
        if (popupMap && popupMap.classList.contains('modal-content-show')) {
            popupMap.classList.remove('modal-content-show');
            overlay.classList.remove('modal-content-show-overley');	
        }
    }
});