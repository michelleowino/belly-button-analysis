# belly-button-analysis

![image](https://user-images.githubusercontent.com/119654958/229339669-11716a68-9531-4ed9-96d8-8afb1939b557.png)

# Background

In this assignment, I built an interactive dashboard to explore the Belly Button Biodiversity using data provided in samples.json, which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Steps Completed: 
- Used the d3.js library to load data from a JSON file named "samples.json" located in the "./static/data" directory. Then extracted three arrays from the JSON data: "names", "metadata", and "samples".

- The "names" array contains a list of IDs for each individual in the study, while the "metadata" and "samples" arrays contain metadata and sample information for each individual, respectively.

- Once the data is successfully loaded, filtered out for the selected individual (using the value of the drop-down menu). Then displayed the metadata associated with the selected individual, by first clearing the contents of the "panel-body" element, and then appending a series of "h4" elements to it, each containing a key-value pair of metadata for the selected individual.

![image](https://user-images.githubusercontent.com/119654958/229341162-236107dd-6dec-44c7-a063-96e774e0d065.png)

- Finally displayed the bar and bubble charts then defined the function to display.

## Bar Chart Features: 
- Updates when a new sample is selected 
- Uses top 10 sample values as values 
- Uses otu_ids as the labels 
- Uses otu_labels as the tooltip 

![image](https://user-images.githubusercontent.com/119654958/229340962-ef820659-4f48-4836-9fe8-c10095e4bb58.png)

## Bubble Chart Features: 
- Updates when a new sample is selected
- Uses otu_ids for the x values
- Uses otu_ids for marker colors
- Uses sample_values for the y values
- Uses sample_values for the marker size 
- Uses `otu_labels for text values

![image](https://user-images.githubusercontent.com/119654958/229341084-0de420bd-4a29-4316-b777-1d406503852f.png)

## References
Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/Links to an external site.
