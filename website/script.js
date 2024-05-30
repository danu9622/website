// Obțineți înălțimea ferestrei vizibile
function getWindowHeight() {
    return window.innerHeight;
}

// Obțineți înălțimea totală a paginii
function getPageHeight() {
    return Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
    );
}

// Actualizați poziția footer-ului
function updateFooterPosition() {
    var windowHeight = getWindowHeight();
    var pageHeight = getPageHeight();

    var footer = document.querySelector('footer');

    if ((windowHeight + window.pageYOffset) >= pageHeight && window.pageYOffset > 0) {
        // Dacă suntem la sfârșitul paginii și nu suntem deja în partea de sus, fixați footer-ul în partea de jos
        footer.style.position = 'fixed';
        footer.style.bottom = '0';
    } else {
        // Altfel, eliberați footer-ul
        footer.style.position = 'static';
        footer.style.bottom = 'auto';
    }
}

// Ascultați evenimentul de scroll pentru a actualiza poziția footer-ului
window.addEventListener('scroll', updateFooterPosition);
