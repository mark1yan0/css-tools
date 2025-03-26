<script lang="ts">
    interface IProps {
        id: string;
        type: string;
        label: string;
        value: number;
        autofocus?: boolean;
    }

    let { id, type, label, value = $bindable() }: IProps = $props();

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

        const target = event.currentTarget;
        target.select();

        // TODO: handle dark mode
        target.style.color = "white"; // TODO: make a css variable
    }

    function blurHandler(
        event: FocusEvent & {
            currentTarget: EventTarget & HTMLInputElement;
        },
    ) {
        if (!event.currentTarget) {
            return;
        }

        const target = event.currentTarget;

        target.style.color = "var(--color-purple-600)";
    }
</script>

<!-- TODO: Add a tooltip to notify that user can copy the value on db click -->

<label for={id} class="block text-sm font-medium invisible">
    {label}
</label>
<span class="relative">
    <input
        {type}
        name={id}
        ondblclick={copyHandler}
        {id}
        bind:value
        class="text-9xl text-center focus:outline-none text-purple-600 field-sizing-content"
        onfocus={focusHandler}
        onblur={blurHandler}
    />
    <span class="absolute text-5xl bottom-0 mb-10">
        {id}
    </span>
</span>

<style>
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>
