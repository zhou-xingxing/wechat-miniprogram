// pages/weather/weather.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city:'',
    update_time:'',
    wea:'',
    tem:'',
    humidity:'',
    win:'',
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
    var that=this
    wx.request({
      url: 'https://tianqiapi.com/api?version=v6&appid=29866954&appsecret=QLD3si1i',
      method:'GET',
      success:function(res){
        // console.log(res.data);
        that.setData({
          city:res.data.city,
          update_time:res.data.update_time,
          wea:res.data.wea,
          tem:res.data.tem,
          humidity:res.data.humidity,
          win:res.data.win
        })
      },
      fail:function(){
        console.log('请求失败')
      }
    })
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