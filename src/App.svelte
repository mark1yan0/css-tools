<script lang="ts">
    import "./app.css";
    let base = $state(16);
    let rem = $state(1);
    let px = $state(16);

    // TODO add ts intellisense for components
    // TODO solve ts issues
</script>

<main>
    <section class="converter">
        <input name="rem" <!-- label="REM" -- />
        unit="rem" value={rem}
        <!-- oninput={(e) => {
                px = e.target.value * base;
            }} -->
        type="number" />
        <input name="px" <!-- label="PX" -- />
        unit="px" value={px}
        type="number"
        <!-- oninput={(e) => {
                rem = e.target.value / base;
            }} -->
        />
    </section>

    <footer class="configs">
        <input name="base" <!-- label="Base" -- />
        value={base}
        <!-- oninput={(e) => {
                rem = px / e.target.value;
                px = rem * e.tartet.value;
            }} -->
        />
    </footer>
</main>
