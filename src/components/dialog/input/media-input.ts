import { BaseComponent } from "../../basecomponent.js";
import { MediaData } from "../Dialog.js";

export class MediaInput extends BaseComponent<HTMLElement> implements MediaData {
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
        `)
    }

    get title():string{
        const el = this.element.querySelector('#title')! as HTMLInputElement;
        return el.value;
    }

    get url():string{
        const el = this.element.querySelector('#url')! as HTMLInputElement;
        return el.value;
    }
}