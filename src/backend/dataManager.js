import modules from './json/modules.json';

class DataManager{
  UpdateModuleProgress(moduleName,  progress){
    modules.data.forEach(module => {
      if(module.name === moduleName){
        module.completion = progress;
      }
    });
  }

  UpdateChapterProgress(moduleName, chapterIndex, progress){
    modules.data.forEach(module => {
      if(module.name === moduleName){
        module.chapters[chapterIndex].completion = progress;
      }
    });
  }
}

// // Read JSON data from a file
// const readData = (filePath) => {
//   try {
//     const data = readFileSync(filePath, 'utf8');
//     return JSON.parse(data);
//   } catch (error) {
//     console.error('Error reading JSON data:', error);
//     return null;
//   }
// };

// // Write JSON data to a file
// const writeData = (filePath, data) => {
//   try {
//     writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
//     console.log('Data written successfully.');
//   } catch (error) {
//     console.error('Error writing JSON data:', error);
//   }
// };

export default DataManager;