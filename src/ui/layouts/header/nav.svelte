<script lang="ts">
    import router from "@/state/router/index.svelte";
    import ContrastIcon from "@/assets/icons/contrast.svelte";
    import TagsIcon from "@/assets/icons/tags.svelte";
    import Button from "@/ui/components/button/index.svelte";
</script>

<nav class="flex gap-4 items-center w-9/12 justify-end">
    <Button
        onclick={() => router.navigate("/css-units")}
        data-selected={router.match("/css-units")}
        aria-label="go to css units tool"
    >
        <TagsIcon />
    </Button>

    <Button
        data-selected={router.match("/contrast-ratio")}
        onclick={() => router.navigate("/contrast-ratio")}
        aria-label="go to contrast ratio tool"
    >
        <ContrastIcon />
    </Button>
</nav>
