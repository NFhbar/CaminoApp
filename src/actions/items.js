import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_ITEM
export const addItem = (item) => ({
  type: 'ADD_ITEM',
  item
});

// ASYNC ADD ACTION
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

// ASYNC REMOVE ACTION
export const startRemoveItem = ({ id } = {}) => {
  return (dispatch) => {
    return database.ref(`items/${id}`).remove().then(() =>{
      dispatch(removeItem({ id }));
    });
  };
};

// EDIT_ITEM
export const editItem = (id, updates) => ({
  type: 'EDIT_ITEM',
  id,
  updates
});

// ASYNC EDIT ACTION
export const startEditItem = (id, updates) => {
  return (dispatch) => {
    return database.ref(`items/${id}`).update(updates).then(() => {
      dispatch(editItem(id, updates));
    });
  };
};

// SET_ITEMS
export const setItems = (items) => ({
  type: 'SET_ITEMS',
  items
});

// ASCYN SET ACTION
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
