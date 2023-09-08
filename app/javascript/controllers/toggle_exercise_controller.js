import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["toggled"];
  static classes = ["change"];

  toggle () {
    for (let target of this.toggledTargets) {
      target.classList.toggle(this.changeClass);
    };
  };
};
