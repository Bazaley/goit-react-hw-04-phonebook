import { useState } from 'react';

const UpdateContact = ({ contactId, contactName, onSubmit }) => {
  const [name, setName] = useState(contactName);

  const handleChange = e => {
    const { value } = e.target;
    setName(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log(name);
    onSubmit(contactId, name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    </form>
  );
};

export default UpdateContact;
