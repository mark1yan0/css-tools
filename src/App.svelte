<script lang="ts">
    import Header from "@/ui/layouts/Header/index.svelte";
    import Footer from "@/ui/layouts/Footer/index.svelte";
    import CssUnits from "./ui/pages/css-units/index.svelte";
    import Tooltip from "@/ui/components/Tooltip/index.svelte";
    import themeManager from "@/state/theme/index.svelte";
    import tooltip from "@/state/tooltip/index.svelte";
    import { onMount } from "svelte";

    class CursorManager {
        private targets = new Set<{
            initial: string;
            el: HTMLElement;
        }>();
        constructor() {
            this.init();
        }

        init() {
            window.addEventListener("mouseover", (event) => {
                const target = event.target as HTMLElement | null;

                if (!target) {
                    return;
                }

                // Must NOT have any child elements
                const hasOnlyText = target.children.length === 0;

                // Must have meaningful (non-whitespace) text content
                const hasText =
                    target.textContent && target.textContent.trim().length > 0;

                const isLink = target.tagName === "A";
                const isInput = target.tagName === "INPUT";

                if ((hasOnlyText && hasText) || isLink || isInput) {
                    // TODO: account for inputs and links
                    this.targets.add({
                        initial: target.style.backgroundColor,
                        el: target,
                    });
                    target.style.backgroundColor = "red";
                    const computedStyle = getComputedStyle(target);
                    tooltip.info(computedStyle.fontSize, {
                        autoHide: false,
                    });
                }
            });

            window.addEventListener("mouseout", (event) => {
                this.targets.forEach((t) => {
                    t.el.style.backgroundColor = t.initial;
                });

                this.targets.clear();
                tooltip.hide();
            });
        }
    }

    // init theme
    onMount(() => {
        themeManager.init();
        new CursorManager();
    });

    let tabId = $state("");
    async function run() {
        // chrome can be access because `"permissions": ["scripting"],` in the manifest
        const [tab] = await chrome.tabs.query({ active: true });
        if (!tab.id) {
            return;
        }

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => {
                tabId = tab.id ?? "not found";
                alert(tab.id);
            },
        });
    }
</script>

<Header />

<main class="h-[18rem] m-4">
    <CssUnits />
    <Tooltip />
    <button onclick={run}>run</button>
    {tabId}
</main>

<Footer />
