import { useState } from 'react';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { Notification } from './Notification/Notification';
import Form from './Form/Form';

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts');
  const [filter, setFilter] = useState('');
  const [userUpdate, setUserUpdate] = useState(null);

  const formSubmitHandler = (name, number) => {
    const contact = contacts.some(contact => contact.name === name);
    contact
      ? alert(`${name} is already in contacts`)
      : setContacts(state => [...state, { id: nanoid(), name, number }]);
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const renameContact = id => {
    const { name } = contacts.find(contact => contact.id === id);
    setUserUpdate(name);
  };

  const updateName = (id, name) => {
    const updateContact = contacts.map(contact => {
      if (contact.id === id) {
        return { ...contact, name };
      }
      return contact;
    });
    setContacts(updateContact);
    setUserUpdate(null);
  };

  const filtered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Section title="Phonebook">
        <Form onSubmit={formSubmitHandler} />
      </Section>
      <Section title="Contacts">
        {contacts.length ? (
          <>
            <Filter value={filter} onChange={changeFilter} />

            <Contacts
              contacts={filtered}
              deleteContact={deleteContact}
              renameContact={renameContact}
              userUpdate={userUpdate}
              onSubmit={updateName}
            />
          </>
        ) : (
          <Notification message="There are no entries in the phone book" />
        )}
      </Section>
    </>
  );
};

export default App;
