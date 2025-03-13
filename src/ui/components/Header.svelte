<script lang="ts">
  import { page } from "$app/state";
</script>

<header class="white">
  <nav>
    <ul>
      <li aria-current={page.url.pathname === "/" ? "page" : undefined}>
        <a href="/">Home</a>
      </li>
      <li
        aria-current={page.url.pathname.startsWith("/sverdle")
          ? "page"
          : undefined}
      >
        <a href="/css-units">CSS Units</a>
      </li>
    </ul>
  </nav>
</header>

<style>
</style>
