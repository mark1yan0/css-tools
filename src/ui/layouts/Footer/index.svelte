<script lang="ts">
    import ThemeSwitcher from "@/ui/components/ThemeSwitcher/index.svelte";
    import GitHubIcon from "@/assets/icons/github.svelte";
    import BaseUnit from "@/ui/pages/css-units/base_unit.svelte";
</script>

<footer id="footer" class="flex items-center justify-between p-4">
    <div class="flex gap-4">
        <ThemeSwitcher />
        <BaseUnit />
    </div>

    <div
        class="text-gray-400 bg-zinc-800 border border-zinc-700 px-2 w-fit rounded hover:border-purple-500"
    >
        <a
            href="https://github.com/mark1yan0"
            target="_blank"
            class="group flex gap-2 items-center text-sm hover:text-purple-500 focus-visible:text-purple-500"
        >
            <GitHubIcon />
            GitHub
        </a>
    </div>
</footer>
