<script lang="ts">
    import type { HTMLButtonAttributes } from "svelte/elements";
    import { twMerge } from "tailwind-merge";

    let props: HTMLButtonAttributes = $props();
</script>

<button
    {...props}
    class={twMerge(
        "p-1 rounded transition",
        "container w-fit hover:!border-[var(--primary)] flex gap-2 items-center text-sm hover:!text-[var(--primary)] focus-visible:text-[var(--primary)]",
        'data-[selected="true"]:!border-[var(--primary)] data-[selected="true"]:!text-[var(--primary)]',
        props.class?.toString() ?? "",
    )}
>
    {@render props.children?.()}
</button>
