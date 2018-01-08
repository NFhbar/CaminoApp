import { addItem, editItem, removeItem } from '../../actions/items';

test('should setup remove item action object', () => {
  const action = removeItem({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_ITEM',
    id: '123abc'
  });
});

test('should setup edit item action object', () => {
  const action = editItem('123abc', { note: 'New note value' });
  expect(action).toEqual({
    type: 'EDIT_ITEM',
    id: '123abc',
    updates: {
      note: 'New note value'
    }
  });
});

test('should setup add item action object with provided value', () => {
  const itemData = {
    description: 'Hat',
    amount: 109500,
    note: 'This was an item added'
  };
  const action = addItem(itemData);
  expect (action).toEqual({
    type: 'ADD_ITEM',
    item: {
      ...itemData,
      id: expect.any(String),
      sales: expect.any(Number)
    }
  });
});

test('should setup add item action object with default value', () => {
  const action = addItem();
  expect(action).toEqual({
    type: 'ADD_ITEM',
    item: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      sales: expect.any(Number)
    }
  });
});
