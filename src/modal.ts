type ModalTitle = 'URL' | 'Body';
type ContentType = 'Text' | 'Video' | 'CheckBox' | 'Image'

export class Modal {
    constructor(private modal : Element) {
        const closeButton = modal.querySelector('.close__button') as Element;
        const addButton = modal.querySelector('.add__button') as Element;
    
        closeButton.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
    
        addButton.addEventListener('click', () => {
            

            modal.classList.add('hidden');
        })

        
    }

    displayModal = (title : ModalTitle, type : ContentType) => {
        console.log(`${type}  ${title}`);
        const h4 = this.modal.querySelector('.modal__content') as Element;
        h4.innerHTML = title;
        this.modal.classList.remove('hidden');
    }
}