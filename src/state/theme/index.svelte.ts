type TTheme = "light" | "dark";

class ThemeManager {
    private static instance: ThemeManager;
    private storageKey = "css:converter:theme";
    private persisted: TTheme | undefined = localStorage.getItem(
        this.storageKey,
    ) as TTheme;
    private theme: TTheme = $state(this.persisted ?? "dark");

    public static getInstance(): ThemeManager {
        if (!ThemeManager.instance) {
            ThemeManager.instance = new ThemeManager();
        }
        return ThemeManager.instance;
    }

    /**
     * Initializes the theme manager and sets the initial theme on the body element.
     */
    public init() {
        // if theme is not saved to localStorage, set it based on user preference
        if (!this.persisted) {
            this.set(
                matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light",
                {
                    persist: false,
                },
            );
        }

        this.set(this.get(), {
            persist: false,
        });
    }

    public get(): TTheme {
        return this.theme;
    }

    public switch() {
        this.theme === "light" ? this.set("dark") : this.set("light");
    }

    public isDark(): boolean {
        return this.theme === "dark";
    }

    private set(value: TTheme, opts?: { persist?: boolean }) {
        const body = document.querySelector("body");
        if (!body) {
            // TODO: error handling
            return;
        }

        body.dataset.theme = value;

        const persist = opts?.persist ?? true;
        if (persist) {
            // prevent persisting the default browser preference
            localStorage.setItem(this.storageKey, value);
        }
        this.theme = value;
    }
}

export default ThemeManager.getInstance();
