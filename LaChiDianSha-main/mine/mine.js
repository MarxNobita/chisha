// pages/mine/mine.js
const app = getApp()

Page({
  data: {
    src:"../../imgs/login.png",
   //判断小程序的API，回调，参数，组件等是否在当前版本可用。
   canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
   var that = this;
   
  },
  bindGetUserInfo: function (e) {
    var that = this
    wx.getSetting({
      success:function(res){
        console.log(res)
        var quan = res.authSetting['scope.userInfo']
        if(quan){
          //有了这个权限
          wx.getUserInfo({
            success:function(res){
              console.log(res)
              that.setData({
                src:res.userInfo.avatarUrl
              })
            }
          })
        }else{
          //meiyou 权限
          wx.authorize({
            scope:"scope.userInfo",
            success:function(res){
            
            }
          })
        }
      }
    })
  },
  //获取用户信息接口
  queryUsreInfo: function () {
  
   
  }
   
 })

