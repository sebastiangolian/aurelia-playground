import { inject } from "aurelia-framework";
import { WebAPI } from "./../../../web-api";
import { EventAggregator } from "aurelia-event-aggregator";
import { Contact } from "contact-manager/interface";
import { bindable, bindingMode } from "aurelia-framework";

@inject(WebAPI, EventAggregator)
export class ContactDetail {
  @bindable({ defaultBindingMode: bindingMode.toView }) contact: Contact;
  @bindable({ defaultBindingMode: bindingMode.toView }) isRequesting: boolean;
  @bindable save: (contact: Contact) => Contact;

  get canSave() {
    return (
      this.contact.firstName && this.contact.lastName && !this.isRequesting
    );
  }
}
