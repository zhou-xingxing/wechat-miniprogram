// pages/show/show.js
Page({
    // 事件处理函数
    skipRandom() {
      wx.navigateTo({
        url: '../random/random'
      })
    },
    // 事件处理函数
    skipWeather() {
      wx.navigateTo({
        url: '../weather/weather'
      })
    },

    // 事件处理函数
    skipNote:function() {
      wx.navigateTo({
        url: '../note/note'
      })
    },

    skipnbaSchedule:function(){
      wx.navigateTo({
        url: '../nbaSchedule/nbaSchedule'
      })
    },
  /**
   * 页面的初始数据
   */
  data: {
    func:[
      {imgsrc:"/images/building-Fill.png",
       title:"摇骰子",
       bindtap:"skipRandom"
      },
      {imgsrc:"/images/bag-Fill.png",
       title:"查天气",
       bindtap:"skipWeather"
      },
      {imgsrc:"/images/edit-Fill.png",
       title:"写树洞",
       bindtap:"skipNote"
      },
      {imgsrc:"/images/cloud-Fill.png",
       title:"NBA赛程",
       bindtap:"skipnbaSchedule"
      },
    ]
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
  onShareAppMessage: function (res) {
    return{
      title:"Ze小工具"
    }
  },

  onShareTimeline:function(){
    return{

    }
  }


})