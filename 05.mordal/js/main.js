'use strict';

{
    const open = document.getElementById('modal-open')
    const modalBg = document.getElementById('modal-bg')
    const container = document.getElementById('modal-container')
    const close = document.getElementById('modal-close')

    open.addEventListener('click', () =>{
        modalBg.classList.add('active')
        container.classList.add('active')
    });

    close.addEventListener('click', () =>{
        modalBg.classList.remove('active')
        container.classList.remove('active')
    });

    modalBg.addEventListener('click', () =>{
        modalBg.classList.remove('active')
        container.classList.remove('active')
    });
}