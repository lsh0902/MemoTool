import { BaseComponent } from "../../basecomponent.js";

export class TextComponent extends BaseComponent<HTMLElement>{
    constructor(title : string, body : string) {
        super(`
        <section class="item-text">
            <h2 class="box__title note__title"></h2>
            <p class="note__body"></p>
        </section>
        `)
        const titleEl = this.element.querySelector('.note__title')! as HTMLHeadingElement;
        titleEl.textContent = title;

        const bodyEl = this.element.querySelector('.note__body')! as HTMLParagraphElement;
        bodyEl.textContent = body;
    }
}