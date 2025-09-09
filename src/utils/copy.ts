import tooltip from "@/state/tooltip/index.svelte";

function copy(value: string | number, message?: string) {
    if (!value && value !== 0) {
        throw new Error("An error occured when trying to copy");
    }

    if (!navigator.clipboard) {
        throw new Error("Copy not available");
    }

    if (navigator.clipboard) {
        navigator.clipboard.writeText(value.toString());
        tooltip.info(message ?? `Copied ${value}`);
    }
}

export default copy;
