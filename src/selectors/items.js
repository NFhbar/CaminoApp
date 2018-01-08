// Get visible items
export default (items, {text, sortBy}) => {
  return items.filter((item) => {
    const textMatch = item.description.toLowerCase().includes(text.toLowerCase());

    return textMatch;
  }).sort((a, b) => {
    if (sortBy === 'amount') {
      return a.amount < b.amount ? 1: -1;
    } else if (sortBy === 'sales') {
      return a.sales < b.sales ? 1: -1;
    }
  });
};
