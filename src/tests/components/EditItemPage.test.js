import React from 'react';
import { shallow } from 'enzyme';
import items from '../fixtures/items';
import { EditItemPage } from '../../components/EditItemPage';

let editItem, removeItem, history, wrapper;

beforeEach(() => {
  editItem = jest.fn();
  removeItem = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditItemPage
      editItem={editItem}
      removeItem={removeItem}
      history={history}
      item={items[2]}
    />
  );
});

test('should render EditItemPage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editItem', () => {
  wrapper.find('ItemForm').prop('onSubmit')(items[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editItem).toHaveBeenLastCalledWith(items[2].id, items[2]);
});

test('should handle removeItem', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeItem).toHaveBeenLastCalledWith({
    id: items[2].id
  });
});
