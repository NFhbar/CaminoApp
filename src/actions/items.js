import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_ITEM
export const addItem = (item) => ({
  type: 'ADD_ITEM',
  item
});

export const startAddItem = (itemData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      sales = Math.floor(Math.random()*Math.floor(100)),
      sales2 = Math.floor(Math.random()*Math.floor(100)),
      sales3 = Math.floor(Math.random()*Math.floor(100)),
      sales4 = Math.floor(Math.random()*Math.floor(100)),
    } = itemData;
    const item = {description, note, amount, sales, sales2, sales3, sales4};

    return database.ref('items').push(item).then((ref) => {
      dispatch(addItem({
        id: ref.key,
        ...item
      }));
    });
  };
};

// REMOVE_ITEM
export const removeItem = ({ id } = {}) => ({
  type: 'REMOVE_ITEM',
  id
});

// EDIT_ITEM
export const editItem = (id, updates) => ({
  type: 'EDIT_ITEM',
  id,
  updates
});

// SET_ITEMS
export const setItems = (items) => ({
  type: 'SET_ITEMS',
  items
});

export const startSetItems = () => {
  return (dispatch) => {
    return database.ref('items').once('value').then((snapshot) => {
      const items = [];

      snapshot.forEach((childSnapshot) => {
        items.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
      });

      dispatch(setItems(items));
    });
  };
};
