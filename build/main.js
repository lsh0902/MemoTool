import { Modal } from './modal.js';
window.addEventListener('load', () => {
    const Ibutton = document.querySelector('.button__image');
    const Vbutton = document.querySelector('.button__video');
    const Tbutton = document.querySelector('.button__text');
    const Cbutton = document.querySelector('.button__check');
    const modal = document.querySelector('.modal');
    const myModal = new Modal(modal);
    Ibutton === null || Ibutton === void 0 ? void 0 : Ibutton.addEventListener('click', () => {
        const param = 'URL';
        const contentType = 'Image';
        myModal.displayModal(param, contentType);
    });
    Vbutton === null || Vbutton === void 0 ? void 0 : Vbutton.addEventListener('click', () => {
        const param = 'URL';
        const contentType = 'Video';
        myModal.displayModal(param, contentType);
    });
    Tbutton === null || Tbutton === void 0 ? void 0 : Tbutton.addEventListener('click', () => {
        const param = 'Body';
        const contentType = 'Text';
        myModal.displayModal(param, contentType);
    });
    Cbutton === null || Cbutton === void 0 ? void 0 : Cbutton.addEventListener('click', () => {
        const param = 'Body';
        const contentType = 'CheckBox';
        myModal.displayModal(param, contentType);
    });
});
