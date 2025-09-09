<script lang="ts">
    import themeManager from "@/state/theme/index.svelte";
</script>

<img
    src={themeManager.isDark()
        ? "/images/logo-v1-light.png"
        : "/images/logo-v1-dark.png"}
    alt="css tools logo"
    class="w-12"
/>
