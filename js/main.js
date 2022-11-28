// 页面下侧插件广告关闭逻辑
$('#extClose').click(() => {
  $('#extention').css('display', 'none');
});

// 提示信息封装
const successMessage = (type, text) => {
  const key = new Date().getTime();
  $('body').append(
    `<div id="${key}" class="alert alert-${type} my-alert" role="alert">${text}</div>`
  );
  $(`#${key}`).addClass('show');
  setTimeout(() => {
    $(`#${key}`).removeClass('show');
    setTimeout(() => {
      $(`#${key}`).remove();
    }, 500);
  }, 1000);
};

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
