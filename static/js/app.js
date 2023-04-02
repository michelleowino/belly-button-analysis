// Load the data from samples.json and use d3.js to select the "select" HTML element and append an "option" HTML element for each individual
d3.json('./static/data/samples.json').then(({ names, metadata, samples }) => {
  names.forEach(name => {
    d3.select('select').append('option').text(name);
  });
  optionChanged();
});

// Define optionChanged and select dropdown element to get the selected value then log 
const optionChanged = () => {
  let selection = d3.select('select').node().value;
  console.log(selection);

  // load data from samples.json file
  // Then once loaded succesfully, filter out for the selected individual
  d3.json('./static/data/samples.json').then(({ metadata, samples }) => {
    let meta = metadata.filter(({ id }) => selection == id)[0];
    let samp = samples.filter(({ id }) => selection == id)[0];

    // Display metadata
    d3.select('.panel-body').html('');
    Object.entries(meta).forEach(([key, val]) => {
      d3.select('.panel-body').append('h4').text(`${key.toLowerCase()}: ${val}`);
    });

    // Display charts
    barChart(samp);
    bubbleChart(samp);
  });
};

// Define the function to display the horizontal bar chart
function barChart(sample) {
  const top10SampleValues = sample.sample_values.slice(0, 10).reverse();
  const top10OTUIds = sample.otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse();
  const top10OTULabels = sample.otu_labels.slice(0, 10).reverse();

  const trace = {
    x: top10SampleValues,
    y: top10OTUIds,
    type: 'bar',
    orientation: 'h',
    text: top10OTULabels,
    marker: {
      width: 4
    }
  };

  const data = [trace];

  const layout = {
    title: 'Top 10 OTUs found in individual',
    xaxis: { title: 'Sample Values' },
    yaxis: { title: 'OTU IDs' }
  };

  Plotly.newPlot('bar', data, layout);
}

// Define the function to display the bubble chart
function bubbleChart(sample) {
  const trace = {
    x: sample.otu_ids,
    y: sample.sample_values,
    mode: 'markers',
    marker: {
      size: sample.sample_values,
      color: sample.otu_ids,
      colorscale: 'Earth'
    },
    text: sample.otu_labels
  };

  const data = [trace];

  const layout = {
    title: 'OTUs found in individual',
    xaxis: { title: 'OTU IDs' },
    yaxis: { title: 'Sample Values' },
    showlegend: false,
    height: 500,
    width: 1200
  };

  Plotly.newPlot('bubble', data, layout);
}
