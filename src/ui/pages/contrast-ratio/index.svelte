<script lang="ts">
    import Field from "@/ui/components/Field/index.svelte";
    import Chip from "@/ui/components/Chip/index.svelte";

    // fields
    let text = $state("#FFFFFF"); // white
    let bg = $state("#000000"); // black
    let score = $state(1);

    // compliance ui
    let sm = $state(getScoreUi(21, "sm"));
    let lg = $state(getScoreUi(21, "lg"));

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

    function getScoreUi(score: number, type: "sm" | "lg") {
        const threshold = type === "sm" ? 4.5 : 3;
        const midThreshold = type === "sm" ? 7 : 4.5;

        if (score < threshold) {
            return {
                type: "fails" as const,
                label: "Fails",
            };
        }

        if (score >= threshold && score <= midThreshold) {
            return {
                type: "ok" as const,
                label: "Ok",
            };
        }

        // pass
        return {
            type: "pass" as const,
            label: "Pass",
        };
    }

    $effect(() => {
        let contrast = getContrastRatio(text, bg);
        score = parseFloat(contrast);
        sm = getScoreUi(score, "sm");
        lg = getScoreUi(score, "lg");
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
                Large text: <strong>3:1</strong>
                <Chip type={lg.type} label={lg.label} />
            </p>
            <p>
                Small text <strong>4.5:1</strong>
                <Chip type={sm.type} label={sm.label} />
            </p>
        </div>
    </div>
</section>
