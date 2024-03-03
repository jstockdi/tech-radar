const fs = require('fs');
const matter = require('gray-matter');
const path = require('path');

const markdownDir = './';  
const radarJsonFile = './dist/radar.json';

const markdownFiles = fs.readdirSync(markdownDir)
  .filter(file => file.endsWith('.md'));

const radarData = [];

markdownFiles.forEach(file => {
  const filePath = path.join(markdownDir, file);
  const fileContents = fs.readFileSync(filePath, 'utf-8');

  const { data, content } = matter(fileContents);

  const { ring, quadrant, isNew } = data;

  const description = content.split('\n\n').map(paragraph => `<p>${paragraph}</p>`).join('\n');

  const radarItem = {
    name: path.basename(file, '.md'),
    ring,
    quadrant,
    isNew: isNew === 'true', // Convert to boolean
    description,
  };

  radarData.push(radarItem);
});

fs.writeFileSync(radarJsonFile, JSON.stringify(radarData, null, 2));

console.log('Radar JSON file created successfully!');
