import indexPageList from '../constants/indexPageList.js';
import { docsDOMGenerator, successMessage } from '../utils/index.js';

const tempPageList = [];

indexPageList.forEach((item) => {
  tempPageList.push(docsDOMGenerator(item));
});

$('#pagesList').append(tempPageList.join(''));