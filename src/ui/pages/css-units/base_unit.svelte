<script lang="ts">
    import Field from "@/ui/components/Field/index.svelte";
    import converter from "@/state/converter/index.svelte";
</script>

<div
    class="pr-6 text-gray-50 bg-zinc-800 border border-zinc-700 px-2 w-fit rounded"
>
    <p class="inline">Base size:</p>
    <Field
        title="Change base size"
        id="base-size"
        bind:value={converter.base}
        type="number"
        after="px"
        fieldClass="hover:text-purple-500"
        afterClass="text-xs"
    />
</div>
