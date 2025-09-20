<script lang="ts">
    import ConvertField from "./convert_field.svelte";
    import converter from "@/state/converter/index.svelte";
</script>

<h1>Units converter</h1>
<section
    id="converter"
    class="flex flex-col items-center justify-around h-full pr-14"
>
    <ConvertField label="REM Value" id="rem" bind:value={converter.rem} />
    <ConvertField label="PX Value" id="px" bind:value={converter.px} />
</section>
