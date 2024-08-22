<script lang="ts">
	// import Input from './lib/Input.svelte';
	let base = 16;
	let rem;

	$: px = !rem ? null : rem * base;
</script>

<main>
	<!-- <Input name="rem" label="REM" />
	<Input name="px" label="PX" /> -->

	<label for="base">
		Base
		<input id="base" type="number" name="base" bind:value={base} />
	</label>

	<label for="rem">
		REM
		<input id="rem" type="number" name="rem" bind:value={rem} />
	</label>

	<label for="px">
		PX
		<input
			id="px"
			type="number"
			name="px"
			bind:value={px}
			on:input={() => {
				rem = px / base;
			}}
		/>
	</label>
</main>
