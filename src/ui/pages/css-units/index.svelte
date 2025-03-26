<script lang="ts">
    import Field from "@/ui/components/Field/index.svelte";
    import Converter from "./converter.svelte";

    const converter = new Converter();
</script>

<div class="flex flex-col items-center">
    <Field
        type="number"
        label="REM Value"
        id="rem"
        bind:value={converter.rem}
    />

    <Field type="number" label="PX Value" id="px" bind:value={converter.px} />
</div>

<div class="mt-4 text-center text-sm">
    <p>
        ⚡ Base size: <span class="font-semibold">{converter.base}px</span>
    </p>
    <p>1rem = 16px on your current browser</p>
</div>
