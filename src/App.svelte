<script lang="ts">
    import Header from "@/ui/layouts/header/index.svelte";
    import Footer from "@/ui/layouts/footer/index.svelte";
    import Tooltip from "@/ui/components/tooltip/index.svelte";
    import themeManager from "@/state/theme/index.svelte";
    import { onMount } from "svelte";
    import Routes from "./ui/pages/routes.svelte";

    // init theme
    onMount(() => {
        themeManager.init();
    });
</script>

<Header />

<main class="h-full m-4 flex-1">
    <Routes />

    <Tooltip />
</main>

<Footer />
