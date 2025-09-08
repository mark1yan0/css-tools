<script lang="ts">
    import tooltip from "@/state/tooltip/index.svelte";
    import Field from "@/ui/components/Fields/Field/index.svelte";

    interface IProps {
        id: string;
        label: string;
        value: number;
        autofocus?: boolean;
    }

    type TFocusEvent = FocusEvent & {
        currentTarget: EventTarget & HTMLInputElement;
    };

    let { id, value = $bindable() }: IProps = $props();

    function copyHandler() {
        if (!value && value !== 0) {
            throw new Error("An error occured when trying to copy");
        }

        if (!navigator.clipboard) {
            throw new Error("Copy not available");
        }

        if (navigator.clipboard) {
            navigator.clipboard.writeText(`${value}${id}`);
            tooltip.info(`Copied ${value}${id}`);
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
            tooltip.info("Double click to copy");
        }, 3000); // TODO: add to settings and make possibility to disable
    }

    function mouseOutHandler() {
        tooltip.hide();
        if (!timeout) {
            return;
        }

        clearTimeout(timeout);
        timeout = null;
    }
</script>

<Field
    {id}
    after={id}
    type="number"
    bind:value
    onfocus={focusHandler}
    onblur={blurHandler}
    onmouseover={mouseOverHandler}
    onmouseout={mouseOutHandler}
    ondblclick={copyHandler}
    fieldClass="text-7xl text-purple-600"
    afterClass="text-5xl mb-4"
    step=".01"
/>
