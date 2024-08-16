'use strict';

{
    const btn = document.querySelector('.btn');
    const container = document.querySelector('.container');

    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        container.classList.toggle('active');
    })

    const open = document.getElementById('modal-open')
    const modalBg = document.getElementById('modal-bg')
    const modalContainer = document.getElementById('modal-container')
    const close = document.getElementById('modal-close')

    open.addEventListener('click', () =>{
        modalBg.classList.add('active')
        modalContainer.classList.add('active')
    });

    close.addEventListener('click', () =>{
        modalBg.classList.remove('active')
        modalContainer.classList.remove('active')
    });

    modalBg.addEventListener('click', () =>{
        modalBg.classList.remove('active')
        modalContainer.classList.remove('active')
    });

    const images = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'];
    const slideImg = document.getElementById('slide_img');
    const prev = document.getElementById('prev');
    const page = document.getElementById('page');
    const next = document.getElementById('next');
    let current = 0;
    
    page.textContent = `1/${images.length}`

    next.addEventListener('click', () => {
        if (current < images.length - 1) {
            current++;
            slideImg.src = images[current];
            page.textContent = `${current + 1}/${images.length}`
        };
    });

    prev.addEventListener('click', () => {
        if (current > 0) {
            current--;
            slideImg.src = images[current];
            page.textContent = `${current + 1}/${images.length}`
        };
    });
}