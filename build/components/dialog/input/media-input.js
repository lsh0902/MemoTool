import { BaseComponent } from "../../basecomponent.js";
export class MediaInput extends BaseComponent {
    constructor() {
        super(`
            <div>
                <div class="form__container">
                    <label for="title">Title</label>
                    <input type="text" id="title">
                </div>
                <div class="form__container">
                    <label for="url">URL</label>
                    <input type="text" id="url">
                </div>
            </div>
        `);
    }
    get title() {
        const el = this.element.querySelector('#title');
        return el.value;
    }
    get url() {
        const el = this.element.querySelector('#url');
        return el.value;
    }
}
