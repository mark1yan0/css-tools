<script lang="ts">
    import Header from "@/ui/layouts/Header/index.svelte";
    import Footer from "@/ui/layouts/Footer/index.svelte";
    import CssUnits from "./ui/pages/css-units/index.svelte";
    import CursorNotice from "@/ui/components/Cursor/Notice/index.svelte";
    import themeManager from "@/state/theme/index.svelte";
    import { onMount } from "svelte";

    // init theme
    onMount(() => {
        themeManager.init();
    });
</script>

<Header />

<main class="h-[18rem] m-4">
    <CssUnits />
    <CursorNotice />
</main>

<Footer />
