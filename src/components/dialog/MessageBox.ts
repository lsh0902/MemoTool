import { BaseComponent } from "../basecomponent.js";

export class MessageBox extends BaseComponent<HTMLElement> {
    constructor(title: string, body: string) {
        super(`
            <div class="dialog__message">
                <h4 class="message__title"></h4>
                <input>
                <h4 class="message__body"></h4>
                <input>
            </div>
        `);
        const titleHeading = this.element.querySelector('.message__title')! as HTMLElement;
        titleHeading.textContent = title;
        const bodyHeading = this.element.querySelector('.message__body')! as HTMLElement;
        bodyHeading.textContent = body;
    }
}