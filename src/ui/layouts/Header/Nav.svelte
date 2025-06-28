<script lang="ts">
    import router from "@/state/router/index.svelte";
</script>

<nav>
    <!-- <button onclick={() => router.navigate("/")}> / </button> -->

    <button onclick={() => router.navigate("/css-units")}> css units </button>

    <button onclick={() => router.navigate("/contrast-ratio")}>
        contrast ratio
    </button>
</nav>
