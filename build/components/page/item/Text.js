import { BaseComponent } from "../../basecomponent.js";
export class TextComponent extends BaseComponent {
    constructor(title, body) {
        super(`
        <section class="item-text">
            <h2 class="box__title note__title"></h2>
            <p class="note__body"></p>
        </section>
        `);
        const titleEl = this.element.querySelector('.note__title');
        titleEl.textContent = title;
        const bodyEl = this.element.querySelector('.note__body');
        bodyEl.textContent = body;
    }
}
