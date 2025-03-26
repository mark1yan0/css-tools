<script lang="ts">
    import Field from "@/ui/components/Field/index.svelte";
    import Converter from "./converter.svelte";

    const converter = new Converter();
</script>

<header>
    <h1 class="animated-text text-4xl text-center">REM to PX Converter</h1>
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
