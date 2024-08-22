<script lang="ts">
	import Input from './lib/Input.svelte';
	let base = 16;
	let rem;

	$: px = !rem ? null : rem * base;
</script>

<main>
	<section class="converter">
		<Input name="rem" label="REM" bind:value={rem} />
		<Input
			name="px"
			label="PX"
			bind:value={px}
			onInput={() => {
				rem = px / base;
			}}
		/>
	</section>

	<footer class="configs">
		<Input name="base" label="Base" bind:value={base} />
	</footer>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	section.converter {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	@media only screen and (min-width: 600px) {
		section.converter {
			flex-direction: row;
		}
	}

	footer {
		padding: 0.5rem;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100vw;
	}
</style>
