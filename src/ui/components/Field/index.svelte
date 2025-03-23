<script lang="ts">
    let {
        id,
        type,
        label,
        value = $bindable(),
    }: {
        id: string;
        type: string;
        label: string;
        value: number;
        autofocus?: boolean;
    } = $props();

    import cursorNotice from "@/state/cursor/index.svelte";

    function copyHandler() {
        if (!value && value !== 0) {
            throw new Error("An error occured when trying to copy");
        }

        if (!navigator.clipboard) {
            throw new Error("Copy not available");
        }

        if (navigator.clipboard) {
            navigator.clipboard.writeText(`${value}${id}`);
            cursorNotice.info(`Copied ${value}${id}`);
        }
    }

    function focusHandler(
        event: FocusEvent & {
            currentTarget: EventTarget & HTMLInputElement;
        },
    ) {
        if (!event.currentTarget) {
            return;
        }

        event.currentTarget.select();
    }
</script>

<label for={id} class="block text-gray-700 text-sm font-medium">
    {label}
</label>
<input
    {type}
    name={id}
    ondblclick={copyHandler}
    {id}
    bind:value
    class="text-9xl w-full text-center focus:outline-none"
    onfocus={focusHandler}
/>

<style>
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>
