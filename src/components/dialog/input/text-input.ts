import { BaseComponent } from "../../basecomponent.js";
import { TextData } from "../Dialog.js";

export class TextInput extends BaseComponent<HTMLElement> implements TextData {
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
        `)
    }

    get title():string{
        const el = this.element.querySelector('#title')! as HTMLInputElement;
        return el.value;
    }

    get body():string{
        const el = this.element.querySelector('#body')! as HTMLTextAreaElement;
        return el.value;
    }
}