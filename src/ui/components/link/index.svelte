<script lang="ts">
    import type { HTMLButtonAttributes } from "svelte/elements";
    import { twMerge } from "tailwind-merge";

    let props: HTMLButtonAttributes = $props();
</script>

<button
    {...props}
    class={twMerge(
        "text-gray-400 bg-zinc-800 border border-zinc-700 px-2 w-fit rounded hover:border-purple-500 flex gap-2 items-center text-sm hover:text-purple-500 focus-visible:text-purple-500",
        'data-[selected="true"]:border-purple-500 data-[selected="true"]:text-purple-500',
        props.class?.toString() ?? "",
    )}
>
    {@render props.children?.()}
</button>
