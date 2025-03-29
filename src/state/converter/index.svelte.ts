class Converter {
    private static instance: Converter;
    #rem = $state(1);
    #px = $state(16);
    #base = $state(16);

    public static getInstance(): Converter {
        if (!Converter.instance) {
            Converter.instance = new Converter();
        }
        return Converter.instance;
    }

    get rem() {
        return +this.#rem.toFixed(3);
    }

    set rem(value: number) {
        this.#rem = value;
        this.#px = value * this.#base;
    }

    get px() {
        return +this.#px.toFixed(2);
    }

    set px(value: number) {
        this.#px = value;
        this.#rem = value / this.#base;
    }

    get base() {
        return +this.#base.toFixed(0);
    }

    set base(value: number) {
        this.#base = value;
        this.#px = value;
        this.#rem = value / this.#px;
    }

    public getString(type: "rem" | "px"): string {
        let value = type === "rem" ? this.#rem : this.#px;
        return `${value}${type}`;
    }
}

export default Converter.getInstance();
