import plotDataFormat from '../../selectors/plot-data-format';
import plotData from '../fixtures/plot-data';

test('should return empty array if no data', () => {
  const res = plotDataFormat([]);
  expect(res).toEqual([]);
});

test('should return plot data formatted for only 1 item', () => {
  const res = plotDataFormat([plotData[0]]);
  expect(res).toEqual([{
          label: 'Pant',
          backgroundColor: expect.any(String),
          borderColor: expect.any(String),
          borderWidth: 1,
          hoverBackgroundColor: expect.any(String),
          hoverBorderColor: expect.any(String),
          data: [plotData[0].sales, plotData[0].sales2, plotData[0].sales3, plotData[0].sales4]
      }]);
});

test('should return plot data formatted for all items', () => {
  const res = plotDataFormat(plotData);
  expect(res).toEqual([
        {
          label: 'Pant',
          backgroundColor: expect.any(String),
          borderColor: expect.any(String),
          borderWidth: 1,
          hoverBackgroundColor: expect.any(String),
          hoverBorderColor: expect.any(String),
          data: [plotData[0].sales, plotData[0].sales2, plotData[0].sales3, plotData[0].sales4]
        },
        {
          label: 'Shirt',
          backgroundColor: expect.any(String),
          borderColor: expect.any(String),
          borderWidth: 1,
          hoverBackgroundColor: expect.any(String),
          hoverBorderColor: expect.any(String),
          data: [plotData[1].sales, plotData[1].sales2, plotData[1].sales3, plotData[1].sales4]
        },
        {
          label: 'Coat',
          backgroundColor: expect.any(String),
          borderColor: expect.any(String),
          borderWidth: 1,
          hoverBackgroundColor: expect.any(String),
          hoverBorderColor: expect.any(String),
          data: [plotData[2].sales, plotData[2].sales2, plotData[2].sales3, plotData[2].sales4]
        }
  ]);
});
