<script lang="ts">
    import type { Snippet } from "svelte";
    import { fade } from "svelte/transition";

    interface IProps {
        children?: Snippet;
    }

    let props: IProps = $props();

    // TODO: implement settings to control duration
    let duration = $state(150);
    let delay = $derived(duration + 50);
</script>

<div id="transition-container" class="h-full" in:fade={{ delay, duration }}>
    {@render props.children?.()}
</div>
