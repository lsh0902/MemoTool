"use strict";
exports.__esModule = true;
window.addEventListener('load', function () {
    var Ibutton = document.querySelector('.button__image');
    var Vbutton = document.querySelector('.button__video');
    var Tbutton = document.querySelector('.button__text');
    var Cbutton = document.querySelector('.button__check');
    var itemList = document.querySelector('.items');
    console.log('sdf');
    console.log(Ibutton);
    Ibutton === null || Ibutton === void 0 ? void 0 : Ibutton.addEventListener('click', function () {
        console.log('dsf');
        modalClass.displayModal('URL');
    });
    Vbutton === null || Vbutton === void 0 ? void 0 : Vbutton.addEventListener('click', function () {
        modalClass.displayModal('URL');
    });
    Tbutton === null || Tbutton === void 0 ? void 0 : Tbutton.addEventListener('click', function () {
        modalClass.displayModal('Body');
    });
    Cbutton === null || Cbutton === void 0 ? void 0 : Cbutton.addEventListener('click', function () {
        modalClass.displayModal('Body');
    });
});
