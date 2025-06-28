import type { TRoutes } from "@/interfaces";

class Router {
    private static instance: Router;
    public route: TRoutes = $state("/contrast-ratio");

    constructor() {}

    public static getInstance(): Router {
        if (!Router.instance) {
            Router.instance = new Router();
        }
        return Router.instance;
    }

    public navigate(route: TRoutes) {
        this.route = route;
    }
}

export default Router.getInstance();
