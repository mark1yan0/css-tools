<script lang="ts">
    import { twMerge } from "tailwind-merge";

    interface IProps {
        type: "fails" | "ok" | "pass";
        label: string;
        className?: string;
    }

    let props: IProps = $props();
</script>

<!-- TODO: icon -->
<span
    class={twMerge(
        "border rounded-full px-2",
        props.type === "fails" && "border-red-500 text-red-800 bg-red-200",
        props.type === "ok" &&
            "border-yellow-500 text-yellow-800 bg-yellow-200",
        props.type === "pass" && "border-green-500 text-green-800 bg-green-200",
    )}
>
    {props.label}
</span>
