type ModalTitle = 'URL' | 'Body';
type ContentType = 'Text' | 'Video' | 'CheckBox' | 'Image'

export class Modal {
    constructor(private modal : Element) {
        const closeButton = modal.querySelector('.close__button') as Element;
        const addButton = modal.querySelector('.add__button') as Element;
    
        
    }

    render = (title : ModalTitle, type : ContentType) => {
        let parent : Element = document.createElement('div');
        let background : Element = document.createElement('div');
        background.classList.add('modal__background');

        let modal : Element = document.createElement('div');
        let button : Element = document.createElement('button');
        button.classList.add('close__button');
        button.innerHTML = 'X';

        let title1 : Element = document.createElement('h4');
        title1.innerHTML = "Title";
        let input1 : Element = document.createElement('input');
        input1.setAttribute('type', 'text');
        let title2 : Element = document.createElement('h4');
        title2.classList.add('modal__content');
        title2.innerHTML = "Text";
        let input2 : Element = document.createElement('input');
        input2.setAttribute('type', 'text');

        let addButton : Element = document.createElement('button');
        addButton.classList.add('add__button');
        addButton.innerHTML = 'Add';


        button.addEventListener('click', () => {
            // 부모로부터 지우기
        });
    
        addButton.addEventListener('click', () => {
            // 현재 값들 받아서
            // items 추가하는거 호출
        })

        modal.appendChild(button);
        modal.appendChild(title1);
        modal.appendChild(input1);
        modal.appendChild(title2);
        modal.appendChild(input2);
        modal.appendChild(addButton);
        parent.appendChild(modal);
        parent.appendChild(background);
        return parent
    }
}