import PropTypes from 'prop-types';

import { Tr, Td, Button } from './ContactsList.styled';
import UpdateContact from '../UpdateContact/UpdateContact';

export const ContactsList = ({
  contacts,
  deleteContact,
  renameContact,
  userUpdate,
  onSubmit,
}) => {
  return (
    <tbody>
      {contacts.map(({ id, name, number }) => {
        return (
          <Tr key={id}>
            <Td>
              {userUpdate === name ? (
                <UpdateContact
                  contactName={name}
                  contactId={id}
                  onSubmit={onSubmit}
                />
              ) : (
                name
              )}
            </Td>
            <Td>{number}</Td>
            <Td>
              <Button rename onClick={() => renameContact(id)}>
                rename
              </Button>
            </Td>
            <Td>
              <Button onClick={() => deleteContact(id)}>delete</Button>
            </Td>
          </Tr>
        );
      })}
    </tbody>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
  renameContact: PropTypes.func.isRequired,
  userUpdate: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};
