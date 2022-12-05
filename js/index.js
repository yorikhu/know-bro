import indexPageList from '../constants/indexPageList.js';
import { docsDOMGenerator } from '../utils/index.js';

const tempPageList = [];

indexPageList.forEach((item) => {
  tempPageList.push(docsDOMGenerator(item));
});

$('#pagesList').append(tempPageList.join(''));

// 给页面文章绑定点击事件，点击跳转到对应文章地址
$('#pagesList .page-content').click((e) => {
  window.open($(e.currentTarget).attr('link'), '_blank');
});
