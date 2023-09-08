import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["toToggle"];
  static classes = ["change"];

  toggle () {
    for (let target of this.toToggleTargets) {
      target.classList.toggle(this.changeClass);
    };
  };
};
