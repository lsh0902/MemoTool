import { BaseComponent } from "../../basecomponent.js";
export class TextInput extends BaseComponent {
    constructor() {
        super(`
            <div>
                <div class="form__container">
                    <label for="title">Title</label>
                    <input type="text" id="title">
                </div>
                <div class="form__container">
                    <label for="body">Body</label>
                    <textarea type="text" row="4" id="body"></textarea>
                </div>
            </div>
        `);
    }
    get title() {
        const el = this.element.querySelector('#title');
        return el.value;
    }
    get body() {
        const el = this.element.querySelector('#body');
        return el.value;
    }
}
