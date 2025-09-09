<script lang="ts">
    import router from "@/state/router/index.svelte";
    import ContrastIcon from "@/assets/icons/contrast.svelte";
    import TagsIcon from "@/assets/icons/tags.svelte";
    import Link from "@/ui/components/link/index.svelte";
</script>

<nav class="flex gap-4 items-center w-9/12 justify-end">
    <Link
        onclick={() => router.navigate("/css-units")}
        data-selected={router.match("/css-units")}
        class="p-1 rounded transition"
        aria-label="go to css units tool"
    >
        <TagsIcon />
    </Link>

    <Link
        data-selected={router.match("/contrast-ratio")}
        onclick={() => router.navigate("/contrast-ratio")}
        class="p-1 rounded transition"
        aria-label="go to contrast ratio tool"
    >
        <ContrastIcon />
    </Link>
</nav>
