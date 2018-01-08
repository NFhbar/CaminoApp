import React from 'react';
import { shallow } from 'enzyme';
import { ItemListFilters } from '../../components/ItemListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByAmount, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByAmount = jest.fn();
  wrapper = shallow(
    <ItemListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
    />
  );
});

test('should render ItemListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ItemListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const value = 'pants';
  wrapper.find('input').simulate('change', {
    target: { value }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by amount', () => {
  const value = 'amount';
  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find('select').simulate('change', {
    target: { value }
  });
  expect(sortByAmount).toHaveBeenCalled();
});
