import { BaseComponent } from "../../basecomponent.js";
export class ImageComponent extends BaseComponent {
    constructor(title, imgSrc) {
        super(`
        <section class="item-image">
            <div class="image__holder">
                <img src="./background-210125-235634.png" class="image__thumbnail">
                <p class="box__title image__title">title</p>
            </div>
        </section>
        `);
        const imageEl = this.element.querySelector('.image__thumbnail');
        imageEl.src = imgSrc;
        imageEl.alt = title;
        const titleEl = this.element.querySelector('.image__title');
        titleEl.textContent = title;
    }
}
