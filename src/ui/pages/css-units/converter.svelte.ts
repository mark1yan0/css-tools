class Converter {
  #rem = $state(1);
  #px = $state(16);
  #base = $state(16);

  get rem() {
    return this.#rem;
  }

  set rem(value) {
    this.#rem = value;
    this.#px = value * this.#base;
  }

  get px() {
    return this.#px;
  }

  set px(value) {
    this.#px = value;
    this.#rem = value / this.#base;
  }

  get base() {
    return this.#base;
  }

  public copy(type: "rem" | "px") {
    let value = "";
    switch (type) {
      case "rem":
        value = this.#rem.toString().replace(",", ".");
        break;

      // px
      default:
        value = this.#px.toString();
        break;
    }

    if (!value) {
      throw new Error("An error occured when trying to copy");
    }

    if (!navigator.clipboard) {
      throw new Error("Copy not available");
    }

    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${value}${type}`);
      // TODO: toast
      alert(`Copied ${value}${type}`);
    }
  }
}

export default Converter;
