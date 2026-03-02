/// I will put the playlist arrow in this file.
/**
 * Copyright 2026 Evan Litwin
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `play-list-project`
 * 
 * @demo index.html
 * @element play-list-arrow
 */
export class PlayListArrow extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "play-list-arrow";
  }

  constructor() {
    super();
    this.leftArrow = "<";
    this.rightArrow = ">";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
        leftArrow: { type: String },
        rightArrow: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }

      h3 span {
        font-size: var(--play-list-project-label-font-size, var(--ddd-font-size-s));
      }
      button {
        width: 60px;
        height: 60px;
        border-radius: var(--ddd-radius-circle);
        border: solid var(--ddd-theme-default-navy40);
        border-color: var(--ddd-theme-default-navy40);
        background-color: transparent;
        color: black;
        cursor: pointer;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center; 
        display: inline-block;
        margin: 0 var(--ddd-spacing-15);

    }

    `];
  }

  // Lit render the HTML
  render() {
    return html`
<button @click="${() => this.dispatchEvent(new CustomEvent('prev', { bubbles: true, composed: true }))}">${this.leftArrow}</button>
<span class="label"><slot></slot></span>
<button @click="${() => this.dispatchEvent(new CustomEvent('next', { bubbles: true, composed: true }))}">${this.rightArrow}</button>`;
  }
}

globalThis.customElements.define(PlayListArrow.tag, PlayListArrow);
