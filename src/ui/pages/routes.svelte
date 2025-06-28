<script lang="ts">
    import CssUnits from "./css-units/index.svelte";
    import ContrastRatio from "./contrast-ratio/index.svelte";

    import router from "@/state/router/index.svelte";
</script>

{#if router.route === "/" || router.route === "/css-units"}
    <CssUnits />
{:else}
    <ContrastRatio />
{/if}
