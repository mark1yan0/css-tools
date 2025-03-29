<script lang="ts">
    import { twMerge } from "tailwind-merge";

    type TFocusEvent = FocusEvent & {
        currentTarget: EventTarget & HTMLInputElement;
    };

    interface IProps {
        id: string;
        type: string;
        value: number;
        fieldClass?: string;
        label?: string;
        labelClass?: string;
        autofocus?: boolean;
        after?: string;
        afterClass?: string;
        onfocus?: (event: TFocusEvent) => void;
        onblur?: (event: TFocusEvent) => void;
        onmouseover?: (event: MouseEvent) => void;
        onmouseout?: (event: MouseEvent) => void;
        ondblclick?: (event: MouseEvent) => void;
        step?: string | number;
    }

    let {
        id,
        type,
        fieldClass,
        label,
        labelClass,
        afterClass,
        value = $bindable(),
        after,
        onblur,
        onfocus,
        onmouseover,
        onmouseout,
        ondblclick,
        step,
    }: IProps = $props();
</script>

{#if label}
    <label for={id} class={twMerge("block font-medium", labelClass)}>
        {label}
    </label>
{/if}

<span class="relative">
    <input
        {type}
        name={id}
        {id}
        bind:value
        class={twMerge(
            "text-center focus:outline-none field-sizing-content",
            fieldClass,
        )}
        {onfocus}
        {onblur}
        {onmouseover}
        {onmouseout}
        {ondblclick}
        {step}
    />
    {#if after}
        <span class={twMerge("absolute bottom-0", afterClass)}>
            {after}
        </span>
    {/if}
</span>

<style>
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>
