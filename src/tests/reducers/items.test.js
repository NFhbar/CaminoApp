import itemsReducer from '../../reducers/items';
import items from '../fixtures/items';

test('should set default state', () => {
  const state = itemsReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove item by id', () => {
  const action = {
    type: 'REMOVE_ITEM',
    id: items[1].id
  };
  const state = itemsReducer(items, action);
  expect(state).toEqual([items[0], items[2]]);
});

test('should not remove item if id not found', () => {
  const action = {
    type: 'REMOVE_ITEM',
    id: '-1'
  };
  const state = itemsReducer(items, action);
  expect(state).toEqual(items);
});

test('should add item', () => {
  const item = {
    id: '100',
    description: 'Dress',
    note: '',
    createdAt: 20000,
    amount: 3000
  };
  const action = {
    type: 'ADD_ITEM',
    item
  };
  const state = itemsReducer(items, action);
  expect(state).toEqual([...items, item]);
});

test('should edit an expense', () => {
  const amount = 12000;
  const action = {
    type: "EDIT_ITEM",
    id: items[1].id,
    updates: {
      amount
    }
  };
  const state = itemsReducer(items, action);
  expect(state[1].amount).toBe(amount);
});

test('should not edit an expense if id not found', () => {
  const amount = 12000;
  const action = {
    type: "EDIT_ITEM",
    id: '-1',
    updates: {
      amount
    }
  };
  const state = itemsReducer(items, action);
  expect(state).toEqual(items);
});
