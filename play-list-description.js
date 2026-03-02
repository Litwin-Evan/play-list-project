/// This will be the file for the playlist description, which will be used to display the description of the playlist in the playlist component.
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
 * @element play-list-description
 */
export class PlayListDescription extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "play-list-description";
  }

  constructor() {
    super();
    this.heading1 = "Heading 1";
    this.heading2 = "Heading 2";
    this.description = "This is the description of the playlist.";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      heading1: { type: String },
      heading2: { type: String }, 
      description: { type: String },
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
<div class="wrapper">
  <div class="top-heading">${this.heading1}</div>
  <div class="second-heading"><span>${this.heading2}</span></div>
    <div class="description">${this.description}</div>
</div>`;
  }
}

globalThis.customElements.define(PlayListDescription.tag, PlayListDescription);

