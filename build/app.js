import { Dialog } from "./components/dialog/Dialog.js";
import { MediaInput } from "./components/dialog/input/media-input.js";
import { TextInput } from "./components/dialog/input/text-input.js";
import { ImageComponent } from "./components/page/item/Image.js";
import { TextComponent } from "./components/page/item/Text.js";
import { TodoComponent } from "./components/page/item/Todo.js";
import { VideoComponent } from "./components/page/item/Video.js";
import { PageComponent, PageItemComponent } from "./components/page/page.js";
class App {
    constructor(root, dialogRoot) {
        this.dialogRoot = dialogRoot;
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(root);
        this.createDialog('#new-image', MediaInput, (input) => { return new ImageComponent(input.title, input.url); });
        this.createDialog('#new-video', MediaInput, (input) => { return new VideoComponent(input.title, input.url); });
        this.createDialog('#new-text', TextInput, (input) => { return new TextComponent(input.title, input.body); });
        this.createDialog('#new-todo', TextInput, (input) => { return new TodoComponent(input.title, input.body.split('/')); });
        this.page.addChild(new ImageComponent('title', 'dd'));
        this.page.addChild(new TextComponent('title', 'dd'));
        this.page.addChild(new TextComponent('title', 'dd'));
        this.page.addChild(new TextComponent('title', 'dd'));
        this.page.addChild(new TextComponent('title', 'dd'));
        this.page.addChild(new TextComponent('title', 'dd'));
    }
    createDialog(selector, inputType, maker) {
        const Btn = document.querySelector(selector);
        Btn.onclick = () => {
            const dialog = new Dialog();
            const input = new inputType();
            dialog.addChild(input);
            dialog.attachTo(this.dialogRoot);
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(this.dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                let comp = maker(input);
                this.page.addChild(comp);
                dialog.removeFrom(this.dialogRoot);
            });
        };
    }
}
const app = new App(document.querySelector('.document'), document.body);
console.log(app);
