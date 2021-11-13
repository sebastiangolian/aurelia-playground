import { bindingMode, bindable } from "aurelia-framework";
export class NoSelection {
  @bindable({ defaultBindingMode: bindingMode.toView }) public message =
    "No select element";
}
