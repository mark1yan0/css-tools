<script lang="ts">
    import tooltip from "@/state/tooltip/index.svelte";
    import Field from "@/ui/components/fields/field/index.svelte";
    import copy from "@/utils/copy";

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

    function focusHandler(event: TFocusEvent) {
        if (!event.currentTarget) {
            return;
        }

        const target = event.currentTarget;
        target.select();

        target.style.color = "var(--text)";
    }

    function blurHandler(event: TFocusEvent) {
        if (!event.currentTarget) {
            return;
        }

        const target = event.currentTarget;

        target.style.color = "var(--primary)";
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
    ondblclick={() => copy(`${value}${id}`, `Copied ${value}${id}`)}
    fieldClass="text-7xl text-[var(--primary)]"
    afterClass="text-5xl mb-4"
    step=".01"
/>
