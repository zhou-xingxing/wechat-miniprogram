// pages/userInfo/userInfo.js
const app=getApp()
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userEmail:'',
    userAddress:'',
  },
  emailChange(e){
    this.setData({
      userEmail:e.detail.value
    })
  },
  addressChange(e){
    this.setData({
      userAddress:e.detail.value
    })
  },
  saveUserInfo(){
    if(!util.emailcheck(this.data.userEmail)){
      wx.showToast({
        title: "邮箱格式不合法",
        icon: 'error',
        duration: 1500
      })
      return
    }
    let token=app.globalData.token
    let that=this
    // console.log(that.data)
    wx.request({
      url: 'https://ss.xiaozeze.top:9527/updateUserInfo',
      method:'POST',
      header:{
        'token':token
      },
      data:{
        email:that.data.userEmail,
        address:that.data.userAddress
      },
      success(res){
        if(res.data.ok==false){
          wx.showToast({
            title: res.data.msg,
            icon: 'error',
            duration: 1500
          })
        }
        else{
          wx.showToast({
            title: '保存成功',
            icon: 'success',
            duration: 1000,
            success: function() {
              setTimeout(function() {
                //要延时执行的代码
                wx.navigateBack({
                  delta: 1 //返回上级页面
                })
              }, 1000) //延迟时间
            },
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let token=app.globalData.token
    if(token==''){
      wx.showToast({
        title: "您还未登录",
        icon: 'error',
        duration: 1000,
        success: function() {
          setTimeout(function() {
            //要延时执行的代码
            wx.navigateBack({
              delta: 1 //返回上级页面
            })
          }, 1500) //延迟时间
        },
      })
      return
    }
    let that=this
    wx.request({
      url: 'https://ss.xiaozeze.top:9527/getUserInfo',
      method:'POST',
      header:{
        'token':token
      },
      success(res){
        // console.log(res)
        if(res.data.ok==false){
          wx.showToast({
            title: res.data.msg,
            icon: 'error',
            duration: 1500
          })
        }
        else{
          if(res.data.address!=null){
            that.setData({
              userAddress:res.data.address,
            })
          }
          if(res.data.email!=null){
            that.setData({
              userEmail:res.data.email,
            })
          }
          // console.log(res.data)
        }
      },
      fail(){
        wx.showToast({
          title: '请求失败',
          icon: 'error',
          duration: 1500
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})