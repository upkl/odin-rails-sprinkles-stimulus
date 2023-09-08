import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["smile"];
  static classes = ["change"];

  toggle () {
    this.smileTarget.classList.toggle(this.changeClass);
  };
};
