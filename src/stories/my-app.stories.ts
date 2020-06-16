import { TemplateResult, html } from 'lit-element';
import '../components/my-app.js';

export default {
    title: 'my-app',
};

export const App: () => TemplateResult = (): TemplateResult =>
    html`<my-app></my-app>`;
