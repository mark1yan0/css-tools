<script lang="ts">
    import copy from "@/utils/copy";

    interface IProps {
        id: string;
        label: string;
        value: string;
    }

    let { value = $bindable("fallback value"), id, label }: IProps = $props();
    let input: HTMLInputElement | null = null;

    function withElement<T extends HTMLElement>(element: T | null) {
        if (!element) {
            throw new Error("Element is null");
        }

        return element;
    }
</script>

<div class="flex flex-col items-center w-full gap-3">
    <button
        class="w-full h-15 rounded-full"
        style={`background-color: ${value}`}
        onclick={() => withElement(input).click()}
        aria-label="Open color picker"
    >
        <span class="text-white mix-blend-difference">
            {label}
        </span>
    </button>
    <input
        class="focus:outline-none field-sizing-content text-2xl"
        title={`${id}-input`}
        type="text"
        ondblclick={() => copy(value)}
        placeholder="HEX"
        name={`${id}-input`}
        id={`${id}-input`}
        bind:value
    />
    <input
        title={id}
        class="hidden"
        type="color"
        bind:this={input}
        name={id}
        {id}
        bind:value
        aria-hidden="true"
    />
</div>
