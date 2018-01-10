import selectPlotData from '../../selectors/plot-data';
import items from '../fixtures/items';
import plotData from '../fixtures/plot-data';

test('should return empty array if no items', () => {
  const res = selectPlotData([]);
  expect(res).toEqual([]);
});

test('should return plot data for only 1 item passed', () => {
  const res = selectPlotData([items[0]]);
  expect(res).toEqual([plotData[0]]);
});

test('should return plot data for all items', () => {
  const res = selectPlotData(items);
  expect(res).toEqual(plotData);
});
