// import path from 'path';
// import { promises as fs } from 'fs';

import fsPromises from 'fs/promises';
import path from 'path';

export async function getLocalData() {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), '../../dataBlogArticles.js');
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath);
  // Parse data as json
  const objectData = JSON.parse(jsonData);

  return objectData;
  console.log(objectData);
}
