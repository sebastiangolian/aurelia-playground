import { bindingMode, bindable } from "aurelia-framework";
import { Contact } from "contact-manager/interface";

export class ContactList {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) selectedId = "";
  @bindable() contacts: Contact[] = [];
  @bindable select?: (contact: Contact) => Contact;

  onSelect(contact: Contact): void {
    this.select(contact);
    this.selectedId = contact.id;
  }
}
