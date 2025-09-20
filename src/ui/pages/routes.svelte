<script lang="ts">
    import CssUnits from "./css-units/index.svelte";
    import ContrastRatio from "./contrast-ratio/index.svelte";
    import Settings from "./settings/index.svelte";
    import Transition from "@/ui/transitions/index.svelte";

    import router from "@/state/router/index.svelte";
</script>

{#if router.match("/css-units")}
    <Transition>
        <CssUnits />
    </Transition>
{/if}

{#if router.match("/contrast-ratio")}
    <Transition>
        <ContrastRatio />
    </Transition>
{/if}

{#if router.match("/settings")}
    <Transition>
        <Settings />
    </Transition>
{/if}
