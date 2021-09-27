export class Modal {
    constructor(modal) {
        this.modal = modal;
        this.displayModal = (title, type) => {
            console.log(`${type}  ${title}`);
            const h4 = this.modal.querySelector('.modal__content');
            h4.innerHTML = title;
            this.modal.classList.remove('hidden');
        };
        const closeButton = modal.querySelector('.close__button');
        const addButton = modal.querySelector('.add__button');
        closeButton.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
        addButton.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
    }
    render() {
    }
}
