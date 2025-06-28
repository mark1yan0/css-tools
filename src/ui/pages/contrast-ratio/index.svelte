<script lang="ts">
    import Field from "@/ui/components/Field/index.svelte";
    import Chip from "@/ui/components/Chip/index.svelte";
    let text = $state("#FFFFFF"); // white
    let bg = $state("#000000"); // black
    let score = $state(1);

    // Convert hex color to RGB array
    function hexToRgb(hex: string) {
        hex = hex.replace("#", "");
        if (hex.length === 3) {
            hex = hex
                .split("")
                .map((c) => c + c)
                .join("");
        }
        const bigint = parseInt(hex, 16);
        return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255].map(
            (c) => c / 255,
        );
    }

    // Calculate relative luminance
    function getLuminance([r, g, b]: number[]) {
        const adjust = (c: number) =>
            c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);

        const [R, G, B] = [adjust(r), adjust(g), adjust(b)];
        return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    }

    // Calculate contrast ratio
    function getContrastRatio(hex1: string, hex2: string) {
        const lum1 = getLuminance(hexToRgb(hex1));
        const lum2 = getLuminance(hexToRgb(hex2));

        const lighter = Math.max(lum1, lum2);
        const darker = Math.min(lum1, lum2);

        return ((lighter + 0.05) / (darker + 0.05)).toFixed(2);
    }

    // let score = $state(getContrastRatio(text, bg))
    let sm = $state(getScoreUi(21, "small"));
    let lg = $state(getScoreUi(21, "large"));
    function getScoreUi(score: number, type: "small" | "large") {
        const threshold = type === "small" ? 4.5 : 3;
        // const fails = type === 'small' ? 4.5 : 3
        // const ok = type === 'small' ? 3 : 5 // TODO: handle
        // const pass = type === 'small' ? 3 : 5 // TODO: handle

        if (score < threshold) {
            // TODO: udjast
            return {
                type: "fails",
                label: "Fails",
            };
        }

        if (score < 15) {
            return {
                type: "ok",
                label: "Ok",
            };
        }

        // pass
        return {
            type: "pass",
            label: "Pass",
        };
    }

    $effect(() => {
        let contrast = getContrastRatio(text, bg);
        score = parseFloat(contrast);
        sm = getScoreUi(score, "small");
        lg = getScoreUi(score, "large");
    });
</script>

<section id="contrast" class="flex flex-col justify-between h-full">
    <Field
        id="text"
        type="color"
        label="Text color"
        fieldClass="w-full block"
        bind:value={text}
    />
    {text}

    <Field
        id="bg"
        type="color"
        label="Background color"
        fieldClass="w-full block"
        bind:value={bg}
    />
    {bg}

    <div class="flex gap-2 mt-2 items-center">
        <strong
            class="rounded-full text-4xl mx-auto min-w-20 min-h-20 flex items-center justify-center bg-gray-100 text-gray-700"
        >
            {score}
        </strong>
        <div class="bg-zinc-800 border border-zinc-700 p-2 rounded flex-1">
            <h2>WCAG AA</h2>

            <p>
                Large text: <strong>4.5:1</strong>
                <Chip type={lg.type} label={lg.label} />
            </p>
            <p>
                Small text <strong>3:1</strong>
                <Chip type={lg.type} label={lg.label} />
            </p>
        </div>
    </div>
</section>
