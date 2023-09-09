import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["warning", "input"];
  static classes = ["warn"];

  toggle () {
    console.log(this);
    if (this.inputTarget.value.length > 280) {
      this.warningTarget.classList.remove(this.warnClass);
    } else {
      this.warningTarget.classList.add(this.warnClass);
    };
  };
};
