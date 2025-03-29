<script lang="ts">
    import Field from "@/ui/components/Field/index.svelte";
    import converter from "@/state/converter/index.svelte";
</script>

<p class="inline">Base size:</p>
<Field id="base-size" bind:value={converter.base} type="number" after="px" />
