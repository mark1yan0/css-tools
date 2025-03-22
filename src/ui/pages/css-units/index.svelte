<script lang="ts">
    import Copy from "@/assets/icons/copy.svelte";
    import Converter from "./converter.svelte.ts";

    const converter = new Converter();
</script>

<div id="unit-converter" class="shadow-lg p-6 w-full">
    <!-- <button onclick={toggleTheme}>toggle: {theme}</button> -->
    <h1 class="text-2xl font-bold text-center text-k-primary">
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
            <label for="rem" class="block text-gray-700 text-sm font-medium">
                REM Value
            </label>
            <input
                type="number"
                name="rem"
                id="rem"
                bind:value={converter.rem}
            />
            <button
                class="hover:scale-125"
                onclick={() => converter.copy("rem")}
            >
                <Copy />
            </button>
        </div>

        <div>
            <label for="px" class="block text-gray-700 text-sm font-medium">
                Pixel Value
            </label>
            <!-- Must always be int? -->
            <input name="px" id="px" type="number" bind:value={converter.px} />

            <button class="hover:scale-125" onclick={() => converter.copy("px")}
                ><Copy /></button
            >
        </div>
    </div>

    <div class="mt-4 text-center text-gray-600 text-sm">
        <p>
            ⚡ Base size: <span class="font-semibold">{converter.base}px</span>
        </p>
        <p>1rem = 16px on your current browser</p>
    </div>
</div>
