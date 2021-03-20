// pages/note/note.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //提交事件
  formSubmit(e) {
    var message=e.detail.value.message;
    console.log('form发生了submit事件，携带数据为：', message);
    if(message==""){
      wx.showToast({
        title: '输入不能为空',
        icon: 'error',
        duration: 2000
       })
    }
    else{
      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 2000
       })
    }
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