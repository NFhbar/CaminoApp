import React from 'react';
import { shallow } from 'enzyme';
import { AddItemPage } from '../../components/AddItemPage';
import items from '../fixtures/items';

let addItem, history, wrapper;

beforeEach(() => {
  addItem = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddItemPage addItem={addItem} history={history} />);
});

test('should render AddItemPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ItemForm').prop('onSubmit')(items[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addItem).toHaveBeenLastCalledWith(items[1]);
});
