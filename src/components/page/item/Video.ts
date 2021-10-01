import { BaseComponent } from "../../basecomponent.js";

export class VideoComponent extends BaseComponent<HTMLElement>{
    constructor(title : string, url : string) {
        super(`
        <section class="item-image">
            <div class="video__player">
                <iframe class="video__iframe"></iframe>
            </div>
            <h3 class="box__title video__title">title</h3>
        </section>
        `)
        const videoEl = this.element.querySelector('.video__iframe')! as HTMLIFrameElement;
        videoEl.src = this.makeUrl(url);
        const titleEl = this.element.querySelector('.video__title')! as HTMLHeadingElement;
        titleEl.textContent = title;
    }

    private makeUrl(url:string) :string {
        const parsed = url.split(new RegExp('/', 'g')).slice(-1)[0];
        const id = parsed?.split('=');
        if(id?.length){
            return "https://www.youtube.com/embed/" + id[id.length-1];
        }
        return "";
    }
}