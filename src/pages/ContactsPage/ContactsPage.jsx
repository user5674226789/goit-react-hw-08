import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import css from './ContactPage.module.css'
import PageTitle from "../../components/PageTitle/PageTitle";

export default function ContactPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <div>
        <PageTitle>Phonebook </PageTitle>
      
        <ContactForm />
        <SearchBox />
        <ContactList />
        {isLoading && <Loader>Loading message</Loader>}
        {isError && <ErrorMessage />}
      </div>
    </>
  );
}
