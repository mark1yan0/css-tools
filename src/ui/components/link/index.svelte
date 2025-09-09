<script lang="ts">
    import type { HTMLButtonAttributes } from "svelte/elements";
    import { twMerge } from "tailwind-merge";

    let props: HTMLButtonAttributes = $props();
</script>

<button
    {...props}
    class={twMerge(
        "container px-2 w-fit rounded hover:!border-[var(--accent)] flex gap-2 items-center text-sm hover:!text-[var(--accent)] focus-visible:text-[var(--accent)]",
        'data-[selected="true"]:!border-[var(--accent)] data-[selected="true"]:!text-[var(--accent)]',
        props.class?.toString() ?? "",
    )}
>
    {@render props.children?.()}
</button>
