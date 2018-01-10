export default (plots) => {

  return plots.map((plot,index,plots) => {
    const color = Math.floor(Math.random()*Math.floor(256));
    const color2 = Math.floor(Math.random()*Math.floor(256));
    const color3 = Math.floor(Math.random()*Math.floor(256));

    return {
          label: plot.description,
          backgroundColor: 'rgba('+color+','+color2+','+color3+','+'0.2)',
          borderColor: 'rgba('+color+','+color2+','+color3+','+'1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba('+color+','+color2+','+color3+','+'0.4)',
          hoverBorderColor: 'rgba('+color+','+color2+','+color3+','+'1)',
          data: [plot.sales, plot.sales2, plot.sales3, plot.sales4]
    }
  });
};
