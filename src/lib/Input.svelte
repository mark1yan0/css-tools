<script lang="ts">
	export let name: string,
		label: string,
		onInput: svelte.JSX.FormEventHandler<HTMLInputElement>;
</script>

<label for={name}>
	{label}
	<input id={name} type="number" {name} on:input={onInput} />
</label>
