<script lang="ts">
    import themeManager from "@/state/theme/index.svelte";
</script>

<!-- TODO: should be svg so that color is changable -->
<img
    src={themeManager.is("dark")
        ? "/images/logo-v1-light.png"
        : "/images/logo-v1-dark.png"}
    alt="css tools logo"
    class="w-12"
/>
