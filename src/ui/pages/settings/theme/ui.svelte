<script lang="ts">
    import ColorField from "@/ui/components/fields/color/index.svelte";
    import Button from "@/ui/components/button/index.svelte";
    import themeManager from "@/state/theme/index.svelte";
    import THEME_DEFAULTS from "@/state/theme/default";

    let theme = $state(themeManager.getDefaults());

    function resetClickHandler() {
        themeManager.set("dark");
        theme = THEME_DEFAULTS.dark;
    }
</script>

<div class="flex flex-col justify-between h-full">
    <h2>Custom Theme</h2>
    <div class="grid grid-cols-2 gap-4 items-center justify-center">
        <ColorField
            id="theme-background"
            onChange={() => themeManager.set("custom", theme)}
            bind:value={theme.background}
            label="Background"
            variant="compact"
        />
        <ColorField
            id="theme-foreground"
            onChange={() => themeManager.set("custom", theme)}
            bind:value={theme.foreground}
            label="Foreground"
            variant="compact"
        />
        <ColorField
            id="theme-primary"
            onChange={() => themeManager.set("custom", theme)}
            bind:value={theme.primary}
            label="Primary"
            variant="compact"
        />
        <ColorField
            id="theme-text"
            onChange={() => themeManager.set("custom", theme)}
            bind:value={theme.text}
            label="Text"
            variant="compact"
        />
    </div>
    <br />
    <Button class="w-full text-center block" onclick={resetClickHandler}>
        Reset
    </Button>
    <div class="container text-center p-2 self-end">
        <p>This is a container example</p>
    </div>
</div>
