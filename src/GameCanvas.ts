import {
    TemplateResult,
    LitElement,
    html,
    css,
    customElement,
    CSSResult,
    property,
} from 'lit-element';

@customElement('game-canvas')
export class MyApp extends LitElement {
    public static styles: CSSResult = css`
        :host {
            display: block;
        }
    `;

    @property({ type: Object })
    private el: HTMLCanvasElement = document.createElement('canvas');

    @property({ type: Object })
    public ctx: CanvasRenderingContext2D | null = this.el.getContext('2d');

    protected readonly firstUpdated: () => void = (): void => {
        console.log(this.el, this.ctx);
    };

    public render: () => TemplateResult = (): TemplateResult => {
        return html`${this.el}`;
    };
}
