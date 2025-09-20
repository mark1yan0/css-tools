import THEME_DEFAULTS from "./default";

type TThemeType = "light" | "dark" | "custom";

type TTheme = {
    background: string;
    foreground: string;
    primary: string;
    text: string;
};

type TPersistedTheme = {
    type: TThemeType;
    theme: TTheme;
};

const defaultTheme: TPersistedTheme = {
    type: "dark",
    theme: THEME_DEFAULTS.dark,
};

class ThemeManager {
    private static instance: ThemeManager;
    private storageKey = "css:converter:theme";
    private persisted: TPersistedTheme | null =
        this.getPersisted() ?? defaultTheme;
    private themeType: TThemeType = $state(
        this.persisted?.type ?? defaultTheme.type,
    );

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
            );
            return;
        }

        this.set(
            this.persisted.type,
            this.persisted.theme ?? THEME_DEFAULTS.dark,
        );
    }

    public get(): TThemeType {
        return this.themeType;
    }

    public is(theme: TThemeType) {
        return this.themeType === theme;
    }

    public set(type: TThemeType, theme?: TTheme) {
        const body = document.querySelector("body");
        if (!body) {
            throw new Error("No root element found");
        }

        body.dataset.theme = type;

        // dark by default
        let _theme = THEME_DEFAULTS.dark;
        if (type === "light") {
            _theme = THEME_DEFAULTS.light;
        }

        if (type === "custom") {
            if (!theme) {
                throw new Error("Custom theme values are required");
            }
            _theme = theme;
        }

        this.setCss(_theme);
        localStorage.setItem(
            this.storageKey,
            JSON.stringify({
                type,
                theme: _theme,
            }),
        );
        this.themeType = type;
    }

    public switch() {
        this.themeType === "light" ? this.set("dark") : this.set("light");
    }

    private getPersisted(): TPersistedTheme | null {
        const persisted = localStorage.getItem(this.storageKey);
        if (!persisted) {
            return null;
        }

        return JSON.parse(persisted);
    }

    public getDefaults(): TTheme {
        const style = getComputedStyle(document.body);

        if (this.is("custom")) {
            return {
                background: style.getPropertyValue("--background"),
                foreground: style.getPropertyValue("--foreground"),
                primary: style.getPropertyValue("--primary"),
                text: style.getPropertyValue("--text"),
            };
        }

        return defaultTheme.theme;
    }

    private setCss(theme: TTheme) {
        const root = document.querySelector("body");

        if (!root) {
            throw new Error("No root element found");
        }

        for (const [k, v] of Object.entries(theme)) {
            root.style.setProperty(`--${k}`, v);
        }
    }
}

export default ThemeManager.getInstance();
