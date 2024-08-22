<script lang="ts">
	export let name: string,
		label: string,
		value: string | number,
		onInput: svelte.JSX.FormEventHandler<HTMLInputElement> = undefined;
</script>

<label for={name}>
	{label}
	<input id={name} type="number" {name} bind:value on:input={onInput} />
</label>

<style>
	label {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
</style>
