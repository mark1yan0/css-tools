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
</script>

<div class="bg-k-surface-10 shadow-lg rounded-2xl p-6 w-full max-w-md m-auto">
	<h1 class="text-2xl font-bold text-center text-purple-600">
		Unit Converter
	</h1>
	<p class="text-gray-600 text-center mb-4">
		Convert between REM and pixels with precision
	</p>

	<div
		class="bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl p-4 text-white text-lg font-semibold text-center"
	>
		REM ↔ PX Converter
	</div>

	<div class="mt-4 space-y-4">
		<div>
			<label for="rem" class="block text-gray-700 text-sm font-medium"
				>REM Value</label
			>
			<input
				type="number"
				name="rem"
				id="rem"
				value={remValue}
				oninput={remChangeHandler}
			/>
		</div>

		<div>
			<label for="px" class="block text-gray-700 text-sm font-medium"
				>Pixel Value</label
			>
			<input
				name="px"
				id="px"
				type="number"
				value={pxValue}
				oninput={pxChangeHandler}
			/>
		</div>
	</div>

	<div class="mt-4 text-center text-gray-600 text-sm">
		<p>⚡ Base size: <span class="font-semibold">{baseSize}px</span></p>
		<p>1rem = 16px on your current browser</p>
	</div>
</div>
