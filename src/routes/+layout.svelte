<script lang="ts">
  import Header from "@/ui/layouts/Header.svelte";
  import Footer from "@/ui/layouts/Footer.svelte";

  let { children } = $props();
</script>

<div class="app">
  <Header />

  <main>
    {@render children()}
  </main>

  <Footer />
</div>

<style>
  .app {
    /* @apply flex flex-col min-h-screen bg-red-400; */
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
