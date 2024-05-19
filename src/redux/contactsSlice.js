import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    // addContact(state, action) {
    //   const newName = name;
    //   const newNumber = number;
    //   const nameExists = contacts.some(contact => contact.name === newName);
    //   if (nameExists) {
    //     alert(newName + ' is already in contacts.');
    //   } else {
    //     setContacts(prevContacts => [
    //       ...prevContacts,
    //       {
    //         name: newName,
    //         number: newNumber,
    //         id: nanoid(),
    //       },
    //     ]);
    //   }
    // },
    addContact: {
      reducer(state, action) {
        // for now without checking if name exists
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {},
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
