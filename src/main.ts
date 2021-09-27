import { Modal } from './modal.js';
type ModalTitle = 'URL' | 'Body';
type ContentType = 'Text' | 'Video' | 'CheckBox' | 'Image'

window.addEventListener('load', ()=>{
    const Ibutton = document.querySelector('.button__image');
    const Vbutton = document.querySelector('.button__video');
    const Tbutton = document.querySelector('.button__text');
    const Cbutton = document.querySelector('.button__check');
    const modal = document.querySelector('.modal') as Element;
    const myModal : Modal = new Modal(modal);
    
    Ibutton?.addEventListener('click', () => {
        const param : ModalTitle = 'URL'
        const contentType : ContentType = 'Image'
        myModal.render(param, contentType);
    });
    Vbutton?.addEventListener('click', () => {
        const param : ModalTitle = 'URL'
        const contentType : ContentType = 'Video'
        myModal.render(param, contentType);
    });
    Tbutton?.addEventListener('click', () => {
        const param : ModalTitle = 'Body'
        const contentType : ContentType = 'Text'
        myModal.render(param, contentType);
    });
    Cbutton?.addEventListener('click', () => {
        const param : ModalTitle = 'Body'
        const contentType : ContentType = 'CheckBox'
        myModal.render(param, contentType);
    });
})
