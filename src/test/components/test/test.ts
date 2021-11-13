import { bindable } from "aurelia-framework";
export class Test {
  @bindable submit: (user: User) => User;

  user: User = {
    firstName: "John",
    lastName: "Kowalsky",
  };
}

export interface User {
  firstName: string;
  lastName: string;
}
