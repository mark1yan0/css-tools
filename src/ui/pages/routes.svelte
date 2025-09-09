<script lang="ts">
    import CssUnits from "./css-units/index.svelte";
    import ContrastRatio from "./contrast-ratio/index.svelte";
    import Transition from "@/ui/transitions/index.svelte";

    import router from "@/state/router/index.svelte";
</script>

{#if router.route === "/" || router.route === "/css-units"}
    <Transition>
        <CssUnits />
    </Transition>
{:else}
    <Transition>
        <ContrastRatio />
    </Transition>
{/if}
