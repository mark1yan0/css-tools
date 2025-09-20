<script lang="ts">
    import ThemeSwitcher from "@/ui/components/theme-switcher/index.svelte";
    import GitHubIcon from "@/assets/icons/github.svelte";
    import BaseUnit from "@/ui/pages/css-units/base_unit.svelte";
    import Cog from "@/assets/icons/cog.svelte";
    import Button from "@/ui/components/button/index.svelte";

    import router from "@/state/router/index.svelte";
</script>

<footer
    id="footer"
    class="flex items-center p-4 min-h-[3.625rem] justify-between"
>
    <div class="flex gap-4">
        <ThemeSwitcher />
        {#if router.match("/css-units")}
            <BaseUnit />
        {/if}
    </div>

    <div class="flex gap-2 items-center">
        <a
            href="https://github.com/mark1yan0"
            target="_blank"
            class="container group p-1 w-fit rounded hover:!border-[var(--primary)] flex gap-2 items-center text-sm hover:!text-[var(--primary)] focus-visible:text-[var(--primary)]"
        >
            <GitHubIcon />
        </a>
        <Button
            onclick={() => router.navigate("/settings")}
            data-selected={router.match("/settings")}
        >
            <Cog />
        </Button>
    </div>
</footer>
