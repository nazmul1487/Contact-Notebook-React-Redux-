import {
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SELECT_CONTACT,
  CLEAR_CONTACT,
  DELETE_SELECTED_CONTACT,
} from "../constant/types";

const intialState = {
  contacts: [
    {
      id: 1,
      name: "Md. Nazmul Hassan",
      email: "Nazmul@gmail.com",
      phone: "111111111111",
    },
    {
      id: 2,
      name: "Milon",
      email: "milon@gmail.com",
      phone: "6565787878",
    },
    {
      id: 3,
      name: "fakrul",
      email: "fakrul@gmail.com",
      phone: "65776454554",
    },
    {
      id: 4,
      name: "Mithu",
      email: "mithu@gmail.com",
      phone: "22222222222",
    },
    {
      id: 5,
      name: "Shanto",
      email: "shanto@gmail.com",
      phone: "545454545",
    },
    {
      id: 5,
      name: "Sohan",
      email: "sohan@gmail.com",
      phone: "6565656565",
    },
    {
      id: 7,
      name: "Noman",
      email: "noman@gmail.com",
      phone: "75983589345",
    },
    
  ],
  contact: null,
  selectedContacts: [],
};

export const contactReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case GET_CONTACT:
      let arr = state.contacts.filter(
        (contact) => contact.id === action.payload
      );
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        contact: arr,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case DELETE_SELECTED_CONTACT:
      return {
        ...state,
        contacts: [],
      };
    case SELECT_CONTACT:
      return {
        ...state,
        selectedContacts: action.payload,
      };

    case CLEAR_CONTACT:
      return {
        ...state,
        selectedContacts: [],
      };
    default:
      return state;
  }
};