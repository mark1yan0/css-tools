<script lang="ts">
	import Input from './lib/Input.svelte';
	let base = 16;
	let rem;

	$: px = !rem ? null : rem * base;
</script>

<main>
	<Input name="base" label="Base" bind:value={base} />
	<Input name="rem" label="REM" bind:value={rem} />
	<Input
		name="px"
		label="PX"
		bind:value={px}
		onInput={() => {
			rem = px / base;
		}}
	/>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
