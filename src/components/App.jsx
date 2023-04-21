import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout.styled';
import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { TitleH1, TitleH2 } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading, getError } from '../redux/selectors';
import { fetchContacts } from '../redux/operations';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Layout>
      <TitleH1>Phonebook</TitleH1>
      <ContactForm />
      <TitleH2>Contacts</TitleH2>
      <Filter />
      <ContactList />
      <div>{isLoading && !error && <b>Request in progress...</b>}</div>
      <GlobalStyle />
    </Layout>
  );
};
