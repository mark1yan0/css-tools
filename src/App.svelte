<script lang="ts">
    import Header from "@/ui/layouts/Header/index.svelte";
    import Footer from "@/ui/layouts/Footer/index.svelte";
    import Tooltip from "@/ui/components/Tooltip/index.svelte";
    import themeManager from "@/state/theme/index.svelte";
    import { onMount } from "svelte";
    import Routes from "./ui/pages/routes.svelte";

    // init theme
    onMount(() => {
        themeManager.init();
    });
</script>

<Header />

<main class="h-[18rem] m-4">
    <Routes />

    <Tooltip />
</main>

<Footer />
