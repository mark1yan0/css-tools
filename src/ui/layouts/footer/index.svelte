<script lang="ts">
    import ThemeSwitcher from "@/ui/components/theme-switcher/index.svelte";
    import GitHubIcon from "@/assets/icons/github.svelte";
    import BaseUnit from "@/ui/pages/css-units/base_unit.svelte";

    import router from "@/state/router/index.svelte";
    import { twMerge } from "tailwind-merge";
</script>

<footer
    id="footer"
    class="flex items-center justify-between p-4 min-h-[3.625rem]"
>
    <div class="flex gap-4">
        <ThemeSwitcher />
        {#if router.match("/css-units")}
            <BaseUnit />
        {/if}
    </div>

    <a
        href="https://github.com/mark1yan0"
        target="_blank"
        class="container group px-2 w-fit rounded hover:!border-[var(--accent)] flex gap-2 items-center text-sm hover:!text-[var(--accent)] focus-visible:text-[var(--accent)]"
    >
        <GitHubIcon />
        GitHub
    </a>
</footer>
