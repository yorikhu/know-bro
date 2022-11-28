import studyPageList from '../constants/studyPageList.js';
import { docsDOMGenerator } from '../utils/index.js';

const tempPageList = [];

studyPageList.forEach((item) => {
  tempPageList.push(docsDOMGenerator(item));
});

$('#pagesList').append(tempPageList.join(''));
