import { Contact } from "contact-manager/interface";
export class ContactUpdated {
  constructor(public contact: Contact) {}
}

export class ContactViewed {
  constructor(public contact: Contact) {}
}
