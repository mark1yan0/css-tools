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

  public getString(type: "rem" | "px"): string {
    let value = type === "rem" ? this.#rem : this.#px;
    return `${value}${type}`;
  }
}

export default Converter;
