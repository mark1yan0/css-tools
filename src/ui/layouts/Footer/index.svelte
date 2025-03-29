<script lang="ts">
    import FloatingContainer from "@/ui/components/FloatingContainer/index.svelte";
    import GitHubIcon from "@/assets/icons/github.svelte";
    import BaseUnit from "@/ui/pages/css-units/base_unit.svelte";
</script>

<footer class="mt-10 flex items-center justify-between">
    <BaseUnit />

    <div
        class="text-gray-400 bg-zinc-800 border border-zinc-700 px-2 w-fit rounded"
    >
        <a
            href="https://github.com/mark1yan0"
            target="_blank"
            class="group flex gap-2 items-center text-sm hover:text-purple-500"
        >
            <GitHubIcon />
            GitHub
        </a>
    </div>
</footer>
