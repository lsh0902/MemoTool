import { BaseComponent, Component } from "../basecomponent.js";

export interface Composable {
    addChild(section : Component) : void;
}

type OnCloseListener = () => void;
type SectionContainerConstructor = {
    new() : SectionContainer;
}

interface SectionContainer extends Component, Composable{
    setCloseListener(callbackFunc : OnCloseListener) : void;
    createNewInstance(): SectionContainer;
}


export class PageItemComponent extends BaseComponent<HTMLElement> implements SectionContainer{
    private closeListener?: OnCloseListener;

    constructor() {
        super(`<li class="page-item" draggable="true" >
                    <section class="page-item__body"></section>
                    <div class="page-item__controls">
                        <button class="close">&times;</button>
                    </div>
                </li>`);
                
        
        const closeButton = this.element.querySelector('.close')! as HTMLButtonElement;
        closeButton.onclick = () => {
            this.closeListener && this.closeListener();
        }
        this.element.addEventListener("dragstart", (e : DragEvent) => {
            this.onDragStart(e);
        });
        this.element.addEventListener("dragend", (e : DragEvent) => {
            this.onDragEnd(e);
        });
    }

    addChild(child : Component) {
        const container = this.element.querySelector('.page-item__body')! as HTMLElement;
        child.attachTo(container);
    }

    setCloseListener(callbackFunc : OnCloseListener) {
        this.closeListener = callbackFunc;
    }

    createNewInstance(): PageItemComponent{
        return new PageItemComponent();
    }

    onDragStart(e : DragEvent) {
        console.log(e);
    }

    onDragEnd(e : DragEvent) {
        console.log(e);
    }
}



export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable{
    constructor(private itemComponent : SectionContainerConstructor) {
        super('<ul class="page"></ul>');
    }

    addChild(section: Component) {
        const page = new this.itemComponent();
        page.addChild(section);
        page.attachTo(this.element, 'beforeend');
        page.setCloseListener(() => {
            page.removeFrom(this.element);
        })
    }
}
