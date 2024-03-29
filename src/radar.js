const fs = require('fs');
const matter = require('gray-matter');
const marked = require('marked');
const path = require('path');


const markdownDir = './blips';  
const radarJsonFile = './dist/radar.json';

const markdownFiles = fs.readdirSync(markdownDir)
  .filter(file => file.endsWith('.md'));


const radarData = [];

markdownFiles.forEach(file => {
  const filePath = path.join(markdownDir, file);
  const fileContents = fs.readFileSync(filePath, 'utf-8');

  const { data, content } = matter(fileContents);

  const { ring, quadrant, isNew } = data;

  const description = marked.parse(content);

  const radarItem = {
    name: path.basename(file, '.md'),
    ring,
    quadrant,
    isNew: `${isNew}`,
    description,
  };

  radarData.push(radarItem);
});

fs.mkdirSync("./dist")
fs.writeFileSync(radarJsonFile, JSON.stringify(radarData, null, 2));

console.log('Radar JSON file created successfully!');
