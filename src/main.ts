import { mount } from "svelte";
import "./app.css";
import App from "./App.svelte";

if (import.meta.env.DEV) {
    import("./dev.css").then(() => {
        document.getElementById("app")!.classList.add("development");
    });
}

const app = mount(App, {
    target: document.getElementById("app")!,
});

export default app;
