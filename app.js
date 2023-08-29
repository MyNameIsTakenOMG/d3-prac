// const pBroswer = document.querySelector('p');

// const pD3 = d3.select('p');

// console.log(pBroswer);
// console.log(pD3);

// const el = d3
//   .select('body')
//   .append('p')
//   // .attr('class', 'foo')
//   .classed('foo', true)
//   .classed('bar', true)
//   .text('hello world')
//   .style('color', 'blue');
// console.log(el);

// const p = body.append('p')

const data = [10, 20, 30, 40, 50];

const el = d3.select('ul').selectAll('li').data(data);
// .join('li')
// .text('hello');

console.log(el);
