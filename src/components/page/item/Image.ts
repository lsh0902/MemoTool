import { BaseComponent } from "../../basecomponent.js";

export class ImageComponent extends BaseComponent<HTMLImageElement>{
    constructor(title : string, imgSrc : string) {
        super(`
        <section class="item-image">
            <div class="image__holder">
                <img src="./background-210125-235634.png" class="image__thumbnail">
                <p class="box__title image__title">title</p>
            </div>
        </section>
        `)
        const imageEl = this.element.querySelector('.image__thumbnail')! as HTMLImageElement;
        imageEl.src = imgSrc;
        imageEl.alt = title;

        const titleEl = this.element.querySelector('.image__title')! as HTMLParagraphElement;
        titleEl.textContent = title;

        // template를 이용하지 않는 방법
        // this.imageComp = document.createElement('div');
        // this.imageComp.setAttribute('class', 'item-image');
        // const content: HTMLDivElement = document.createElement('div');
        // content.setAttribute('class', 'contents')
        // const img : HTMLImageElement = document.createElement('img');
        // img.setAttribute('src', imgSrc);

        // const h2 : HTMLElement = document.createElement('h2');
        // h2.innerText = title;
        // content.appendChild(img);
        // content.appendChild(h2);
        // const button : HTMLButtonElement = document.createElement('button');
        // button.innerText = 'X';
        // this.imageComp.appendChild(content);
        // this.imageComp.appendChild(button);
    }
}