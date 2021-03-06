const { createDescObj } = require('./utils');
/**
 * 路由
 */
module.exports = {
    switchTab: createDescObj(
        0,
        '跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面',
        'https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.switchTab.html',
        'https://docs.alipay.com/mini/api/ui-tabbar'
    ),
    reLaunch: createDescObj(
        1,
        '关闭所有页面，打开到应用内的某个页面',
        'https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.reLaunch.html',
        'https://docs.alipay.com/mini/api/hmn54z',
        {
            msg: 'alipay: url 为 tabbar 页面时不支持传参'
        }
    ),
    redirectTo: createDescObj(
        0,
        '关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面',
        'https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.redirectTo.html',
        'https://docs.alipay.com/mini/api/fh18ky'
    ),
    navigateTo: createDescObj(
        0,
        '保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 wx.navigateBack 可以返回到原页面。小程序中页面栈最多十层。',
        'https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html',
        'https://docs.alipay.com/mini/api/zwi8gx'
    ),
    navigateBack: createDescObj(
        0,
        '关闭当前页面，返回上一页面或多级页面',
        'https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html',
        'https://docs.alipay.com/mini/api/kc5zbx'
    )
};