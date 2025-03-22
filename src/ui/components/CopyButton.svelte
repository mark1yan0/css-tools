<script lang="ts">
    import Copy from "@/assets/icons/copy.svelte";

    const {
        value,
    }: {
        value: string;
    } = $props();

    function onclick() {
        if (!value) {
            throw new Error("An error occured when trying to copy");
        }

        if (!navigator.clipboard) {
            throw new Error("Copy not available");
        }

        if (navigator.clipboard) {
            navigator.clipboard.writeText(value);
            // TODO: toast
            alert(`Copied ${value}`);
        }
    }
</script>

<button
    class="hover:scale-125 transition-all duration-300 ease-in-out"
    {onclick}
>
    <Copy />
</button>

<style>
    button {
        cursor: copy;
    }
</style>
