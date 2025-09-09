<script lang="ts">
    import InfoIcon from "@/assets/icons/info.svelte";

    import { onMount } from "svelte";
    import { blur } from "svelte/transition";
    import tooltip from "@/state/tooltip/index.svelte";

    const mousePosition = { x: 0, y: 0 };
    const offset = { x: 16, y: 16 };

    function handleMouseMove(event: MouseEvent) {
        mousePosition.x = event.clientX + offset.x;
        mousePosition.y = event.clientY + offset.y;
    }

    // Attach the event listener when the component is mounted
    onMount(() => {
        window.addEventListener("mousemove", handleMouseMove);

        // Clean up the event listener when the component is destroyed
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    });
</script>

{#if tooltip.shown}
    <span
        transition:blur={{
            duration: 150,
        }}
        data-severity={tooltip.severity}
        class="absolute data-[severity=info]:bg-purple-600 text-white px-2 py-1 rounded-md shadow-md flex items-center gap-2 w-fit"
        style="left: {mousePosition.x}px; top: {mousePosition.y}px;"
    >
        <InfoIcon />
        {tooltip.message}
    </span>
{/if}

<style>
</style>
