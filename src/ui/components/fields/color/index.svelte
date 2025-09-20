<script lang="ts">
    import copy from "@/utils/copy";

    interface IProps {
        id: string;
        label: string;
        value: string;
        variant?: "default" | "compact";
    }

    let {
        value = $bindable("fallback value"),
        id,
        label,
        variant = "default",
    }: IProps = $props();
    let input: HTMLInputElement | null = null;

    function withElement<T extends HTMLElement>(element: T | null) {
        if (!element) {
            throw new Error("Element is null");
        }

        return element;
    }
</script>

{#if variant === "default"}
    <div class="flex flex-col items-center w-full gap-3">
        <button
            class="w-full h-15 rounded-full"
            style={`background-color: ${value}`}
            onclick={() => withElement(input).click()}
            aria-label="Open color picker"
        >
            <label for={id} class="text-white mix-blend-difference">
                {label}
            </label>
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
    </div>
{/if}

{#if variant === "compact"}
    <div class="flex gap-2 items-center text-sm">
        <button
            class="w-15 h-15 rounded-full"
            style={`background-color: ${value}`}
            onclick={() => withElement(input).click()}
            aria-label="Open color picker"
        >
        </button>
        <div>
            <label for={id}>
                {label}
            </label>
            <input
                class="block focus:outline-none field-sizing-content"
                title={`${id}-input`}
                type="text"
                ondblclick={() => copy(value)}
                placeholder="HEX"
                name={`${id}-input`}
                id={`${id}-input`}
                bind:value
            />
        </div>
    </div>
{/if}

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
