'use strict';

{
    const main = document.getElementById('main');
    const thumnails = document.querySelectorAll('.thumb-img');

    thumnails.forEach(function(thumnail) {
        thumnail.addEventListener('click', () => {
            let src = thumnail.getAttribute('src');
            main.src = src;
        });
    });
}