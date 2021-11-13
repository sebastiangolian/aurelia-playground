import { inject } from "aurelia-dependency-injection";
import { EventAggregator } from "aurelia-event-aggregator";
import { Contact } from "contact-manager/interface";
import { ContactUpdated, ContactViewed } from "contact-manager/messages";
import { WebAPI } from "web-api";

@inject(WebAPI, EventAggregator)
export class ContactManager {
  contacts: Contact[];
  contact!: Contact;
  originalContact: Contact;

  constructor(public api: WebAPI, public ea: EventAggregator) {
    ea.subscribe(ContactViewed, (msg) => this.onSelect(msg.contact));
    ea.subscribe(ContactUpdated, (msg) => {
      const found = this.contacts.find((x) => x.id == this.contact.id);
      Object.assign(found, msg.contact);
    });
  }

  created() {
    this.api.getContactList().then((contacts) => {
      this.contacts = contacts;
      //this.contact = contacts[0];
    });
  }

  onSelect(contact: Contact) {
    this.contact = JSON.parse(JSON.stringify(contact));
  }

  onSave(contact: Contact) {
    this.api.saveContact(contact).then((contact) => {
      this.contact = <Contact>contact;
      this.originalContact = JSON.parse(JSON.stringify(contact));
      this.ea.publish(new ContactUpdated(contact));
    });
  }
}
