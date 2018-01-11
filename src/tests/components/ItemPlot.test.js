import React from 'react';
import { shallow } from 'enzyme';
import {ItemPlot} from '../../components/ItemPlot';
import plotData from '../fixtures/plot-data';

test('should render ItemPlot with plot data', () => {
  const wrapper = shallow(<ItemPlot plots={plotData} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ItemPlot with empty message', () => {
  const wrapper = shallow(<ItemPlot plots={[]} />);
  expect(wrapper).toMatchSnapshot();
});
