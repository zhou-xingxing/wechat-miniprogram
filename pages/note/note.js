// pages/note/note.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //提交事件
  formSubmit(e) {
    var msg=e.detail.value.message;
    // console.log('form发生了submit事件，携带数据为：', msg);
    if(msg==""){
      wx.showToast({
        title: '输入不能为空',
        icon: 'error',
        duration: 2000
       })
       return
    }
    wx.request({
      url: 'https://ss.xiaozeze.top:9527/note',
      method:'POST',
      data:{
        message:msg,
      },
      header:{
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        // console.log(res.data);
        wx.showToast({
          title: '投递成功',
          icon: 'success',
          duration: 1500,
          success: function() {
            setTimeout(function() {
              //要延时执行的代码
              wx.navigateBack({
                delta: 1 //返回上级页面
              })
            }, 1500) //延迟时间
          },
        })
      },
      fail:function(){
        wx.showToast({
          title: '投递失败',
          icon: 'error',
          duration: 2000
        })
      }

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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