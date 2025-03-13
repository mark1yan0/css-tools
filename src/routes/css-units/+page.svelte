<script lang="ts">
	let remValue = $state(1);
	let pxValue = $state(16);
	const baseSize = 16;

	type ChangeEvent = Event & {
		currentTarget: EventTarget & HTMLInputElement;
	};

	function remChangeHandler(event: ChangeEvent) {
		const x = event.currentTarget.valueAsNumber;
		remValue = x;
		pxValue = x * baseSize;
	}

	function pxChangeHandler(event: ChangeEvent) {
		const x = event.currentTarget.valueAsNumber;

		pxValue = x;
		remValue = x / baseSize;
	}

	function copy(type: 'rem' | 'px') {
		let value = '';
		switch (type) {
			case 'rem':
				value = remValue.toString().replace(',', '.');
				break;

			// px
			default:
				value = pxValue.toString();
				break;
		}

		if (!value) {
			throw new Error('An error occured when trying to copy');
		}

		if (!navigator.clipboard) {
			throw new Error('Copy not available');
		}

		if (navigator.clipboard) {
			navigator.clipboard.writeText(`${value}${type}`);
			// TODO: toast
			alert(`Copied ${value}${type}`);
		}
	}
</script>

<div id="unit-converter" class="w-full p-6 shadow-lg">
	<!-- <button onclick={toggleTheme}>toggle: {theme}</button> -->
	<h1 class="text-k-primary text-center text-2xl font-bold">Unit Converter</h1>
	<p class="mb-4 text-center text-gray-600">Convert between REM and pixels with precision</p>

	<div
		class="rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 p-4 text-center text-lg font-semibold text-white"
	>
		REM ↔ PX Converter
	</div>

	<div class="mt-4 space-y-4">
		<div>
			<label for="rem" class="block text-sm font-medium text-gray-700"> REM Value </label>
			<input
				type="number"
				name="rem"
				id="rem"
				value={remValue}
				oninput={remChangeHandler}
				step="any"
			/>
			<!-- TODO: make as svg (for coloring) -->
			<button onclick={() => copy('rem')}><img src="/images/copy.png" alt="Copy icon" /></button>
		</div>

		<div>
			<label for="px" class="block text-sm font-medium text-gray-700"> Pixel Value </label>
			<!-- Must always be int? -->
			<input name="px" id="px" type="number" value={pxValue} oninput={pxChangeHandler} step="any" />

			<!-- TODO: make as svg (for coloring) -->
			<button onclick={() => copy('px')}><img src="/images/copy.png" alt="Copy icon" /></button>
		</div>
	</div>

	<div class="mt-4 text-center text-sm text-gray-600">
		<p>⚡ Base size: <span class="font-semibold">{baseSize}px</span></p>
		<p>1rem = 16px on your current browser</p>
	</div>
</div>
