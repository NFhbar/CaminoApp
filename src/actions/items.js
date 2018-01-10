import uuid from 'uuid';

// ADD_ITEM
export const addItem = (
  {
    description = '',
    note = '',
    amount = 0
  } = {}
) => ({
  type: 'ADD_ITEM',
  item: {
    id: uuid(),
    description,
    note,
    amount,
    sales: Math.floor(Math.random()*Math.floor(100)),
    sales2: Math.floor(Math.random()*Math.floor(100)),
    sales3: Math.floor(Math.random()*Math.floor(100)),
    sales4: Math.floor(Math.random()*Math.floor(100))
  }
});

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
