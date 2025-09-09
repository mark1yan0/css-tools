<script lang="ts">
    import Field from "@/ui/components/Fields/Field/index.svelte";
    import converter from "@/state/converter/index.svelte";
</script>

<div class="pr-6 container px-2 w-fit rounded">
    <p class="inline">Base size:</p>
    <Field
        title="Change base size"
        id="base-size"
        bind:value={converter.base}
        type="number"
        after="px"
        fieldClass="hover:text-[var(--accent)]"
        afterClass="text-xs"
    />
</div>
