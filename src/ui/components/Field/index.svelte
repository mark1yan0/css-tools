<script lang="ts">
    interface IProps {
        id: string;
        type: string;
        label: string;
        value: number;
        autofocus?: boolean;
    }

    type TFocusEvent = FocusEvent & {
        currentTarget: EventTarget & HTMLInputElement;
    };

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

    function focusHandler(event: TFocusEvent) {
        if (!event.currentTarget) {
            return;
        }

        const target = event.currentTarget;
        target.select();

        target.style.color = "var(--theme-text)";
    }

    function blurHandler(event: TFocusEvent) {
        if (!event.currentTarget) {
            return;
        }

        const target = event.currentTarget;

        target.style.color = "var(--theme-main)";
    }

    let timeout = $state<NodeJS.Timeout | null>(null);
    function mouseOverHandler() {
        timeout = setTimeout(() => {
            cursorNotice.info("Double click to copy");
        }, 3000); // TODO: add to settings and make possibility to disable
    }

    function mouseOutHandler() {
        cursorNotice.hide();
        if (!timeout) {
            return;
        }

        clearTimeout(timeout);
        timeout = null;
    }
</script>

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
        onmouseover={mouseOverHandler}
        onmouseout={mouseOutHandler}
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
