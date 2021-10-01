import { BaseComponent } from "../basecomponent.js";
export class PageItemComponent extends BaseComponent {
    constructor() {
        super(`<li class="page-item" draggable="true" >
                    <section class="page-item__body"></section>
                    <div class="page-item__controls">
                        <button class="close">&times;</button>
                    </div>
                </li>`);
        const closeButton = this.element.querySelector('.close');
        closeButton.onclick = () => {
            this.closeListener && this.closeListener();
        };
        this.element.addEventListener("dragstart", (e) => {
            this.onDragStart(e);
        });
        this.element.addEventListener("dragend", (e) => {
            this.onDragEnd(e);
        });
    }
    addChild(child) {
        const container = this.element.querySelector('.page-item__body');
        child.attachTo(container);
    }
    setCloseListener(callbackFunc) {
        this.closeListener = callbackFunc;
    }
    createNewInstance() {
        return new PageItemComponent();
    }
    onDragStart(e) {
        console.log(e);
    }
    onDragEnd(e) {
        console.log(e);
    }
}
export class PageComponent extends BaseComponent {
    constructor(itemComponent) {
        super('<ul class="page"></ul>');
        this.itemComponent = itemComponent;
    }
    addChild(section) {
        const page = new this.itemComponent();
        page.addChild(section);
        page.attachTo(this.element, 'beforeend');
        page.setCloseListener(() => {
            page.removeFrom(this.element);
        });
    }
}
