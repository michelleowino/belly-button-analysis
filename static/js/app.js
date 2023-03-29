d3.json('./static/data/samples.json').then(({names}) => {
    names.forEach(name => {
        d3.select('select').append('option').text(name)
    });
    optionChanged();
});

const optionChanged = () => {
    let selection = d3.select('select').node().value;
    console.log(selection);

    d3.json('./static/data/samples.json').then(({metadata, samples}) => {
        let meta = metadata.filter(({id}) => selection==id)[0];
        let samp = samples.filter(({id}) => selection==id)[0];

        d3.select('.panel-body').html('');
        Object.entries(meta).forEach(([key,val]) => {
            d3.select('.panel-body').append('h4').text(`${key.toUpperCase()}: ${val}`)
        })
        console.log(meta, samp);
      

    });
    
    };
  
  