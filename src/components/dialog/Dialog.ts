import { BaseComponent, Component } from "../basecomponent.js";
import { Composable } from "../page/page.js";

type OnListener = () => void;

export interface MediaData {
    readonly title : string;
    readonly url : string;
}
export interface TextData {
    readonly title : string;
    readonly body : string;
}

export class Dialog extends BaseComponent<HTMLElement> implements Composable{
    private closeListener?: OnListener;
    private submitListener?: OnListener;


    constructor() {
        super(
            `
            <dialog class="dialog">
                <div class="dialog__container">
                    <button class="close">X</button>
                    <div id="dialog__body"></div>
                    <button class="dialog__submit">ADD</button>
                </div>
            </dialog>`);
        const closeButton = this.element.querySelector('.close')! as HTMLElement;
        const submitButton = this.element.querySelector('.dialog__submit')! as HTMLElement;
        closeButton.onclick = () => {
            this.closeListener && this.closeListener();
        }

        submitButton.onclick = () => {
            this.submitListener && this.submitListener();
        }
    }

    setOnCloseListener(listener: OnListener) {
        this.closeListener = listener;
    }
    setOnSubmitListener(listener: OnListener) {
        this.submitListener = listener;
    }

    addChild(child : Component) {
        const body = this.element.querySelector('#dialog__body')! as HTMLElement;
        child.attachTo(body);
    }
}