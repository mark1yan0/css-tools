<script lang="ts">
    import ThemeSwitcher from "@/ui/components/ThemeSwitcher/index.svelte";
    import Field from "@/ui/components/Field/index.svelte";
    import Converter from "./converter.svelte";

    const converter = new Converter();
</script>

<header class="flex items-center justify-between">
    <h1 class="animated-text text-4xl">REM to PX Converter</h1>
    <ThemeSwitcher />
</header>

<div class="flex flex-col items-center">
    <Field
        type="number"
        label="REM Value"
        id="rem"
        bind:value={converter.rem}
    />

    <Field type="number" label="PX Value" id="px" bind:value={converter.px} />
</div>

<!-- TODO: make base size editable -->
<footer class="mt-4 text-center text-sm">
    <p>
        Base size: <span class="font-semibold text-purple-400"
            >{converter.base}px</span
        >
    </p>
    <!-- <p>1rem = 16px on your current browser</p> -->
</footer>
