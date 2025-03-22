<script lang="ts">
    let {
        id,
        type,
        label,
        value = $bindable(),
        autofocus,
    }: {
        id: string;
        type: string;
        label: string;
        value: string;
        autofocus?: boolean;
    } = $props();
</script>

<!-- TODO: copy on dbclick -->

<label for={id} class="block text-gray-700 text-sm font-medium">
    {label}
</label>
<input
    {type}
    name={id}
    {id}
    bind:value
    class="text-9xl w-full text-center focus:outline-none"
    onfocus={(event) => event.target.select()}
/>

<style>
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>
