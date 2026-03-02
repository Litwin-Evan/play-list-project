/// I will put the playlist indicator in the file of the playlist, so that it can be easily imported and used in the playlist component.
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
 * @element play-list-indicator
 */
export class PlayListIndicator extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "play-list-indicator";
  }

  constructor() {
    super();
    this.direction = "next";
  }
  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      direction: { type: String, reflect : true},
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
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="arrow-wrapper">
  <button @click="${() => this.dispatchEvent(new CustomEvent('prev', { bubbles: true, composed: true }))}">&lt;</button>
  <span class="label">${this.label}<slot></slot></span>
  <button @click="${() => this.dispatchEvent(new CustomEvent('next', { bubbles: true, composed: true }))}">&gt;</button>
</div>`;
  }
}

globalThis.customElements.define(PlayListIndicator.tag, PlayListIndicator);


