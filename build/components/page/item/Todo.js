import { BaseComponent } from "../../basecomponent.js";
export class TodoComponent extends BaseComponent {
    constructor(title, todos) {
        super(`
        <section class="todo">
            <h2 class="box__title todo__title"></h2>
            <ul class="todo_list"></ul>
        </section>
        `);
        const titleEl = this.element.querySelector('.todo__title');
        titleEl.textContent = title;
        const todoList = this.element.querySelector('.todo_list');
        for (const todo of todos) {
            const li = document.createElement('li');
            const checkBox = document.createElement('input');
            li.appendChild(checkBox);
            checkBox.insertAdjacentText('afterend', todo);
            checkBox.setAttribute('type', 'checkbox');
            todoList.appendChild(li);
        }
    }
}
