import { successMessage } from '../utils/index.js';

// 页面下侧插件广告关闭逻辑
$('#extClose').click(() => {
  $('#extention').css('display', 'none');
});

// 弹窗逻辑函数
const signInOrSignUpModalLogic = (type) => {
  // 弹窗隐藏时触发
  $(`#${type}Modal`).on('hide.bs.modal', (event) => {
    // 清空表单内容
    setTimeout(() => {
      $(`#${type}Form input`).val('');
      $(`#${type}Form`).removeClass('was-validated');
    }, 500);
  });
  // 弹窗中确认按钮被点击
  $(`#${type}Submit`).click((e) => {
    $(`#${type}Form`).addClass('was-validated');

    let isFormEmpty = false;
    $(`#${type}Form input`).map((index, el) => {
      isFormEmpty = !!el.value ? isFormEmpty : true;
    });
    if (!isFormEmpty) {
      // 修改用户名
      $('.username').html(`欢迎回来，<b>${$('#signInUserName').val()}</b>！`);
      // 提示提交成功
      successMessage('success', type === 'signIn' ? '登录成功' : '注册成功');
      // 如果是登录成功则消除顶部登录提示
      if (type === 'signIn') $('.alert-join-us').css('display', 'none');
      // 触发取消按钮的点击事件，让弹窗消失
      $(`#${type}Cancel`).trigger('click');
    }
  });
};

signInOrSignUpModalLogic('signIn');
signInOrSignUpModalLogic('signUp');

// 给页面文章绑定点击事件，点击跳转到对应文章地址
$('#pagesList .page-content').click((e) => {
  window.open($(e.currentTarget).attr('link'), '_blank');
});

// 喜欢事件绑定
$('#pagesList .love').click((e) => {
  if ($(e.currentTarget).attr('class') === 'love') {
    $(e.currentTarget).addClass('active');
    successMessage('success', '已喜欢');
  } else {
    $(e.currentTarget).removeClass('active');
    successMessage('success', '已取消喜欢');
  }
});

// 收藏事件绑定
$('#pagesList .collect').click((e) => {
  if ($(e.currentTarget).attr('class') === 'collect') {
    $(e.currentTarget).addClass('active');
    successMessage('success', '已收藏');
  } else {
    $(e.currentTarget).removeClass('active');
    successMessage('success', '已取消收藏');
  }
});
