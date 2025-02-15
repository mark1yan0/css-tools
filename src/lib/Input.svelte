<script lang="ts">
    import type { FormEventHandler } from "svelte/elements";
    import CopySvg from "./CopySVG.svelte";

    export let name: string,
        label: string,
        value: string | number,
        unit: string | null = null,
        copyOnClick: boolean | null = null,
        onInput: FormEventHandler<HTMLInputElement> | null = null;

    async function copyOnClickHandler() {
        if (!unit) {
            throw new Error("A unit must be provided");
        }

        if ("clipboard" in navigator) {
            await navigator.clipboard.writeText(
                `${value.toString().replace(",", ".")}${unit}`,
            );
        }
    }
</script>

<label for={name}>
    {label}

    <span class="input-wrapper">
        {#if copyOnClick}
            <button on:click={copyOnClickHandler}>
                <CopySvg />
            </button>
        {/if}
        <input id={name} type="number" {name} bind:value on:input={onInput} />
    </span>

    {#if unit}
        <span class="unit-span">{unit}</span>
    {/if}
</label>

<style>
    label {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
        position: relative;
    }

    .input-wrapper {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    button {
        border-radius: 100em;
        /* padding: 1rem; */
    }

    label > .unit-span {
        position: absolute;
        top: 53%;
        right: 5%;
        background-color: var(--dark-darker);
    }
</style>
