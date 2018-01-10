export default (items) => {
  return items.map((item,index,items) =>  {
    return {
      description: item.description,
      sales: item.sales,
      sales2: item.sales2,
      sales3: item.sales3,
      sales4: item.sales4
    }

  });
};
