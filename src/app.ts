import { Router, RouterConfiguration } from "aurelia-router";
import { PLATFORM } from "aurelia-pal";
import { WebAPI } from "web-api";

export class App {
  router: Router;

  constructor(public api: WebAPI) {}

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = "Contacts";
    config.options.pushState = false;
    config.options.root = "/";
    config.map([
      {
        route: "/",
        moduleId: PLATFORM.moduleName("todo/components/todos/todos"),
        name: "todos",
      },
      {
        route: "contacts",
        moduleId: PLATFORM.moduleName(
          "contact-manager/pages/contact-manager/contact-manager"
        ),
        name: "contacts",
      },
      {
        route: "contacts/:id",
        moduleId: PLATFORM.moduleName(
          "contact-manager/pages/contact-manager/contact-manager"
        ),
        name: "contacts-details",
      },
      {
        route: "todos",
        moduleId: PLATFORM.moduleName("todo/components/todos/todos"),
        name: "todos",
      },
    ]);

    this.router = router;
  }
}
