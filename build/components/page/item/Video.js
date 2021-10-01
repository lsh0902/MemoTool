import { BaseComponent } from "../../basecomponent.js";
export class VideoComponent extends BaseComponent {
    constructor(title, url) {
        super(`
        <section class="item-image">
            <div class="video__player">
                <iframe class="video__iframe"></iframe>
            </div>
            <h3 class="box__title video__title">title</h3>
        </section>
        `);
        const videoEl = this.element.querySelector('.video__iframe');
        videoEl.src = this.makeUrl(url);
        const titleEl = this.element.querySelector('.video__title');
        titleEl.textContent = title;
    }
    makeUrl(url) {
        const parsed = url.split(new RegExp('/', 'g')).slice(-1)[0];
        const id = parsed === null || parsed === void 0 ? void 0 : parsed.split('=');
        if (id === null || id === void 0 ? void 0 : id.length) {
            return "https://www.youtube.com/embed/" + id[id.length - 1];
        }
        return "";
    }
}
