import {
    TemplateResult,
    LitElement,
    html,
    css,
    customElement,
    CSSResult,
} from 'lit-element';

import './GameCanvas.js';

@customElement('my-app')
export class MyApp extends LitElement {
    public static styles: CSSResult = css`
        :host {
            display: block;
        }
    `;

    public render: () => TemplateResult = (): TemplateResult => {
        return html`
            <main>
                <game-canvas></game-canvas>
            </main>
        `;
    };
}
