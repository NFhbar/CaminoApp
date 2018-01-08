import React from 'react';
import { shallow } from 'enzyme';
import ItemListItem  from '../../components/ItemListItem';
import items from '../fixtures/items';

test('should render ItemListItem correctly', () => {
  const wrapper = shallow(<ItemListItem {...items[0]} />);
  expect(wrapper).toMatchSnapshot();
});
