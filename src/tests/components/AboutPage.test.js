import React from 'react';
import { shallow } from 'enzyme';
import AboutPage from '../../components/AboutPage';

test('should render About Page correctly', () => {
  const wrapper = shallow(<AboutPage />);
  expect(wrapper).toMatchSnapshot();
});
