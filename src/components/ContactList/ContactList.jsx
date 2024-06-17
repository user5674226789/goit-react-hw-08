import { useSelector } from "react-redux";

import { visibleContacts } from "../../redux/contacts/slice";
import css from "./ContactList.module.css";
import ContactItem from "../Contact/Contact";

export default function ContactList() {
  const filtrContacts = useSelector(visibleContacts);
  return (
    <ul className={css.list}>
      {filtrContacts.map((contact) => {
        return (
          <li key={contact.id}>
            <ContactItem contact={contact} />
          </li>
        );
      })}
    </ul>
  );
}
